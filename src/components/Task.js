import React from "react";

function Task() {
  return (
    <div className="task" key={index}>
      <div className="label">CATEGORY HERE</div>
      <div className="text">{task}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
