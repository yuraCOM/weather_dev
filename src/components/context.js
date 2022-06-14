import React from "react";

const Context = React.createContext();

let CurrentTheme = React.createContext();

// let theme = {
//   day: "day",
//   night: "night",
// };
// let CurrentTheme = React.createContext(theme);

export { Context, CurrentTheme };
