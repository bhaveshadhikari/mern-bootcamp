function Button({ title, backgroundColor, type = "button", onPress }) {
  return (
    <button
      type={type}
      onClick={onPress}
      style={{
        cursor: "pointer",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
        marginTop: 10,
        padding: "8px 16px",
        color: "#fff",
        border: "none",
        userSelect: "none",
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "cursive",
        }}
      >
        {title}
      </span>
    </button>
  );
}

export default Button
