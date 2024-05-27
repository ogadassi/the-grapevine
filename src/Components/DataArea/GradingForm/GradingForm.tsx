import { useState, useEffect } from "react";
import "./GradingForm.css";
import { useNavigate } from "react-router-dom";

function GradingForm(): JSX.Element {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [pointSum, setPointSum] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [formArr, setFormArr] = useState<{ cell: string; value: string }[]>([]);
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

  useEffect(() => {
    const formObj = JSON.parse(localStorage.getItem("form") || "{}");
    const tempArr = Object.keys(formObj).map((cell) => ({
      cell,
      value: formObj[cell] || "ריק",
    }));
    setFormArr(tempArr);

    const savedScores = JSON.parse(
      localStorage.getItem("selectedOptions") || "[]"
    );
    setSelectedOptions(savedScores);
  }, []);

  useEffect(() => {
    const totalPoints = selectedOptions.reduce(
      (acc, curr) => acc + (parseInt(curr) || 0),
      0
    );
    setPointSum(totalPoints);
  }, [selectedOptions]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = newValue;
    setSelectedOptions(newSelectedOptions);
    localStorage.setItem("selectedOptions", JSON.stringify(newSelectedOptions));
  };

  return (
    <div className="GradingForm">
      <h1 className="cellName">{cells[index]}</h1>
      <br />
      <h2 className="value">{formArr[index] ? formArr[index].value : "ריק"}</h2>
      <button
        className="button"
        onClick={() => {
          index > 0 ? setIndex(index - 1) : setIndex(cells.length - 1);
        }}
      >
        הקודם
      </button>
      <button
        className="button"
        onClick={() => {
          index >= 0 && index < cells.length - 1
            ? setIndex(index + 1)
            : setIndex(0);
        }}
      >
        הבא
      </button>
      <br />
      {formArr[index]?.value !== "ריק" ? (
        <div className="wrapper">
          <div className="option">
            <input
              value="15"
              name="btn"
              type="radio"
              className="input"
              checked={selectedOptions[index] === "15"}
              onChange={handleChange}
            />
            <div className="btn">
              <span className="span">15</span>
            </div>
          </div>
          <div className="option">
            <input
              value="10"
              name="btn"
              type="radio"
              className="input"
              checked={selectedOptions[index] === "10"}
              onChange={handleChange}
            />
            <div className="btn">
              <span className="span">10</span>
            </div>
          </div>
          <div className="option">
            <input
              value="5"
              name="btn"
              type="radio"
              className="input"
              checked={selectedOptions[index] === "5"}
              onChange={handleChange}
            />
            <div className="btn">
              <span className="span">5</span>
            </div>
          </div>
          <div className="option">
            <input
              value="0"
              name="btn"
              type="radio"
              className="input"
              checked={selectedOptions[index] === "0"}
              onChange={handleChange}
            />
            <div className="btn">
              <span className="span">0</span>
            </div>
          </div>
        </div>
      ) : null}

      {formArr[index]?.cell === "quote" ? (
        <button
          onClick={() => navigate("/land-city/viewing")}
          className="button"
        >
          סיום
        </button>
      ) : null}

      <h1 className="points">{pointSum} נקודות</h1>
    </div>
  );
}

export default GradingForm;
