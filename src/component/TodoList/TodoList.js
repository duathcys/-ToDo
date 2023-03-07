import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import {TodoListBlock} from "./style";

function TodoList() {
   return (
      <TodoListBlock>
         <TodoItem/>
      </TodoListBlock>
   );
}

export default TodoList;