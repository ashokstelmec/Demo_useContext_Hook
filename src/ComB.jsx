// import ComC from "./ComC";
import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

  return (
    <div>
        <h1>My Name is {fname} {lname}</h1>
    </div>
  )
}

export default ComB