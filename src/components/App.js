import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //create state to hold tasks
  //create delete function in app to send down to task, grab text onClick to send back up to app, filter over task state to filter out the deleted task by name
  const [taskList, setTaskList] = useState(TASKS);
  const [category, setCategory] = useState('All');

  function handleDelete(text) {
    // console.log(text)
    const newTaskList = taskList.filter(task => {
      return task.text !== text;
    })
    setTaskList(newTaskList);
  }

  const visibleTasks = taskList.filter(task => {
    return category === 'All' || task.category === category;
  })

  function onTaskFormSubmit(event) {
    event.preventDefault();
    console.log(event.target)
    const formElement = event.target;
    const details = formElement['details'].value
    const category = formElement['category'].options[formElement['category'].selectedIndex].value

    const allTasks = [...taskList, { text: details, category: category }]

    setTaskList(allTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={visibleTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
