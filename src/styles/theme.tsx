const colors = {
  black: "#000000",
  white: "#ffffff",
  red: "red",
  grey1: "#f5f5f5",
  grey2: "#e0e0e0",
  grey3: "#9e9e9e",
  grey4: "#616161",
  grey5: "#212121",
  grey6: "#e9e9e9"
};

const breakpoints = {
  md: 768,
  lg: 1280
};

const device = {
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`
};

const gridValues = {
  paddingSm: 16,
  paddingMd: 58,
  paddinglLg: 0
};

const spacing = {
  navbarMarginBottom: 30
};

const theme = {
  breakpoints,
  colors,
  device,
  gridValues,
  spacing
};

export default theme;
