import { Start } from "../components";

import Logo from "../assets/continents.png";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <section className="section_Landing">
      <div className="gap1_Landing">
        <h1 className="title_Landing">
          <span>C</span>ountries
        </h1>
        <Start />
      </div>
      <div className="gap2_Landing">
        <div className="blue__gradient" />
        <div className="pink__gradient" />
        <div className="celeste__gradient" />
        <img src={Logo} alt="Logo" width="300px" height="200px" />
      </div>
    </section>
  );
};

export default Landing;
