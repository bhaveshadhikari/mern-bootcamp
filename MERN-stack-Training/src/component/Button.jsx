import React from "react";
// properties -> {title , backgroundColor, onPress}
function Button(props) {
  const { disabled } = props;
  return (
    <button
      style={{
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        marginTop: 10,
        padding: 10,
        minWidth: 250
      }}
      disabled={disabled}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "Helvetica",
          color: 'white'

        }}
      >
        {props.title}
      </span>
    </button>
  );
}

export default Button;
