import TaskList from "./TaskList";
import Button from "./Button";

export default function ListForm() {
  //waitting for finish(handler)
  return (
    <>
      <h2> what do you wanna do today?</h2>
      <TaskList></TaskList>
      <Button name="add" handler={das}></Button>
      <Button name="delete"></Button>
    </>
  );
}
