import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import * as PropTypes from "prop-types";
// import TodoMutate from "./TodoMutate";
import {TodoMutation} from "./TodoMutate";

const CircleButton = styled.button`
  background: #38d9a9;

  &:hover {
    background: #63e6be;
  }

  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 32px;
  height: 32px;
  //display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: fixed;
  left: 50%;
  bottom: 7.5%;
  transform: translate(-50%, 50%);
  color: white;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
   props.open &&
   css`
            background: #ff6b6b;

            &:hover {
              background: #ff8787;
            }

            &:active {
              background: #fa5252;
            }

            transform: translate(-50%, 50%) rotate(45deg);
          `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const CreateButton = styled.button`
  background: #e0dddd;
  &:hover {
    color: #5e5b5b;
  }

  &:active {
    color: #343131;
  }
  color: black;
  outline: 1px solid #e0dddd;
  border-radius: 4px;
  border: 1px solid #e0dddd;
  cursor: pointer;
  width: 50px;
  height: 32px;
  margin-top: 10px;
  margin-bottom:10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

CreateButton.propTypes = {children: PropTypes.node};


function TodoCreate() {
   const user_id =localStorage.getItem("UserId")
   const [open, setOpen] = useState(false);
   const [newTodo, setNewTodo] = useState({title: "", done: "", memo:"", info:user_id});
   const {mutate: addTodo, isLoading, isError, error} = TodoMutation(newTodo)
   const handleClickAddButton = (e) => {
      addTodo(newTodo);
      // setNewTodo((prev) =>
      //    ({...prev, user_id: e.newtodo.user_id}))
      console.log(user_id)
      setNewTodo({title: "", done: false, memo:"", info:""});
      console.log("new:",newTodo)
      setOpen(false)
   }


   const onToggle = () => setOpen(!open);

   if (isLoading) return <h2>Loading..</h2>;
   if (isError) return (
      <div>
         {alert(`${error.message} 오류가 발생했습니다`)}
         {/* eslint-disable-next-line no-restricted-globals */}
         {location.reload()}
      </div>)

   return (
      <>
         {open && (
            <InsertFormPositioner>
               <InsertForm form={open}>
                  <Input value={newTodo.title}
                         onChange={(e) => setNewTodo((prev) =>
                            ({...prev, title: e.target.value}))}
                         placeholder="TODO"
                  />
                  <Input value={newTodo.done}
                         onChange={(e) => setNewTodo((prev) =>
                            ({...prev, done: e.target.value}))}
                         placeholder="COMPLETE"
                  />
                  <Input value={newTodo.memo}
                         onChange={(e) => setNewTodo((prev) =>
                            ({...prev, memo: e.target.value}))}
                         placeholder="MEMO"
                  />
                  <CreateButton onClick={handleClickAddButton}
                  >OK
                  </CreateButton>
               </InsertForm>

            </InsertFormPositioner>
         )}
         <CircleButton
            onClick={onToggle}
            open={open}
         >
            <MdAdd/>
         </CircleButton>
      </>
   )  ;
}

export default TodoCreate;