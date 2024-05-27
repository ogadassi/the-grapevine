import "./Home.css";
import imgSrc from "../../../Assets/Images/האשכול.png";
import React, { useEffect, useState } from "react";
import { authActionCreators } from "../../../Redux/AuthSlice";
import { appStore } from "../../../Redux/Store";

function Home(): JSX.Element {
  // Initialize blueGrapes from localStorage
  const initialBlueGrapes = JSON.parse(
    localStorage.getItem("blueGrapes") || "false"
  );
  const [blueGrapes, setBlueGrapes] = useState(initialBlueGrapes);

  // Initialize welcomeStr from localStorage
  const initialWelcomeStr =
    localStorage.getItem("welcomeStr") || "אנא אשרו שהנכם אשכוליאנים";
  const [welcomeStr, setWelcomeStr] = useState<string>(initialWelcomeStr);

  //   change welcomeStr back if unauthorized
  useEffect(() => {
    if (!blueGrapes) {
      localStorage.setItem("welcomeStr", "אנא אשרו שהנכם אשכוליאנים");
      setWelcomeStr("אנא אשרו שהנכם אשכוליאנים");
    }
  }, []);

  // State for each button
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);

  function flick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    switch (event.currentTarget.name) {
      case "btn1":
        setBtn1(true);
        break;
      case "btn2":
        setBtn2(true);
        break;
      case "btn3":
        setBtn3(true);
        break;
      case "btn4":
        setBtn4(true);
        break;
      case "btn5":
        setBtn5(true);
        break;
    }
  }

  useEffect(() => {
    localStorage.setItem("blueGrapes", JSON.stringify(blueGrapes));
    console.log(blueGrapes);
  }, [blueGrapes]);

  useEffect(() => {
    if (btn1 && btn2 && btn3 && btn4 && btn5) {
      setBlueGrapes(true);
      appStore.dispatch(authActionCreators.register(true));
      localStorage.setItem("welcomeStr", "ענבים כחולים?!?");
      setWelcomeStr("ענבים כחולים?!?");
    }
  }, [btn1, btn2, btn3, btn4, btn5]);

  return (
    <div className="Home">
      <p>
        ברוכים הבאים לאתר הרשמי של האשכול
        <br />
        {welcomeStr}
      </p>
      <img src={imgSrc} alt="אשכול" />

      <button name="btn1" className="btn btn1" onClick={flick}></button>
      <button name="btn2" className="btn btn2" onClick={flick}></button>
      <button name="btn3" className="btn btn3" onClick={flick}></button>
      <button name="btn4" className="btn btn4" onClick={flick}></button>
      <button name="btn5" className="btn btn5" onClick={flick}></button>
    </div>
  );
}

export default Home;
