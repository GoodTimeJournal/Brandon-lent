import React from 'react';
import { TextField } from '@material-ui/core';

const ReflectionFormOne = props => {
  return (
    <div className="reflection-form-page">
      <div className="reflection-progress">
        <h3 className="active">Question 1</h3>
        <h3>Question 2</h3>
        <h3>Question 3</h3>
        <h3>Summary</h3>
      </div>

      <form className="reflection-form" onSubmit={props.nextStep}>
        <p>
          Ipsum enim consequat veniam magna cupidatat duis mollit esse do eu id
          cillum consectetur cillum.
        </p>

        <TextField
          onChange={props.handleChange}
          id="outlined-textarea"
          // hover color to match theme
          multiline
          autoFocus
          required
          margin="normal"
          variant="outlined"
          rows="12"
          rowsMax="50"
          name="q1"
          value={props.q1}
        />
        <div className="reflection-buttons">
          <button>Next Question</button>
        </div>
      </form>
    </div>
  );
};

export default ReflectionFormOne;
