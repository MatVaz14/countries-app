import { Link } from "react-router-dom";

import "./styles/Card.css";

const Card = ({ id, flag }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="container_Card">
        <img src={flag} alt="countrieFlag" width="200px" height="150px" />
      </div>
    </Link>
  );
};

export default Card;
