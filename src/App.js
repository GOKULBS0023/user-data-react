import React, { useState } from "react";
import UserList from "./Components/JS/UserList";
import ErrorModal from "./Components/JS/ErrorModal";
import AddUser from "./Components/JS/AddUser";
import { set } from "mongoose";

function App() {
  const [userData, setUserData] = useState([]);
  const [valid, setValid] = useState(true);

  const getData=(uAge, uName)=>{
    setUserData((prevData)=>{
      return[...prevData, {name: uName, age:uAge}]
    });
  }
  const getValidation=()=>{
    setValid(false);
  }
  const getAccept =()=>{
    setValid(true);
  }
  return (
    <div>
      <AddUser onReturn={getData} onValidation={getValidation}/>
      {userData.length > 0 && <UserList data={userData}/>}
      {!valid &&  <ErrorModal onAccept={getAccept}/>}
    </div>
  );
}

export default App;
