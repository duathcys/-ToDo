import React from 'react';
import {MdDelete, MdDone} from 'react-icons/md';
import {BIGBlock, CheckCircle, Remove, Text, TodoItemBlock} from "./style";
import {useDeleteMutation} from "../../hooks/useDeleteMutation";
import {useCheckUpdateMutation} from "../../hooks/useUpdateMutation";
import TodoModal from "../TodoModal/TodoModal";

TodoModal.propTypes = {};

function TodoItem(params) {
   const {mutate: onClickRemove, isLoading2} = useDeleteMutation();
   const {mutate: onClickUpdate, isSuccess, isLoading3} = useCheckUpdateMutation();


   if (isLoading2) return <h2>loading</h2>
   if (isLoading3) return <h2>Updating..</h2>
   return (
      <ul>
         <BIGBlock>
             <TodoItemBlock>
                 <CheckCircle/>
                 <Text>카테고리</Text>
                 <Text>할 일</Text>
                 <Text>기 한</Text>
             </TodoItemBlock>
            {params?.params.map((Todo, idx) => {
                  return (
                     <li key={idx} >
                        <TodoItemBlock>
                           <CheckCircle done={Todo.done} onClick={()=> onClickUpdate({id: Todo.id, done:!Todo.done})}>
                              {Todo.done && <MdDone/>}
                           </CheckCircle>
                            <Text>
                                {Todo.category}
                            </Text>
                           <Text done={Todo.done}>
                              {Todo.title}
                           </Text>
                            <Text done={Todo.done}>
                                {Todo.dueDate}
                            </Text>
                           <Remove onClick={() => onClickRemove(Todo.id)}>
                              <MdDelete/>
                           </Remove>
                           <TodoModal id={Todo.id} title={Todo.title} done={Todo.done} memo={Todo.memo} info={Todo.info} dueDate={Todo.dueDate}/>
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