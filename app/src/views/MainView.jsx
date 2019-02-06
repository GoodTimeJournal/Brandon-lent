import React, { Component } from "react";
import ActivityCard from "../components/Main/ActivityCard";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getUser } from "../store/actions/user";
import { deleteActivity, editActivity } from "../store/actions/activity";
import ActionButtons from "../components/Main/ActionButtons";
import SidebarLeft from "../components/Main/SidebarLeft";
import SearchBar from "../components/Main/SearchBar";
import "../styles/Feed.scss";

class MainView extends Component {
  componentDidMount() {
    // this.props.getUser();
  }

  deleteActivity = id => {
    this.props.deleteActivity(id);
  };

  editActivity = id => {
    const selected = this.props.activityLog.find(
      activity => activity.id === id
    );
    this.props.history.push("/activity");
    this.props.editActivity(selected);
  };

  render() {
    const mappedActivities = this.props.activityLog.map(activity => (
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
      />
    ));

    return this.props.isLoading ? (
      <div className="loader-div">
        <Loader
          className="loader"
          type="TailSpin"
          color="black"
          height={80}
          width={80}
        />
      </div>
    ) : (
      <>
        <div className="home-display">
          <SidebarLeft />
          <div className="feed">
            <SearchBar />
            {mappedActivities}
          </div>
        </div>
        <ActionButtons history={this.props.history} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    activityLog: state.user.activityLog,
    isLoading: state.user.isLoading,
    activeEdit: state.activity.activeEdit
  };
};

export default connect(
  mapStateToProps,
  { getUser, deleteActivity, editActivity }
)(MainView);
