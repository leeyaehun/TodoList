export default function TaskList(props) {
  return (
    <>
      <button className="custom-button" onClick={props.handler}>
        {props.name}
      </button>
    </>
  );
}
