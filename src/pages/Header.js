import React from "react";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h1 className="my-0 mr-md-auto">Le Bon Plaisir</h1>
      <nav className="my-2 my-md-0 mr-md-3">
        <SocialIcon
          className="p-2"
          url="https://facebook.com"
          network="facebook"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          className="p-2"
          url="https://instagram.com"
          network="instagram"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          className="p-2"
          url="https://vimeo.com/"
          network="vimeo"
          style={{ height: 25, width: 25 }}
        />
      </nav>
    </div>
  );
};

export default Header;
