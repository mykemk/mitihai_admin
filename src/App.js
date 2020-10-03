import React, { useState, useCallback } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import CategoriesForm from "./components/product_categories/CategoriesForm";
import ProductsForm from "./components/products/ProductsForm";
import UserForm from "./components/users/UserForm";
import EventForm from "./components/events/EventForm";
import TestPost from "./utils/hooks/TestPost";
import TestUpdate from "./utils/hooks/TestUpdate";

function App() {
  const [showSideNav, setshowSideNav] = useState(false);
  const fullWidth = {
    left: "2%",
    width: "98%",
  };
  const hideSideNav = useCallback(() => {
    setshowSideNav(!showSideNav);
  }, [showSideNav]);
  return (
    <>
      <Header
        clickHandler={hideSideNav}
        isNavBarShown={showSideNav}
        newStyles={fullWidth}
      />
      <div className={showSideNav ? "sidenav" : "closedNav"}>
        <Navbar />
      </div>
      <div class Name="main" style={showSideNav ? null : fullWidth}>
        <EventForm />
      </div>
    </>
  );
}

export default App;
