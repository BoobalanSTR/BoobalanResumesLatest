import React, { Fragment } from "react";
import About from "../About/About";
import Header from "../Header/Header";
import HeroSection from "../hero-section/HeroSection";

const Layout = () => {
  return (
    <Fragment>
      <HeroSection></HeroSection>
      <Header></Header>
      <About></About>
    </Fragment>
  );
};

export default Layout;
