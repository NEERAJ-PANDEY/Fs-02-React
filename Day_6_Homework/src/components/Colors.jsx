import React from "react";

const Colors = ({ bgcolor, colorName, textColor, colorCode }) => {
  return (
    <div className="border-2 mr-2 rounded-xl cursor-pointer ">
      <div className={`${bgcolor} box`}></div>
      <div className="details flex justify-center items-center flex-col">
        <div>{colorCode}</div>
        <div className={textColor}>{colorName}</div>
      </div>
    </div>
  );
};

export default Colors;
