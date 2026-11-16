import TaskList from "./TaskList";
import Button from "./Button";
import React from "react";

export default function ListForm() {
  const [tasks, setTasks] = React.useState([]);
  //waitting for finish(handler)
  function addTask() {
    const newTask = {
      title: "new task",
    };
    setTasks((prev) => {
      return [...tasks, newTask];
    });
  }
  return (
    <>
      <h2> what do you wanna do today?</h2>
      <TaskList tasks={tasks}></TaskList>
      <Button name="add" handler={addTask}></Button>
      <Button name="delete"></Button>
    </>
  );
}
