import { Link } from "react-router-dom";
import { useDispatch } from "../store/StoreProvider.js";
import { getCountries } from "../store/Action.js";
import "./styles/Start.css";

const Start = () => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    let data = await getCountries();
    dispatch({ type: "GET_COUNTRIES", payload: data });
  };
  return (
    <div className="container_Start">
      <div className="bg-linear circle-button">
        <Link onClick={handleClick} to="/home" className="style-link-home">
          <div className="bg-primary bg-circle-button">
            <span className="arrow-bg">→</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Start;
