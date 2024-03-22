import { useState } from "react";
import data from "./data/todo.json";
import TodoAdd from "./components/TodoAdd";
import TodoItem from "./components/TodoItem";
import EditTodoItem from "./components/EditTodoItem";
function App() {
  const [todos, setTodos] = useState(data);
  const [message, setMessage] = useState("");

  const handleTodoDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setMessage("Task deleted successfully");
    timeOut();
  };

  const handleTodoEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
    setMessage("Task is being edited");
    timeOut();
  };
  const handleTaskEdit = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
    setMessage("Task edited successfully");
    timeOut();
  };
  const handleAddTodo = (task) => {
    if (task === "") {
      setMessage("Task cannot be empty");
      return timeOut();
    }
    const newTask = {
      id: todos.length + 1,
      task: task,
      completed: false,
      isEditing: false,
    };
    setTodos([newTask, ...todos]);
    setMessage("Task added successfully");
    timeOut();
  };
  const handleTodoToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
    setMessage("Status updated successfully");
    timeOut();
  };
  const timeOut = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };
  return (
    <>
      <main className="container">
        <h2>TodoList</h2>
        <TodoAdd handleAddTodo={handleAddTodo} />
        <section className="card__section">
          <p className="card__description">
            Te quedan por realizar{" "}
            <strong className="primary-color">{todos.length}</strong> tareas
          </p>
          <p className="card__message">{message}</p>
          <section className="card__list">
            {todos.map((todo) =>
              todo.isEditing ? (
                <EditTodoItem
                  key={todo.id}
                  todo={todo}
                  handleTaskEdit={handleTaskEdit}
                />
              ) : (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleTodoDelete={handleTodoDelete}
                  handleTodoEdit={handleTodoEdit}
                  handleTodoToggle={handleTodoToggle}
                />
              )
            )}
          </section>
        </section>
      </main>
      <footer>
        <p className="footer">&copy; Hecho con ❤️ por Cristina Bosa</p>
      </footer>
    </>
  );
}

export default App;
