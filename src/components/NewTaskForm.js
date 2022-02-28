import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input id='details' type="text" name="text" />
      </label>
      <label>
        Category
        <select id='category' name="category">
          {categories.map(category => category === 'All' || <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
