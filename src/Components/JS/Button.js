import React from "react";
import styles from "../CSS/Button.module.css";
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.content}
    </button>
  );
};
export default Button;