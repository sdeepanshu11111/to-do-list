import { useState, useEffect } from "react";

// import components
import FilterTask from "./components/FilterTask";
import AllTask from "./Pages/AllTask";
import NewTask from "./components/NewTask";
import CompletedTask from "./Pages/Completed";
import PendingTask from "./Pages/Pending";

// Routing
import { Route, Switch } from "react-router";

function App() {
  const [textInput, setTextInput] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("All tasks");
  const [filterTodos, setFilterTodos] = useState([]);

  console.log(status);

  // only for ones

  useEffect(() => {
    getToLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [toDos, status]);
  // functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(
          toDos.filter((e) => {
            return e.completed === true;
          })
        );

        console.log(filterTodos, "ff");

        break;
      case "pending":
        setFilterTodos(
          toDos.filter((e) => {
            return e.completed === false;
          })
        );
        break;
      default:
        setFilterTodos(toDos);
        break;
    }
  };

  // save to local

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  const getToLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(toDos))
      );
      setToDos(localTodo);
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Task Management App</h1>
      </nav>
      <main>
        <FilterTask setStatus={setStatus} status={status} />
        <Switch>
          <Route path="/to-do-list" exact>
            <AllTask
              onClick={filterHandler}
              filterTodos={filterTodos}
              setToDos={setToDos}
              toDos={toDos}
            />
          </Route>

          <Route path="/to-do-list/completed">
            <CompletedTask
              filterTodos={filterTodos}
              setToDos={setToDos}
              toDos={toDos}
            />
          </Route>
          <Route path="/to-do-list/pending">
            <PendingTask
              filterTodos={filterTodos}
              setToDos={setToDos}
              toDos={toDos}
            />
          </Route>
        </Switch>
        <NewTask
          setTextInput={setTextInput}
          textInput={textInput}
          setToDos={setToDos}
          toDos={toDos}
        />
      </main>
    </div>
  );
}

export default App;
