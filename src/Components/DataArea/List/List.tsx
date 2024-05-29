import "./List.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { useNavigate } from "react-router-dom";

function List(): JSX.Element {
  let whereInAnswer = [
    "לכלול בתחילת התשובה",
    "לכלול איפשהו בתשובה",
    `לכלול בסוף התשובה`,
  ];

  const whatToInclude = [
    `צריך ${
      whereInAnswer[Math.floor(Math.random() * whereInAnswer.length)]
    } את האות הראשונה של השאלה`,
    `צריך ${
      whereInAnswer[Math.floor(Math.random() * whereInAnswer.length)]
    } את האות האחרונה של השאלה`,
    `צריך ${
      whereInAnswer[Math.floor(Math.random() * whereInAnswer.length)]
    } את המילה הראשונה של השאלה`,
    `צריך ${
      whereInAnswer[Math.floor(Math.random() * whereInAnswer.length)]
    } את המילה האחרונה של השאלה`,
  ];

  //   const behaviors = [
  //     "לענות כאילו אנחנו במאה ה-17",
  //     "לענות בסגנון מדעי",
  //     "לענות בסגנון הומוריסטי",
  //     "לענות בשפה גבוהה",
  //     "לשנות תנוחה בכל פעם שנשאלים",
  //   ];

  //   const specificTriggers = [
  //     "אם השאלה מכילה את האות 'א'",
  //     "אם השאלה מכילה מילה מסוימת",
  //     "אם השאלה מתחילה באות מסוימת",
  //     "אם השאלה מסתיימת במילה מסוימת",
  //   ];

  //   const actions = [
  //     "לשנות תנוחה",
  //     "להגיד משפט מסוים",
  //     "לעשות תנועה מסוימת",
  //     "להשתמש במילה ספציפית בתשובה",
  //   ];

  function generateLegality() {
    const condition =
      whatToInclude[Math.floor(Math.random() * whatToInclude.length)];
    // const behavior = behaviors[Math.floor(Math.random() * behaviors.length)];
    // const specificTrigger =
    //   specificTriggers[Math.floor(Math.random() * specificTriggers.length)];
    // const action = actions[Math.floor(Math.random() * actions.length)];

    setRuleString(`חוקיות חדשה: ${condition}`);
  }

  const navigate = useNavigate();
  const auth = useSelector<AppState>((AppState) => AppState.auth);
  const [ruleString, setRuleString] = useState<string>();

  useEffect(() => {
    // Retrieve auth status from localStorage
    const storedAuth = localStorage.getItem("blueGrapes");
    if (!auth && storedAuth !== "true") {
      navigate("the-grapevine");
    }
  }, []);

  function makeRuleString() {}
  return (
    <div className="List">
      <button onClick={generateLegality} className="sendButton">
        תן לי חוקיות רנדומלית
      </button>
      <h2>{ruleString}</h2>
    </div>
  );
}

export default List;
