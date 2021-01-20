import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    clay: '#d1cdca',
    butter: '#f3e9e2',
    greypoupon: '#f0e9e1',
    greenstone: '#bbd1c9',
    twilightblue: '#305a62',
    propertwilightblue: '#2f5a62',
    shadyblue: '#acbece',
    darkshadyblue: '#a7bdd1',
    black: '#000',
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