import propsTypes from "prop-types";
import { useState } from "react";
import updateIcon from "../assets/update.svg";
const EditTodoItem = ({todo, handleTaskEdit}) => {
  const [task, setTask] = useState(todo.task);

  const handleEventSubmit = (event) => {
    event.preventDefault();
    handleTaskEdit(task, todo.id);
    
    
  };

  return (
    <form className="card card--edit" onSubmit={handleEventSubmit}>
      <div className="form__control--edit">
        <input
          type="text"
          id="title"
          value={task}
          placeholder="Update task"
          
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button className="btn btn--tertiary" type="submit">
        <img src={updateIcon} alt="update" />
      </button>
    </form>
  );
};
EditTodoItem.propTypes = {
  handleTaskEdit: propsTypes.func.isRequired,
  todo: propsTypes.shape({
    id: propsTypes.number.isRequired,
    task: propsTypes.string.isRequired,
    completed: propsTypes.bool.isRequired,
    isEditing: propsTypes.bool.isRequired,
  }).isRequired,
};

export default EditTodoItem;
