import React, { useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import Card from "./Card";
import styles from "../CSS/ErrorModal.module.css";
import Button from "./Button";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};
const ModalOverlay = (props) => {
  const [hint, setHint] = useState(false);
  const showHint = () => {
    setHint(true);
  };
  return (
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
        <Button type={"button"} content={"Okay"} onClick={props.onClick} />
      </div>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay onClick={props.onAccept} title={props.title} message={props.message} hintOne={props.hintOne} hintTwo={props.hintTwo}/>, document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default ErrorModal;
