import React from "react";

const Input = ({ handleFunc, inpValue }) => {
  return (
    <input
      type="text"
      className="m-0 w-full h-[35px] bg-transparent border border-white text-xl rounded outline-none "
      onChange={handleFunc}
      value={inpValue}
    />
  );
};

export default Input;
