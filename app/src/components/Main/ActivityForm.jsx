import React from 'react';
import '../../styles/ActivityForm.scss';

const ActivityForm = props => {
  return (
    <div className="form-page">
      <form className="activity-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Activity"
          value={props.name}
          onChange={props.handleChange}
        />
        <input
          type="number"
          name="enjoymentRating"
          placeholder="Enjoyment Rating (1-10)"
          value={props.enjoymentRating}
          onChange={props.handleChange}
          min="1"
          max="10"
        />
        <input
          type="number"
          name="energyLevel"
          placeholder="Energy Level (1-10)"
          value={props.energyLevel}
          onChange={props.handleChange}
          min="1"
          max="10"
        />
        <input
          type="number"
          name="engagement"
          placeholder="Engagement (1-10)"
          value={props.engagement}
          onChange={props.handleChange}
          min="1"
          max="10"
        />
        <button>{props.isEditing ? 'Update Activity' : 'Add Activity'}</button>
      </form>
    </div>
  );
};

export default ActivityForm;
