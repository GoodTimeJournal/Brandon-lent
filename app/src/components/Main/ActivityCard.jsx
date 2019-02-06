import React from 'react';

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
      <div className="card-buttons">
        <button onClick={() => props.editActivity(props.id)}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ActivityCard;
