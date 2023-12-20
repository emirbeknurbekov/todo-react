import React, { useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import EditTodo from "./components/EditTodo/EditTodo";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [editedObj, setEditedObj] = useState(null);
  function createTodo(newTodo) {
    let newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }
  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
        return item;
      }
    });
    setTodos(newTodos);
  }
  function getEditedObj(id) {
    const todoObj = todos.find((item) => item.id === id);
    setEditedObj(todoObj);
    setComponent("edit");
  }
  function saveChanges(newObj) {
    let newTodos = todos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  }
  function deleteTodo(id) {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }
  const [component, setComponent] = useState("todos");
  return (
    <>
      <Navbar setComponent={setComponent} />
      <div className="w-full h-[86vh] bg-gray-600 flex flex-col items-center justify-center ">
        {component === "create" && <AddToDo createTodo={createTodo} />}

        {component === "todos" && (
          <TodoList
            todos={todos}
            changeStatus={changeStatus}
            getEditedObj={getEditedObj}
            deleteTodo={deleteTodo}
          />
        )}
        {component === "edit" && (
          <EditTodo
            setComponent={setComponent}
            saveChanges={saveChanges}
            editedObj={editedObj}
          />
        )}

        {/* {editedObj ? (
          
        ) : (
          <h4>No editing todo now</h4>
        )} */}
      </div>
      <Footer />
    </>
  );
}

export default App;
