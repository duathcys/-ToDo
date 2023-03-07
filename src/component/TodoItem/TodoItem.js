import React from 'react';
import {MdDelete, MdDone} from 'react-icons/md';
import TodoModal from "../TodoModal/TodoModal";
import {BIGBlock, CheckCircle, Remove, Text, TodoItemBlock} from "./style";
import {useDeleteMutation} from "../../hooks/useDeleteMutation";
import {useGetDataQuery} from "../../hooks/useGetDataQuery";

function TodoItem() {
   const {isLoading, data}=useGetDataQuery();
   const {mutate: onClickRemove, isLoading2} = useDeleteMutation();

   if (isLoading2) return <h2>loading</h2>

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
                        <Remove onClick={() => onClickRemove(Todo.id)}>
                           <MdDelete/>
                        </Remove>
                        <TodoModal id={Todo.id} title={Todo.title} done={Todo.done} memo={Todo.memo} info={Todo.info}/>
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