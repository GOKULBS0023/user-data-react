import React from "react";
import Card from "./Card";
import styles from "../CSS/ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  console.log(props.detail);
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>
          <p>Please enter a valid data.</p>
        </div>
        <div className={styles.actions}>
          <Button type={"button"} content={"Okay"} onClick={props.onAccept}/>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
