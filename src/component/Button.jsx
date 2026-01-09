import React from "react";
// properties -> {title , backgroundColor, onPress}
function Button(props) {
  return (
    <div
      style={{
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        marginTop: 10,
        padding: 5,
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "cursive",
        }}
      >
        {props.title}
      </span>
    </div>
  );
}

export default Button;
