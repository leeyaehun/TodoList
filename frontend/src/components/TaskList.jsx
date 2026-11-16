import ListItem from "./ListItem";

export default function TaskList(props) {
  console.log(props);
  return (
    <ul className="task-list">
      {props.tasks.map((entry) => {
        console.log(entry);
        console.log(entry.title);
        return <ListItem title={entry.title}></ListItem>;
      })}
    </ul>
  );
}
