import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead/TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate/TodoCreate";
import {Navigate} from "react-router-dom";
import { Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

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
