import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <img className="logo" src={logo} alt="" />

        <ul className="navbar">
          <li>
            <a href="">login</a>
          </li>
          <li>
            <a className="nav-menu" href="">
              Sign up
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
