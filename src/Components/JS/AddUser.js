import React, { useState } from "react";
import Card from "./Card";
import styles from "../CSS/AddUser.module.css";
import Button from "./Button";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const checkName = userName.trim().length !== 0;
    const checkAge = !isNaN(userAge) && userAge > 0;

    if (checkName && checkAge) {
      props.onReturn(userAge, userName);
      setUserName("");
      setUserAge("");
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
          onChange={userNameChangeHandler}
          type="text"
          placeholder="Enter your name"
          value={userName}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          name="age"
          onChange={userAgeChangeHandler}
          placeholder="Enter your age"
          value={userAge}
        ></input>
        <Button type={"submit"} content={"Add User"} />
      </form>
    </Card>
  );
};
export default AddUser;
