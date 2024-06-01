import React, { useEffect, useState } from "react";
import { authActionCreators } from "../../../Redux/AuthSlice";
import { appStore } from "../../../Redux/Store";
import imgSrc from "../../../Assets/Images/האשכול.png";
import "./Home.css";

function Home(): JSX.Element {
  const initialBlueGrapes = JSON.parse(
    localStorage.getItem("blueGrapes") || "false"
  );
  const [blueGrapes, setBlueGrapes] = useState(initialBlueGrapes);

  const initialWelcomeStr =
    localStorage.getItem("welcomeStr") || "אנא אשרו שהנכם אשכוליאנים";
  const [welcomeStr, setWelcomeStr] = useState<string>(initialWelcomeStr);

  const [buttonsState, setButtonsState] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
  });

  useEffect(() => {
    if (!blueGrapes) {
      const defaultWelcomeStr = "אנא אשרו שהנכם אשכוליאנים";
      localStorage.setItem("welcomeStr", defaultWelcomeStr);
      setWelcomeStr(defaultWelcomeStr);
    }
  }, [blueGrapes]);

  useEffect(() => {
    localStorage.setItem("blueGrapes", JSON.stringify(blueGrapes));
    console.log(blueGrapes);
  }, [blueGrapes]);

  useEffect(() => {
    if (Object.values(buttonsState).every(Boolean)) {
      setBlueGrapes(true);
      appStore.dispatch(authActionCreators.register(true));
      const newWelcomeStr = "ענבים כחולים?!?";
      localStorage.setItem("welcomeStr", newWelcomeStr);
      setWelcomeStr(newWelcomeStr);
    }
  }, [buttonsState]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    setButtonsState((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  return (
    <div className="Home">
      <p>
        ברוכים הבאים לאתר הרשמי של האשכול
        <br />
        {welcomeStr}
      </p>
      <div className="button-container">
        <img src={imgSrc} alt="אשכול" />
        <button
          name="btn1"
          className="btn btn1"
          onClick={handleButtonClick}
        ></button>
        <button
          name="btn2"
          className="btn btn2"
          onClick={handleButtonClick}
        ></button>
        <button
          name="btn3"
          className="btn btn3"
          onClick={handleButtonClick}
        ></button>
        <button
          name="btn4"
          className="btn btn4"
          onClick={handleButtonClick}
        ></button>
        <button
          name="btn5"
          className="btn btn5"
          onClick={handleButtonClick}
        ></button>
      </div>
    </div>
  );
}

export default Home;
