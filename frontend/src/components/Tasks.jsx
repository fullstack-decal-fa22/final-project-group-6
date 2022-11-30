import { useMemo, useState } from "react";
import { autocompleteMatch } from "../utils/search";
import { TaskItem } from "./TaskItem";
import { BsPlus } from 'react-icons/bs';

export function Tasks(props) {
  const [inputValue, setInputValue] = useState("");

  const { tasks, onTaskAdd, onTaskToggle, query, onTaskEdit } = props;

  const queriedTasks = useMemo(() => autocompleteMatch(tasks, query), [query, tasks]);

  const toggleTask = (id) => {
    onTaskToggle(id);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * Date.now() + 1000),
      description: inputValue,
      isCompleted: false,
    };

    onTaskAdd(task);
    setInputValue("");
  }

  const handleEditTask = (id, taskInputValue) => {
    onTaskEdit(id, taskInputValue)
  }

  return (
    <ul>
      {queriedTasks.map(task => (
        <TaskItem
          key={task.id}
          onEdit={handleEditTask}
          id={task.id}
          onToggle={toggleTask}
          description={task.description} 
          isCompleted={task.isCompleted}
        />
      ))}
      <button
        className="submit_btn"
        onClick={handleAdd}
      >
        <BsPlus /> Add Task
      </button>
      {/* <form
        className="add_item_form_wrapper"
        noValidate
        onSubmit={handleAdd}
      >
        <button type="submit" className="submit_btn">
          <BsPlus />
        </button>
        <input
          className="add_item_field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
      </form> */}
    </ul>
  )
}