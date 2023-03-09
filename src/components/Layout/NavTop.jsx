import React from "react";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div style={styles.container}>
      <img style={styles.logo} src="/logo.png" alt="logo" height="57.7" />
      <ul style={styles.listBox}>
        <Link to="/">
          <li style={styles.listItem}>Home</li>
        </Link>
        <li style={styles.listItem}>Profile</li>
        <li style={styles.listItem}>Settings</li>
        <li style={styles.listItem}>Community</li>
      </ul>
    </div>
  );
};

export default NavTop;

const styles = {
  container: {
    backgroundColor: "#000000",
    paddingTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
    position: "fixed",
    width: "100%",
    left: 0,
    top: 0,
  },
  logo: {
    marginLeft: 30,
  },
  listBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 100,
    width: "65%",
    listStyle: "none",
  },
  listItem: {
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24,
  },
};
