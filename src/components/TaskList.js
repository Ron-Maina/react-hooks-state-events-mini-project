import React from "react";


function TaskList(props) {
    return (
      <div className="tasks">
        <h2>{props.task}</h2>
      </div>
    );
}

export default TaskList;
