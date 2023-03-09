import React from "react";
// import Logo from "logo.png"
const NavLeft = () => {
  return (
    <div style={styles.container}>
      <div style={styles.listBox}>
        <img style={styles.logo} src="/relax.png" alt="relax" width={64} />
        <img style={styles.logo} src="/swim.png" alt="swim" width={64} />
        <img style={styles.logo} src="/drive.png" alt="drive" width={64} />
        <img style={styles.logo} src="/gym.png" alt="gym" width={64} />
      </div>
      <p style={styles.copyRight}>Copiryght, SportSee 2020</p>
    </div>
  );
};

export default NavLeft;

const styles = {
  container: {
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100vh",
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: 50,
    gap: 16,
  },

  listBox: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  copyRight: {
    color: "#fff",
    fontfamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    transform: "rotate(-90deg)",
    textAlign: "center",
  },
};
