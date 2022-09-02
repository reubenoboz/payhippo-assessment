import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./layout.scss";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="main_container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
