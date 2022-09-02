import { useState } from "react";
import Card from "../components/cards";
import SME from "../assets/images/sme.svg";
import Partner from "../assets/images/partner.svg";
import Button from "../components/button";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [selected, setSelected] = useState("sme");
  return (
    <div>
      <h1 className="text-center title">Select your category</h1>
      <div className="card_background">
        <Card
          img={SME}
          category="SMEs"
          active={selected === "sme"}
          onClick={() => setSelected("sme")}
        />
        <Card
          img={Partner}
          category="Partner"
          active={selected === "partner"}
          onClick={() => setSelected("partner")}
        />
      </div>
      <div className="button_wrapper">
        <Link to={`${selected === "sme" ? '/create-account' : '#'}`}>
          <Button type="primary" text="Next" disabled={selected === ""} />
        </Link>
      </div>
      <div className="text-center mt-2">
        Already have an account?{" "}
        <a
          href="htttp://localhost/signin"
          className="link_text"
          target="_blank"
          rel="noreferrer"
        >
          Sign in
        </a>{" "}
      </div>
    </div>
  );
};

export default Home;
