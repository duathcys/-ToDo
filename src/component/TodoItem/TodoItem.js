import React from 'react';
import {MdDelete, MdDone} from 'react-icons/md';
import BasicModal from "../TodoModal/TodoModal";
import {BIGBlock, CheckCircle, Remove, Text, TodoItemBlock} from "./style";
import {useDeleteMutation} from "../../hooks/useDeleteMutation";
import {useGetDataQuery} from "../../hooks/useGetDataQuery";

function TodoItem() {
   const {isLoading, data}=useGetDataQuery();
   const {mutate: removeTodo, isLoading2, isError2, error} = useDeleteMutation();
   const onRemove = (id) => {
      removeTodo(id);
   }

   // const onCheck = (id)=>{
   //    setValue((prev)=>(
   //    {...prev, done:check}
   //    ))
   //    console.log(check)
   //    console.log(value)
   //    setCheck(check);
   //    updateTodo({id, value});
   // }

   if (isLoading2) return <h2>loading</h2>
   if (isError2) alert(`${error.message}오류 발생`)
   return (
      <ul>
         <BIGBlock>
            {data?.data.map((Todo, idx) => {
               return (
                  <li key={idx}>
                     <TodoItemBlock>
                        <CheckCircle done={Todo.done}>
                           {Todo.done && <MdDone/>}
                        </CheckCircle>
                        <Text done={Todo.done}>
                           {Todo.title}
                        </Text>
                        <Remove
                           onClick={() => {
                              onRemove(Todo.id)
                           }}>
                           <MdDelete/>
                        </Remove>
                        <BasicModal id={Todo.id} title={Todo.title} done={Todo.done} memo={Todo.memo} info={Todo.info}/>
                     </TodoItemBlock>
                  </li>
               )
            })
            }
         </BIGBlock>
      </ul>
   );
}

export default TodoItem;