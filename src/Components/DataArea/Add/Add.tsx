import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { notify } from "../../../Utils/Notify";
import { useForm } from "react-hook-form";
import { FormModel } from "../../../Models/FormModel";

function Add(): JSX.Element {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormModel>();
  const auth = useSelector<AppState>((AppState) => AppState.auth);

  const [randomLetter, setRandomLetter] = useState("אלף...");

  useEffect(() => {
    // Retrieve auth status from localStorage
    const storedAuth = localStorage.getItem("blueGrapes");
    if (!auth && storedAuth !== "true") {
      navigate("/home");
    }
  }, []);

  function getRandomLetter() {
    const hebrewAlphabet = [
      "א",
      "ב",
      "ג",
      "ד",
      "ה",
      "ו",
      "ז",
      "ח",
      "ט",
      "י",
      "כ",
      "ל",
      "מ",
      "נ",
      "ס",
      "ע",
      "פ",
      "צ",
      "ק",
      "ר",
      "ש",
      "ת",
    ];
    setRandomLetter(
      hebrewAlphabet[Math.floor(Math.random() * hebrewAlphabet.length)]
    );
  }

  function send(form: FormModel) {
    try {
      console.log(form);
      localStorage.setItem("form", JSON.stringify(form));
      notify.success("works");
        navigate("/land-city/grading");
    } catch (err: any) {
      notify.error(err);
    }
  }

  return (
    <div className="Add">
      <button className="button" onClick={getRandomLetter}>
        {randomLetter}
      </button>
      <form onSubmit={handleSubmit(send)}>
        <div className="wave-group">
          <input {...register("punchName")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">שם שבא לך לתת לו בוקס</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("waterBody")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">גוף מים</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("element")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">אלמנט</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("category")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">קטגוריה בארץ עיר</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("songName")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">שם של שיר בז'אנר באותה אות</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("color")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">צבע</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("cheese")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">גבינה</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("holoName")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">שם שיגרום לך להיעצר בשואה</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("foodProblem")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">בעיה בחדר אוכל</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("virus")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">מחלה \ נגיף</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("nagadName")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">שם של נגד</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("painMethod")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">דרך עינויים \ הריגה</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("idfJob")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">תפקיד מונפץ בצה''ל</span>
          </label>
        </div>

        <div className="wave-group">
          <input {...register("quote")} type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char">ציטוט מפורסם</span>
          </label>
        </div>

        <button className="full-rounded sendButton">
          <span>שלח והמתן לשיפוט</span>
        </button>
      </form>
    </div>
  );
}

export default Add;
