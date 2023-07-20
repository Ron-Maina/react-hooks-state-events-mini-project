import React from "react";

function Task(props) {
  return (
    <div className="task" key={index}>
      <div className="label">{props.tasks.category}</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
