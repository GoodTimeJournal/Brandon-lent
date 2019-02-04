import React, { Component } from "react";

import { HomeComponent } from "../components/Journal/HomeComponent";
import Navigation from "./Navigation";

import Login from "../views/Login";
import NewJournal from "../views/NewJournal";
import NewReflection from "../views/NewReflection";
import Journals from "../views/Journals";
import Reflections from "../views/Reflections";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentView: "Home"
    };
  }
  render() {
    return (
      <>
        <Navigation />
        <HomeComponent />
      </>
    );
  }
}

export default Home;
