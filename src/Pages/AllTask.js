import Todo from "../components/Todo";

const AllTask = ({ toDos, setToDos, filterTodos }) => {
  return (
    <div className="allTask">
      <h2>ALL TASKS</h2>
      <div className="taskContainer">
        <div className="task">
          {filterTodos.map((e) => {
            return (
              <Todo
                id={e.id}
                key={e.id}
                toDos={toDos}
                setToDos={setToDos}
                time={e.time}
                text={e.text}
                e={e}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
