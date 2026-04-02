import React from "react";

function UiButton({ className = "", type = "button", children, ...props }) {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
}

export default UiButton;
