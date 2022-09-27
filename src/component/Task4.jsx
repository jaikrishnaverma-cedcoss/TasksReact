import React from 'react'
import TaskA from './TaskA'
import { useState, createContext } from "react";
export const UserContext = createContext();
function Task4() {
    const [user, setUser] = useState("jai verma");

  return (
    <>
    <UserContext.Provider value={{user:user}}>
      <h1>{`Hello ${user}!`}</h1>
      <TaskA />
    </UserContext.Provider>
    </>
  )
}

export default Task4