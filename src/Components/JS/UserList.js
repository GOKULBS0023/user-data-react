import React from "react";
import styles from "../CSS/UserList.module.css";
import Card from "./Card";

const UserList = (props) => {
  console.log(props.data);
  return (
    
      <div className={styles.users}>
      <Card className={styles.input}>
      <ul>
        {props.data.map((data) => {
          return (
            <li>
              {data.name} ({data.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
    </div>
  );
};

export default UserList;
