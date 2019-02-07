import React, { Component } from "react";
import ActivityCard from "../components/Main/ActivityCard";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import {
  deleteActivity,
  editActivity,
  getActivities
} from "../store/actions/activity";
import { getReflections } from "../store/actions/reflection";
import ActionButtons from "../components/Main/ActionButtons";
import SidebarLeft from "../components/Main/SidebarLeft";
import SearchBar from "../components/Main/SearchBar";
import "../styles/Feed.scss";
const token = localStorage.getItem("token");

class MainView extends Component {
  state = {
    isExpanded: false
  };

  componentDidMount = () => {
    setTimeout(() => this.props.getActivities(token), 500);
  };

  expandCardMenu = id => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  deleteActivity = id => {
    const token = localStorage.getItem("token");
    this.props.deleteActivity(token, id);
    setTimeout(() => this.props.getActivities(token), 1000);
  };

  editActivity = id => {
    const selected = this.props.activityLog.find(
      activity => activity.id === id
    );
    this.props.history.push("/activity");
    this.props.editActivity(selected);
  };

  render() {
    let mappedActivities;
    if (Array.isArray(this.props.activities)) {
      mappedActivities = this.props.activities.map(activity => (
        <ActivityCard
          key={activity.id}
          id={activity.id}
          name={activity.name}
          enjoymentRating={activity.enjoymentRating}
          energyLevel={activity.energyLevel}
          engagement={activity.engagement}
          timestamp={activity.timestamp}
          editActivity={this.editActivity}
          deleteActivity={this.deleteActivity}
          expandCardMenu={this.expandCardMenu}
          isExpanded={this.state.isExpanded}
        />
      ));
    }

    return this.props.isLoading ? (
      <div>loading</div>
    ) : (
      <>
        <div className="home-display">
          <div className="feed">{mappedActivities}</div>
        </div>
        <ActionButtons history={this.props.history} />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.user.isLoading,
    activeEdit: state.activity.activeEdit,
    activities: state.activity.activities
  };
};
export default connect(
  mapStateToProps,
  { deleteActivity, editActivity, getActivities, getReflections }
)(MainView);
