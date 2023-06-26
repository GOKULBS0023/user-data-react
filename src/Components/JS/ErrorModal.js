import React, { useState } from "react";
import Card from "./Card";
import styles from "../CSS/ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  const [hint, setHint] = useState(false);
  const showHint = () => {
    setHint(true);
  };
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.message}</p>
          {hint && (
            <div>
              <h3>Hints</h3>
              <ul>
                <li>{props.hintOne}</li>
                <li>{props.hintTwo}</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.content}></div>
        <div className={styles.actions}>
          {!hint && (
            <Button
              type={"button"}
              content={"Hit me for hints!"}
              onClick={showHint}
            />
          )}
          <Button type={"button"} content={"Okay"} onClick={props.onAccept} />
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
