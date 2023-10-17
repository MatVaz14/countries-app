import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./styles/Navbar.css";

const Navbar = ({ page }) => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <h2>
        <span>C</span>ountries
      </h2>
      {page === 0 ? <Search /> : null}
      <div className="links_Container">
        <Link className="link_Nav" to="/home">
          <span>Home</span>
        </Link>
        <Link className="link_Nav" to="/activity">
          <span>Create Activity</span>
        </Link>
      </div>

      <div className="container_Menu-medium">
        {active === false ? (
          <GiHamburgerMenu
            className="menu-medium"
            onClick={() => setActive(!active)}
          />
        ) : (
          <AiOutlineClose
            className="menu-medium"
            onClick={() => setActive(!active)}
          />
        )}
      </div>
      {active ? (
        <div className="bg-menu-Medium">
          <Link className="link_Nav" to="/home">
            <span>Home</span>
          </Link>
          <Link className="link_Nav" to="/activity">
            <span>Create Activity</span>
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
