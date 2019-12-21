import React from "react";
import logo from "../assets/bootstrap-icon.png";

const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-1 col-md text-center">
          © 2020 By Maxime Meunier. Powered by{" "}
          <a href="https://getbootstrap.com/" alt="bootstrap website">
            <img
              style={{ width: "25px", height: "25px" }}
              src={logo}
              alt="bootstrap icon"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
