import React from "react";

function DarkMode({ children }) {
  return <div style={styles.darkmode}>{children}</div>;
}

const styles = {
  darkmode: {
    alignItems: "center",
    backdropFilter: "hue-rotate(-90deg) brightness(0.2)",
    bottom: 0,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    left: 0,
    padding: "1em",
    position: "sticky",
    right: 0,
    top: 0,
    transition: "backdrop-filter 20s",
    width: "100vw"
  }
};

export default DarkMode;
