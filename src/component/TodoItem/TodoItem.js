import React, { useEffect, useState } from 'react';
import {MdDelete, MdDone} from 'react-icons/md';
import BasicModal from "../TodoModal/TodoModal";
import {BIGBlock, CheckCircle, Remove, Text, TodoItemBlock} from "./style";
import {useDeleteMutation} from "../../hooks/useDeleteMutation";
import {useGetDataQuery} from "../../hooks/useGetDataQuery";

function TodoItem(params) {
   const {isLoading, data}=useGetDataQuery();
   const {mutate: onClickRemove, isLoading2} = useDeleteMutation();
   console.log(params,'ppp');
   const [todo, setTodo] = useState([]);

   // useEffect(() =>{
   //       setTodo(params)
   //       console.log(todo)
   // }

   // );
   // useEffect(()=>{
   //    data.map((e)=>())
   // })
   // const tell = 'aaa';
   // console.log(params);
   // const filterList = tell ? data.map((todo, idx)=>{
   //    return todo.title.includes(tell)}) : 'sss';
   // console.log(filterList);
   // const filterlist = data?.data.filter((todo)=> todo.title === params);
   // const alllist = data?.data.map((todo, idx)=>todo.title);
   // const Todo_list = data?.data;

   // console.log(alllist);
   // const filters_list = data.data.filter(todo => todo.title.length > 0);
   // console.log(filters_list, 'fil');
   // console.log(filterlist);
   // console.log(filterlist);

   if (isLoading2) return <h2>loading</h2>
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