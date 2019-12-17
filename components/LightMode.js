import { withSlide } from "mdx-deck";
import React, { useEffect, useState } from "react";

function LightMode({ children, slide }) {
  const [lightmode, setLightmode] = useState();

  useEffect(() => {
    if (slide.active && !lightmode) {
      setLightmode(true);
    }
  }, [slide.active]);

  return (
    <div style={{ ...styles.regular, ...(slide.active || styles.darkmode) }}>
      {children}
    </div>
  );
}

const styles = {
  darkmode: {
    backdropFilter: "hue-rotate(-90deg) brightness(0.2)"
  },
  regular: {
    alignItems: "center",
    bottom: 0,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    left: 0,
    position: "sticky",
    right: 0,
    top: 0,
    transition: "backdrop-filter 8s",
    width: "100vw"
  }
};

export default withSlide(LightMode);
