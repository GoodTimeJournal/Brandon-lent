import React, { Component } from "react";

import { HomeComponent } from "../components/Journal/HomeComponent";
import Navigation from "./Navigation";

import NewJournal from "../views/NewJournal";
import NewReflection from "../views/NewReflection";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      views: {
        Homepage: HomeComponent,
        newJournal: NewJournal,
        newReflection: NewReflection
      },
      currentView: "Home"
    };
  }

  render() {
    return (
      <>
        <Navigation logOut={this.props.logOut} />
        <HomeComponent />
      </>
    );
  }
}

export default Home;
