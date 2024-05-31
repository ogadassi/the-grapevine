import "./List.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { useNavigate } from "react-router-dom";

function List(): JSX.Element {
  let clicks = 0;
  const [ruleString, setRuleString] = useState<string>();

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
    const singularPlayers = [
      "עומרי",
      "רז",
      "אביאני",
      "בני",
      "לנציאנו",
      "שני",
      "ליצ'י",
      "שמעיה",
      "רון",
      "קשפיץ",
      "גדסי",
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
      "להתעצבן",
      "להתמתח",
      "לסדר את הבגדים",
      "לענות כאילו הייתה שגיאת חוקיות",
      "לענות עם מספר המילים שהיו בשאלה",
      "לפהק",
      "להירדם עד שקוראים לו",
      "לשנות תנוחה",
      "לענות על השאלה הקודמת",
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
      "לענות עם המילה הבאה בארץ עיר ע''פ האות {letter}",

      "{action}, יש זיקוקים מידי פעם",
      "{action}, יש יריות מידי פעם",
      "{action}, בצעקות",
      "{action}, בשירה",
      "{action}, בלחישות",
      "{action}, בעברית תנ''כית",
      "{action}, כאילו אנחנו במאה ה-1{number}",
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

  function generateRule() {
    setRuleString(resolveRule(` כל פעם ש{trigger}, על {player} {action}.`));
    // limitClicks();
  }

  function resolveRule(ruleStr: string): string {
    const symbols: { [key: string]: Function } = {
      "{trigger}": getTrigger,
      "{player}": getPlayer,
      "{action}": getAction,
      "{number}": getNumber,
      "{letter}": getLetter,
    };
    for (const symbol in symbols) {
      while (ruleStr.includes(symbol)) {
        ruleStr = ruleStr.replace(symbol, symbols[symbol]());
      }
    }
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
      navigate("the-grapevine");
    }
  }, []);

  return (
    <div className="List">
      <button onClick={generateRule} className="sendButton">
        תן לי חוקיות רנדומלית
      </button>
      <h2>{ruleString}</h2>
    </div>
  );
}

export default List;
