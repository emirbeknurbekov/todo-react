import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
const AddToDo = ({ createTodo }) => {
  const [task, setTask] = useState("");
  const getTask = (e) => {
    setTask(e.target.value);
  };
  const createTask = () => {
    if (!task.trim()) {
      alert("Input is empty");
      return;
    }
    const newTask = {
      id: Date.now(),
      status: false,
      task: task,
    };
    createTodo(newTask);
    setTask("");
  };

  return (
    <div className="text-white ">
      <h2 className="text-3xl text-center m-2">Add Todo component</h2>
      {/* <input type="text" value={task} onChange={getTask} /> */}
      <Input handleFunc={getTask} inpValue={task} />
      {/* <button onClick={createTask}>Add</button> */}
      <div onClick={createTask} className="m-4 p-2">
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default AddToDo;
