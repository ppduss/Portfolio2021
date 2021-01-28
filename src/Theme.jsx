import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    clay: '#d1cdca',
    lbutter: '#fff8ef',
    butter: '#f3e9e2',
    greypoupon: '#f0e9e1',
    deepsalmon: '#e9c0b2',
    greenstone: '#bbd1c9',
    twilight: '#2f5a62',
    dtwilight: '#204147',
    lshadyblue: '#d6eae9',
    shadyblue: '#acbece',
    dshadyblue: '#a7bdd1',
    black: '#000',
    grey: '#313131',
    white: '#fff',
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;