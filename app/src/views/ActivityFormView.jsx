import React, { Component } from "react";
import ActivityForm from "../components/Main/ActivityForm";
import { connect } from "react-redux";
import { addActivity, updateActivity } from "../store/actions/activity";

class ActivityFormView extends Component {
  state = {
    activity: {
      name: "",
      fk: "",
      enjoymentRating: "",
      energyLevel: "",
      engagement: ""
    }
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      activity: {
        ...this.state.activity,
        fk: parseInt(localStorage.getItem("id"))
      }
    });
  };

  handleChange = e => {
    if (isNaN(e.target.value) || e.target.value === "") {
      this.setState({
        ...this.state,
        activity: {
          ...this.state.activity,
          [e.target.name]: e.target.value
        }
      });
    } else
      this.setState({
        ...this.state,
        activity: {
          ...this.state.activity,
          [e.target.name]: parseInt(e.target.value)
        }
      });
  };

  handleSubmit = e => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    this.props.isEditing // isEditing coming from Redux store
      ? this.props.updateActivity(this.state.activity)
      : this.props.addActivity(token, this.state.activity);

    this.props.history.push("/");
  };

  render() {
    console.log(this.state.activity);
    return (
      <ActivityForm
        name={this.state.activity.name}
        enjoymentRating={this.state.activity.enjoymentRating}
        energyLevel={this.state.activity.energyLevel}
        engagement={this.state.activity.engagement}
        timestamp={this.state.activity.timestamp}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isEditing={this.props.isEditing}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isEditing: state.activity.isEditing,
    activeEdit: state.activity.activeEdit
  };
};

export default connect(
  mapStateToProps,
  { addActivity, updateActivity }
)(ActivityFormView);
