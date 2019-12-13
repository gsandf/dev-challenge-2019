const colors = {
  cyan: "#b9e0e9",
  orange: "#ceaa8c",
  pink: "#ad3685",
  purple: "#04095d",
  white: "#fff"
};

export default {
  font: '"IBM Plex Sans", sans-serif',
  monospace: '"IBM Plex Mono", monospace',
  fontSizes: ["0.5em", "0.75em", "1em", "2em", "2.5em"],
  colors: {
    background: colors.purple,
    code: colors.cyan,
    codeBackground: colors.purple,
    link: colors.cyan,
    pre: colors.cyan,
    preBackground: colors.purple,
    text: colors.white
  },
  css: {
    backgroundImage: `linear-gradient(45deg, ${colors.purple}, ${colors.pink}, ${colors.orange})`,
    fontSize: "16px",
    textAlign: "center",
    "@media screen and (min-width:64em)": {
      fontSize: "38px"
    }
  },
  heading: {
    fontWeight: "300"
  },
  ol: {
    textAlign: "left"
  },
  ul: {
    textAlign: "left"
  }
};
