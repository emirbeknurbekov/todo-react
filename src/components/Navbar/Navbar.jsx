import React from "react";
import Button from "../UI/Button";

const Navbar = ({ setComponent }) => {
  return (
    <div className="bg-indigo-500 h-[7vh] w-[100%] flex justify-around items-center">
      <h3 className="w-30% text-white text-xl inline">Navbar</h3>
      <div className="w-[20%] flex gap-5 justify-around items-center">
        <div onClick={() => setComponent("todos")}>
          <Button>Todos</Button>
        </div>

        <div onClick={() => setComponent("create")}>
          <Button>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
