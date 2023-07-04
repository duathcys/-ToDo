import React, { useEffect, useState } from 'react';
import {MdDelete, MdDone} from 'react-icons/md';
import BasicModal from "../TodoModal/TodoModal";
import {BIGBlock, CheckCircle, Remove, Text, TodoItemBlock} from "./style";
import {useDeleteMutation} from "../../hooks/useDeleteMutation";
import {useGetDataQuery} from "../../hooks/useGetDataQuery";
import { useUpdateMutation } from "../../hooks/useUpdateMutation";

function TodoItem(params) {
   const {isLoading, data}=useGetDataQuery();
   const {mutate: onClickRemove, isLoading2} = useDeleteMutation();
   const {mutate: updateTodo, isSuccess, isLoading3} = useUpdateMutation();
   console.log(params,'ppp');
   const [todo, setTodo] = useState([]);

   if (isLoading2) return <h2>loading</h2>
   if (isLoading3) return <h2>Updating..</h2>
   return (
      <ul>
         <BIGBlock>
            {params?.params.map((Todo, idx) => {
                  return (
                     <li key={idx} >
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