import world from "../assets/world.png";
import "./styles/Loading.css";

const Loading = () => {
  return (
    <div className="container_Loading">
      <div className="line_One" />
      <div className="line_Two" />
      <img
        src={world}
        alt="loading"
        loading="lazy"
        width="300px"
        height="300px"
      />
    </div>
  );
};

export default Loading;
