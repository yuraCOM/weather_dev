import React, { useContext } from "react";
import { CurrentTheme } from "../components/context";
import clacces from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  let [currentTheme, setCurrentTheme] = useContext(CurrentTheme);
  return (
    <button
      {...props}
      className={
        currentTheme === "Day"
          ? clacces.myBtn
          : [clacces.myBtn, clacces.myBtnNight].join(" ")
      }
    >
      {children}
    </button>
  );
};

export default MyButton;
