import propsTypes from "prop-types";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
const TodoItem = ({ todo, handleTodoDelete, handleTodoEdit, handleTodoToggle }) => {
  const deleteTodo = () => {
    handleTodoDelete(todo.id);
  };
  const editTodo = () => {
    handleTodoEdit(todo.id);
  };
  const toggleCompleted = () => {
    handleTodoToggle(todo.id);
  }
  return (
    <div className="card">
      <h3>{todo.task}</h3>
      <span onClick={toggleCompleted}
        className={
          todo.completed ? "card__tag--completed" : "card__tag--pending"
        }
      >
        {todo.completed ? "Completed" : "Pending"}
      </span>
      <div className="card__options">
        <button className="btn btn--tertiary" onClick={editTodo}><img src={editIcon}/></button>
        <button className="btn btn--tertiary" onClick={deleteTodo}><img src={deleteIcon}/></button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: propsTypes.shape({
    id: propsTypes.number.isRequired,
    task: propsTypes.string.isRequired,
    completed: propsTypes.bool.isRequired,
  }).isRequired,
  handleTodoDelete: propsTypes.func.isRequired,
  handleTodoEdit: propsTypes.func.isRequired,
  handleTodoToggle: propsTypes.func.isRequired,
};

export default TodoItem;
