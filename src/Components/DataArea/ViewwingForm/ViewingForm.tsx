import { useNavigate } from "react-router-dom";
import "./ViewingForm.css";

function ViewingForm(): JSX.Element {
  const navigate = useNavigate();
  const pointsArr = JSON.parse(localStorage.getItem("selectedOptions") || "[]");
  const totalPoints = pointsArr.reduce(
    (acc: number, curr: string) => acc + parseFloat(curr),
    0
  );
  console.log(totalPoints);

  const formObj = JSON.parse(localStorage.getItem("form") || "{}");
  const tempArr = Object.keys(formObj).map((cell) => ({
    cell,
    value: formObj[cell] || "ריק",
  }));
  const cells = [
    "שם שבא לך לתת לו בוקס",
    "גוף מים",
    "אלמנט",
    "קטגוריה בארץ עיר",
    "שם של שיר בז'אנר באותה אות",
    "צבע",
    "גבינה",
    "שם שיגרום לך להיעצר בשואה",
    "בעיה בחדר אוכל",
    "מחלה \\ נגיף",
    "שם של נגד",
    "דרך עינויים \\ הריגה",
    "תפקיד מונפץ בצה''ל",
    "ציטוט מפורסם",
  ];

  return (
    <div className="ViewingForm">
      <table>
        <thead>
          <tr>
            <th>קטגוריה</th>
            <th>תשובה</th>
            <th>ניקוד</th>
          </tr>
        </thead>
        <tbody>
          {cells.map((cell, index) => (
            <tr key={index}>
              <td>{cell}</td>
              <td>{tempArr[index]?.value}</td>
              <td>{pointsArr[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{totalPoints} נקודות </h2>
      <button 
        onClick={() => {
          navigate("/land-city");
          localStorage.removeItem("pointSumPerPage");
          localStorage.removeItem("form");
          localStorage.removeItem("selectedOptions");
        }}
        className="button"
      >
        משחק חדש
      </button>
    </div>
  );
}

export default ViewingForm;
