import React from "react";

const Dropdown = ({ children, className, title, onClick, dropref }) => {
  return (
    <div className={className} onClick={onClick} ref={dropref}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Dropdown;
