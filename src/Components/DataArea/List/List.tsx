import "./List.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { useNavigate } from "react-router-dom";

function List(): JSX.Element {
  const navigate = useNavigate();
  const auth = useSelector<AppState>((AppState) => AppState.auth);

  useEffect(() => {
    // Retrieve auth status from localStorage
    const storedAuth = localStorage.getItem("blueGrapes");
    if (!auth && storedAuth !== "true") {
      navigate("the-grapevine");
    }
  }, []);

  return <div className="List">
    
  </div>;
}

export default List;
