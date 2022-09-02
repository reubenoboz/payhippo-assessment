import React from "react";
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer my-3">
      <div className="right_reserved"><span>&copy;</span>2022 Payhippo. All rights reserved.</div>
      <div className="footer_link_warapper">
        <a className="link_text" href="http://localhost/terms" rel="noreferrer" target="_blank">
          Terms Policy
        </a>
        <span className="footer_link_separator">-</span>
        <a className="link_text" href="http://localhost/policy" rel="noreferrer" target="_blank">
          Privacy Policy
        </a>
        <span className="footer_link_separator">-</span>
        <a className="link_text" href="http://localhost/faqs" rel="noreferrer" target="_blank">
          FAQs
        </a>
      </div>
    </div>
  );
};

export default Footer;
