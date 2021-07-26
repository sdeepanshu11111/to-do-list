const NewTask = ({ setTextInput, toDos, setToDos, textInput }) => {
  const inputTextHandler = (e) => {
    if (e.target.value !== "") {
      setTextInput(e.target.value);
    }
  };

  const submitHandler = (d) => {
    if (textInput) {
      setToDos([
        ...toDos,
        {
          text: textInput,

          id: Math.random() * 1000,
          completed: false,
          time: String(new Date()),
        },
      ]);

      setTextInput("");
    } else {
      alert("Please Add Note");
    }
  };

  return (
    <div className="newTask">
      <h1>Create New Task</h1>
      <hr />
      <div className="inputContainer">
        <input
          onChange={inputTextHandler}
          placeholder="Enter note here..."
          type="text"
          value={textInput}
        />
        <button onClick={submitHandler} type="submit">
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
