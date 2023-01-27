import React from "react";
import CounterApp from "./counter-app";
import CounterAppAdvanced from "./counter-app-advanced";
import StrPrac from "./str-prac";
import Todo from "./todo";

export default function page(){
  return(
    <>
    <h2>String Practice and UseStatePractice</h2>
    <br />
    <StrPrac />
    <br />
    <h2>CounterApp</h2>
    <br />
    <CounterApp />
    <br />
    <h2>CounterAppAdvanced</h2>
    <br />
    <CounterAppAdvanced />
    <br />
    <h2>TODOAPP</h2>
    <br />
    <Todo />

    </>
    
  )
  
}
