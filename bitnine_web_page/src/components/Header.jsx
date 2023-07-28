import "../styles/Header.css";
import Button from "./Button";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      {/* headline */}
      <div className="headerHeadline">
        <p style={{ textAlign: "center" }}>
          <b>AG Cloud Express: </b>Experience graph database in a cloud
          environment for FREE!{" "}
        </p>
      </div>

      {/* navigation */}
      <div className="headerNav">
        <img src="/img/b_logo.png" alt="bitnine logo" />
        <div className="navLinks">
          <a href="/" className="navLink">
            Products
          </a>
          <a href="/" className="navLink">
            Use Cases
          </a>
          <a href="/" className="navLink">
            Services
          </a>
          <a href="/" className="navLink">
            Resources
          </a>
          <a href="/" className="navLink">
            Blog
          </a>
          <a href="/" className="navLink">
            Company
          </a>
          <a href="/" className="navLink">
            IR
          </a>
          <Button desc="Try Now" />
          <FaSignOutAlt className="icon" onClick={handleSignout} />
        </div>
      </div>
    </header>
  );
};

export default Header;
