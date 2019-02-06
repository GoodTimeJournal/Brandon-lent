import React from "react";
import Navigation from "../components/Navigation/Navigation";

const NavigationView = props => {
  return <Navigation logOut={props.logOut} />;
};

export default NavigationView;
