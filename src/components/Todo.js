import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faCircle,
  faTrashAlt,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";

const Todo = ({ time, text, setToDos, toDos, id, e }) => {
  const deleteHandler = () => {
    console.log(id);
    setToDos(toDos.filter((el) => el.id !== id));
  };

  const completeHandler = () => {
    setToDos(
      toDos.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo-item">
      <FontAwesomeIcon
        onClick={completeHandler}
        color="white"
        icon={e.completed ? faCheckCircle : faCircle}
      />
      <div className={`info ${e.completed ? " completedClass" : ""} `}>
        <h3>{text}</h3>
        <p>{time.slice(0, 15)}</p>
      </div>

      <FontAwesomeIcon
        onClick={deleteHandler}
        color="white"
        icon={faTrashAlt}
      />
    </div>
  );
};

export default Todo;
