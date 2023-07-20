import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const listCards = TASKS.map((tasks) => {
    return <TaskList task={tasks.text} key={tasks.text}/>
  })

  // const categoryOptions = CATEGORIES.map((category) => {
  //   return <CategoryFilter category={category}/>
  // })

  const selectOptions = CATEGORIES.filter((option) => option !== "All")
  console.log(selectOptions) 
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* {categoryOptions} */}
      <NewTaskForm categories={selectOptions}/>
      {listCards}
       
    </div>
  );
}

export default App;
