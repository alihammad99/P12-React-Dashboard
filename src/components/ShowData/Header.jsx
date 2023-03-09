import React from "react";

const Header = ({ name = "Unvalid" }) => {
  return (
    <header>
      <h1 style={styles.title}>
        Hello <span style={styles.name}>{name}</span>
      </h1>
      <p style={styles.text}>
        Congratulations! You reached yesterday’s goal! 👏
      </p>
    </header>
  );
};

export default Header;

const styles = {
  title: {
    color: "#000",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 48,
    textAlign: "left",
  },
  name: {
    color: "#FF0101",
    textAlign: "left",
  },
  text: { fontWeight: 400, fontSize: 18, color: "#000", textAlign: "left" },
};
