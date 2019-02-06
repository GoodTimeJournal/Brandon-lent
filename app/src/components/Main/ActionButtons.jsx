import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import {
  AddCircle,
  RemoveCircle,
  NaturePeople,
  DirectionsRun
} from "@material-ui/icons/";

import "../../styles/ActionButtons.scss";

class ActionButtons extends React.Component {
  state = {
    isButtonsOpen: false
  };

  openButtons = e => {
    e.preventDefault();
    this.setState({ isButtonsOpen: !this.state.isButtonsOpen });
  };

  routeToForm = (e, route) => {
    e.preventDefault();
    this.props.history.push(`${route}`);
  };

  render() {
    console.log(this.props);
    return (
      <div className="buttons">
        {this.state.isButtonsOpen ? (
          <>
            <Fab
              onClick={e => this.openButtons(e)}
              aria-label="Add"
              className="subtract-button"
            >
              <RemoveCircle />
            </Fab>
            <Fab
              onClick={e => this.routeToForm(e, "/reflection")}
              aria-label="Add"
              className="reflection-icon"
            >
              <NaturePeople />
            </Fab>
            <p className="reflection-text">Reflection</p>
            <Fab
              onClick={e => this.routeToForm(e, "/activity")}
              aria-label="Add"
              className="activity-icon"
            >
              <DirectionsRun />
            </Fab>
            <p className="activity-text">Activity</p>
          </>
        ) : (
          <Fab
            onClick={e => this.openButtons(e)}
            aria-label="Add"
            className="add-button add-activity"
          >
            <AddCircle />
          </Fab>
        )}
      </div>
    );
  }
}

export default ActionButtons;
