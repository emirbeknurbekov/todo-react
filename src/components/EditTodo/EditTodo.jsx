import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const EditTodo = ({ editedObj, saveChanges, setComponent }) => {
  const [editedTodo, setEditedTodo] = useState(editedObj);
  function editTodo(e) {
    setEditedTodo({
      ...editedTodo,
      task: e.target.value,
    });
  }
  return (
    <div>
      <h2>EditTodo Component</h2>
      {/* <input type="text" value={editedTodo.task} onChange={editTodo} /> */}
      <Input handleFunc={editTodo} inpValue={editedTodo.task} />

      <div
        onClick={() => {
          saveChanges(editedTodo);
          setComponent("todos");
        }}
      >
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditTodo;
