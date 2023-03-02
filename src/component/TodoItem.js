import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import {MdDelete, MdDone} from 'react-icons/md';
import axios from "axios";
import {TodoDeleteMutation, TodoGetData, TodoUpdateMutation} from "./TodoMutate";
import BasicModal from "./TodoModal";


const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }

  &:active {
    color: crimson;
  }

  display: none;
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6495ed;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #6495ed;
  }

  &:active {
    color: rgba(100, 149, 237, 0.49);
  }

  //display: none;
`;

const BIGBlock = styled.div`
  display: flex;
  flex-direction: column;
  //border: 2px solid blue;
`

const TodoItemBlock = styled.div`
  display: flex;
  //align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: row;
  //border: 1px solid black;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
   props.done &&
   css`
            border: 1px solid #ff0000;
            color: #ff0000;
          `}
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #495057;
  ${props =>
   props.done &&
   css`
            color: #000000;
          `}
`;

const API = axios.create({
   baseURL: "http://127.0.0.1:8000",
});
function TodoItem() {
   const {isLoading, data}=TodoGetData();
   const {mutate: removeTodo, isLoading2, isError2, error} = TodoDeleteMutation();
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