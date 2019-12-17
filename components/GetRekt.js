import React, { useContext, useEffect, useState } from "react";
import { withSlide } from "mdx-deck";

function GetRekt({ children, slide }) {
  const [shouldShowChildren, setShouldShowChildren] = useState(false);

  useEffect(() => {
    if (slide.active && !shouldShowChildren) {
      setTimeout(() => {
        setShouldShowChildren(true);
      }, 28000);
    }
  }, [slide.active]);

  return (
    <div style={{ ...styles.regular, ...(slide.active && styles.darkmode) }}>
      {shouldShowChildren && children}
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
    transition: "backdrop-filter 20s",
    width: "100vw"
  }
};

export default withSlide(GetRekt);
