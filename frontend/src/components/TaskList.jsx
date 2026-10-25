import ListItem from "./ListItem";

export default function TaskList() {
  return (
    <ul className="task-list">
      <ListItem title="learn react"></ListItem>
      <ListItem title="learn node.js"></ListItem>
      <ListItem title="learn linux"></ListItem>
      <ListItem title="learn networking"></ListItem>
    </ul>
  );
}
