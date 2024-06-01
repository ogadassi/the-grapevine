import "./List.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { useNavigate } from "react-router-dom";

function List(): JSX.Element {
  const players = [
    "ליצ'י",
    "גדסי",
    "שמעיה",
    "לנציאנו",
    "רז",
    "בני",
    "אביאני",
    "קשפיץ",
    "עומרי",
    "רון",
    "שני",
  ];

  //   let clicks = 0;

  const [ruleString, setRuleString] = useState<string>();
  const [singularPlayers, setSingularPlayers] = useState<string[]>(players);
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    Array(11).fill(true)
  );

  const handleChange = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);

    if (newCheckedStates[index]) {
      setSingularPlayers([...singularPlayers, players[index]]);
    } else {
      setSingularPlayers(
        singularPlayers.filter((player) => player !== players[index])
      );
    }
  };

  useEffect(() => {
    console.log(singularPlayers);
  }, [singularPlayers]);

  function getTrigger(): string {
    const triggers = [
      "השואל מציין מאכל",
      "השואל מציין מקצוע",
      "נשאלת שאלה",
      "נשאלת שאלה עם האות {letter}",
      "השואל משנה תנוחה",
      "{player} משנה תנוחה",
    ];

    return triggers[Math.floor(Math.random() * triggers.length)];
  }
  function getPlayer(): string {
    const players = [
      "הנשאל",
      "הנשאל הקודם",
      "האדם הבא בסבב",
      "האדם מימין לנשאל",
      "האדם משמאל לנשאל",
      "האדם ש{player} מסתכל עליו",
      "{player} ו{player}",
    ];

    if (Math.random() < 0.9)
      return players[Math.floor(Math.random() * players.length)];
    else
      return singularPlayers[
        Math.floor(Math.random() * singularPlayers.length)
      ];
  }
  function getAction(): string {
    const actions = [
      "לענות",
      "לנאום בתגובה",
      "להשתעל",
      "לגרד באף",
      "לשאול 'מתי הולכים הביתה'",
      "לענות כמו chatGPT",
      "לתופף באוויר",
      "להתעצבן",
      "להתמתח",
      "לפהק בגסות",
      "לענות כNPC בSkyrim",
      "להתחיל לבנות באגרסיביות",
      "לענות בשאלה",
      "להיות פאסיב אגרסיב",
      "לאבד שפיות",
      "לחשוד שיש בחדר חפץ חשוד",
      "להביע התלהבות",
      "להתחיל לבכות",
      "להפוך לחנוך רוזן",
      "לסדר את הבגדים",
      "לענות כאילו הייתה שגיאת חוקיות",
      "לענות עם מספר המילים שהיו בשאלה",
      "להירדם עד שקוראים לו",
      "לשנות תנוחה",
      "לענות על השאלה הקודמת",
      "לענות בתור ניצול שואה",
      "לענות בתור ניצול השואה הארמנית",
      "לענות בתור אדם נשוי",
      "לקבל אישיות של חייזר בעל אמנזיה שמנסה להשתלב כל שניתן",

      "לענות בתור ההפך המוחלט של {player}",
      "לענות כאילו {player} הביא לו ג'וינט",
      "להסתכל על {player}",

      "לענות כשמספר המילים בתשובה הוא {number}",
      "לענות כשמספר ההברות בתשובה הוא {number}",
      "לענות כשמספר האותיות בתשובה הוא {number}",
      "לענות עם האות {letter} במילה ה{number} בתשובה",
      "לענות ללא האות {letter}",
      "לענות בתור חיה עם האות {letter}",
      "לענות עם המילה הבאה בארץ עיר ע''פ האות {letter}",

      "{action}, יש זיקוקים מידי פעם",
      "{action}, יש יריות מידי פעם",
      "{action}, יש דינוזאור",
      "{action}, בצעקות",
      "{action}, בשירה",
      "{action}, בלחישות",
      "{action}, כולנו במונית",
      "{action}, כולנו באוטובוס",
      "{action}, בעברית תנ''כית",
      "{action}, כאילו אנחנו במאה ה-1{number}",
      "{action}, כאילו אנחנו במאה ה-2{number}",
      "{action}, כאילו אנחנו אנשי מערות",
      "אסור {action}",
    ];
    return actions[Math.floor(Math.random() * actions.length)];
  }

  function getNumber(): string {
    const number = Math.floor(Math.random() * 9) + 1;
    return `${number}`;
  }

  function getLetter(): string {
    const hebrewAlphabet = [
      '"א"',
      '"ב"',
      '"ג"',
      '"ד"',
      '"ה"',
      '"ו"',
      '"ז"',
      '"ח"',
      '"ט"',
      '"י"',
      '"כ"',
      '"ל"',
      '"מ"',
      '"נ"',
      '"ס"',
      '"ע"',
      '"פ"',
      '"צ"',
      '"ק"',
      '"ר"',
      '"ש"',
      '"ת"',
      " הראשונה בשאלה",
      " האחרונה בשאלה",
      " האחרונה בשם של {player}",
    ];
    return `${
      hebrewAlphabet[Math.floor(Math.random() * hebrewAlphabet.length)]
    }`;
  }

  // gets rule to react webpage
  function getRule() {
    setRuleString(resolveRule(` כל פעם ש{trigger}, על {player} {action}.`));
    // limitClicks();
  }

  //   creates rule string
  function resolveRule(ruleStr: string): string {
    // object matching strings (symbols) to their functions
    const symbols: { [key: string]: Function } = {
      "{trigger}": getTrigger,
      "{player}": getPlayer,
      "{action}": getAction,
      "{number}": getNumber,
      "{letter}": getLetter,
    };

    // going over functions object.
    // checking per symbol if ruleStr contains it, and if so- replacing it.
    for (const symbol in symbols) {
      while (ruleStr.includes(symbol)) {
        ruleStr = ruleStr.replace(symbol, symbols[symbol]());
      }
    }

    // since some functions will return a string that has a symbol,
    // this loop calls the resolveRule recursively to get all symbols replaced.
    for (const symbol in symbols) {
      if (ruleStr.includes(symbol)) return resolveRule(ruleStr);
    }

    return ruleStr;
  }

  //   function limitClicks() {
  //     clicks++;
  // if (clicks===3)
  // }

  const navigate = useNavigate();
  const auth = useSelector<AppState>((AppState) => AppState.auth);

  useEffect(() => {
    // Retrieve auth status from localStorage
    const storedAuth = localStorage.getItem("blueGrapes");
    if (!auth && storedAuth !== "true") {
      navigate("/the-grapevine");
    }
  }, []);

  return (
    <div className="List">
      <h2>{ruleString}</h2>
      <button onClick={getRule} className="sendButton">
        תן לי חוקיות רנדומלית
      </button>
      <div className="players">
        {players.map((player, index) => (
          <div key={index}>
            <label className={checkedStates[index] ? "checked" : ""}>
              <input
                type="checkbox"
                checked={checkedStates[index]}
                onChange={() => handleChange(index)}
              />
              {player}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
