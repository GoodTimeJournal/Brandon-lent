import React from "react";
import { Button } from "@material-ui/core";

const ActivityCard = props => {
  return (
    <div className="activity-card">
      <div className="title-date">
        <h4 className="title">{props.name}</h4>
        <h4>{props.timestamp}</h4>
      </div>
      <div className="ratings rating-titles">
        <p>Engagement</p>
        <p>Energy</p>
        <p>Enjoyment</p>
      </div>
      <div className="ratings rating-numbers">
        <p>{props.energyLevel}</p>
        <p>{props.enjoymentRating}</p>
        <p>{props.engagement}</p>
      </div>
      <Button className="edit" onClick={() => props.editActivity(props.id)}>
        Edit
      </Button>
      <Button className="delete" onClick={() => props.deleteActivity(props.id)}>
        Delete
      </Button>
    </div>
  );
};

export default ActivityCard;
