import React, { useState } from "react";
import UserList from "./Components/JS/UserList";
import ErrorModal from "./Components/JS/ErrorModal";
import AddUser from "./Components/JS/AddUser";
// import Wrapper from "./Components/Helpers/Wrapper"

function App() {
  const [userData, setUserData] = useState([]);
  const [valid, setValid] = useState(true);
  const hint1 = "Don't start username with numbers.";
  const hint2 = "Always enter your age above 0."

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
    <React.Fragment>
      <AddUser onReturn={getData} onValidation={getValidation}/>
      {userData.length > 0 && <UserList data={userData}/>}
      {!valid &&  <ErrorModal onAccept={getAccept} title={"Invalid Data"} message={"Please enter the valid data"} hintOne={hint1} hintTwo={hint2}/>}
    </React.Fragment>
  );
}

export default App;
