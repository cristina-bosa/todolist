import propsTypes from "prop-types";
import { useState } from "react";
import addIcon from "../assets/add.svg";
const TodoAdd = ({ handleAddTodo }) => {
  const [task, setTask] = useState("");

  const handleEventSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(task);
    setTask("")
  };

  return (
    <form className="form" onSubmit={handleEventSubmit}>
      <div className="form__control">
        <label htmlFor="title">Task:</label>
        <input
          type="text"
          id="title"
          value={task}
          placeholder="Whats the task today?"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button className="btn btn--primary" type="submit">
        Add <img src={addIcon} alt="add" />
      </button>
    </form>
  );
};
TodoAdd.propTypes = {
  handleAddTodo: propsTypes.func.isRequired,
};

export default TodoAdd;
