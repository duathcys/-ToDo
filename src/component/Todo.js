import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead/TodoHead";
import TodoList from "./TodoList/TodoList";
import TodoCreate from "./TodoCreate/TodoCreate";
import {Navigate} from "react-router-dom";

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
