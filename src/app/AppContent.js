import React, { useState, useCallback } from "react";
import "./App.css";
import Navbar from "../components/navbar/Navbar";
import MainSection from "app/MainSection";
import Header from "../components/header/Header.jsx";

function AppContent() {
  const isLargeScreen = window.screen.width > 1050;
  const [isNavbarShown, setIsNavbarShown] = useState(isLargeScreen);
  const fullWidthStyle = {
    left: "2%",
    width: "98%",
  };
  const toggleNavbar = useCallback(() => {
    setIsNavbarShown(!isNavbarShown);
  }, [isNavbarShown]);
  return (
    <div className="app">
      <Header
        clickHandler={toggleNavbar}
        isNavBarShown={isNavbarShown}
        newStyles={fullWidthStyle}
      />
      <div className={isNavbarShown ? "sidenav" : "closedNav"}>
        <Navbar toggleNavbar={toggleNavbar} />
      </div>
      <div onClick={isNavbarShown & !isLargeScreen ? toggleNavbar : null}>
        <MainSection
          isNavbarShown={isNavbarShown}
          fullWidthStyle={fullWidthStyle}
        />
      </div>
    </div>
  );
}

export default AppContent;
