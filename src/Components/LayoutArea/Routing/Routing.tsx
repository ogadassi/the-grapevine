import { Navigate, Route, Routes } from "react-router-dom";
import Add from "../../DataArea/Add/Add";
import List from "../../DataArea/List/List";
import Home from "../../HomeArea/Home/Home";
import Page404 from "../page404/page404";
import "./Routing.css";
import GradingForm from "../../DataArea/GradingForm/GradingForm";
import ViewingForm from "../../DataArea/ViewwingForm/ViewingForm";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        {/* Home: */}
        <Route path="/the-grapevine/home" element={<Home />} />

        {/* List: */}
        <Route path="/the-grapevine/game-of-hukiyoot" element={<List />} />

        {/* Filling Form: */}
        <Route path="/the-grapevine/land-city" element={<Add />} />

        {/* Grading Form: */}
        <Route path="/the-grapevine/land-city/grading" element={<GradingForm />} />

        {/* Viewing Form: */}
        <Route path="/the-grapevine/land-city/viewing" element={<ViewingForm />} />

        {/* Default Route: */}
        <Route path="/the-grapevine/" element={<Navigate to="/the-grapevine/home" />} />
        {/* Default Route: */}
        <Route path="/" element={<Navigate to="/the-grapevine/home" />} />

        {/* Page not found route: */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
