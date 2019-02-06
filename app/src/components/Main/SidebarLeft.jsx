import React from 'react';

const SidebarLeft = props => {
  return (
    <div className="sidebar-fixed">
      <div className="sidebar">
        <div className="box">
          <h5>recent reflection</h5>
        </div>
        <div className="box">
          <h5>overview</h5>
        </div>
        <hr />
        <div className="box calendar">
          <h5>calendar</h5>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
