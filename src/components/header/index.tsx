import React from "react";
import "./header.scss"

const Header = () => {
  return (
    <div className="w-max header py-1 mb-1">
      <img className="header-logo" src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/client-app-assets%2Flogos%2Fpayhippo.png?alt=media&amp;token=04642aaf-e989-445d-97c6-bb8bf035ccbf" alt="Payhippo logo" />
    </div>
  );
};

export default Header;
