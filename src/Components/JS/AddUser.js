import React, { useState , useRef} from "react";
import Card from "./Card";
import styles from "../CSS/AddUser.module.css";
import Button from "./Button";
const AddUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const userName= userNameRef.current.value;
    const userAge= userAgeRef.current.value;
    const checkName = userName.trim().length !== 0 && isNaN(parseInt(userName));
    const checkAge = !isNaN(userAge) && userAge > 0;

    if (checkName && checkAge) {
      props.onReturn(userAge, userName);
      userNameRef.current.value='';
      userAgeRef.current.value='';
    } else {
      let isValidAge = checkAge ? "valid" : "invalid";
      let isValidName = checkName ? "valid" : "invalid";
      props.onValidation(isValidName, isValidAge);
    }
  };
  return (
    <Card className={styles.input}>
      <form  onSubmit={submitHandler}>
        <label htmlFor="user-name">User Name</label>
        <input
          id="user-name"
          name="name"
          type="text"
          placeholder="Enter your name"
          ref={userNameRef}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          name="age"
          placeholder="Enter your age"
          ref={userAgeRef}
        ></input>
        <Button type={"submit"} content={"Add User"} />
      </form>
    </Card>
  );
};
export default AddUser;
