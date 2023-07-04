import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead/TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate/TodoCreate";
import {Navigate} from "react-router-dom";
import React from "react";

function Todo() {


   if (!localStorage.getItem("UserId")) return <Navigate to="/user/login"/>

   return (
      <TodoTemplate>
         <TodoHead/>
         <TodoList/>
         <TodoCreate/>
      </TodoTemplate>
   )
}

export default Todo
