import React, { useContext } from "react";
import { CurrentTheme } from "../components/context";

export const ToogleTheme = () => {
  // let nowTheme = useContext(CurrentTheme);
  let [currentTheme, setCurrentTheme] = useContext(CurrentTheme);

  function chandgeTheme() {
    currentTheme === "Day" ? setCurrentTheme("Night") : setCurrentTheme("Day");
  }
  return <button type="button" className="btn btn-info" onClick={chandgeTheme}>{currentTheme}</button>
};
