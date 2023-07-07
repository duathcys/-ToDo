import React, {useEffect, useState} from 'react';
import {MdAdd} from 'react-icons/md';
import * as PropTypes from "prop-types";
import { CircleButton, CreateButton, Input, InputArea, InsertForm, InsertFormPositioner } from "./style";
import { useCreateMutation } from "../../hooks/useCreateMutation";
import { Checkbox } from "@mui/material";


CreateButton.propTypes = {children: PropTypes.node};


function TodoCreate() {
   const user_id = localStorage.getItem("UserId")
   const [open, setOpen] = useState(false);
   const [newTodo, setNewTodo] = useState({title: "", done: false, memo:"", info:user_id});
   const [checked, setChecked] = useState(false);
   const {mutate: onClickAddTodo, isLoading} = useCreateMutation(newTodo)
   const handleNewTodo = (e)=>{
      const {id, value, checked} = e.target;
      setChecked(e.target.checked);
      setNewTodo((prev)=>(
         {...prev, [id]: id === 'done' ? checked : value})
      )
   }
   const onToggle = () => setOpen(!open);

   const onCreate = () => {
      onClickAddTodo(newTodo)
      setOpen(false);
   };

   if (isLoading) return <h2>Loading..</h2>;

   return (
      <>
         {open && (
            <InsertFormPositioner>
               <InsertForm form={open.toString()}>
                  <Input id={"title"}
                     value={newTodo.title}
                         onChange={handleNewTodo}
                         placeholder="TODO"
                  />
                  <h3>COMPLETE</h3>
                  <Checkbox id={"done"}
                            label={"Yes"}
                            value={newTodo.done}
                            onChange={handleNewTodo}
                            checked={checked}
                            inputProps={{'aria-label':'controlled'}}
                  />
                  <InputArea id={"memo"}
                     value={newTodo.memo}
                         onChange={handleNewTodo}
                         placeholder="MEMO"
                  />
                  <CreateButton onClick={onCreate}
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
   );
}

export default TodoCreate;