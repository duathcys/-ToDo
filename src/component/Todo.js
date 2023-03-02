import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

function Todo(){
   return(
      <TodoTemplate>
         <TodoHead/>
         <TodoList/>
         <TodoCreate/>
      </TodoTemplate>
   )
}

export default Todo
