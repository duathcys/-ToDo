import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';
import * as PropTypes from "prop-types";
import {CircleButton, CreateButton, CreateInput, InsertForm, InsertFormPositioner} from "./style";
import {useCreateMutation} from "../../hooks/useCreateMutation";
import {Checkbox} from "@mui/material";


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
                  <h1>Create Todo</h1>
                  <h2>TITLE</h2>
                  <CreateInput id={"title"}
                     value={newTodo.title}
                         onChange={handleNewTodo}
                         placeholder="할 일을 입력하세요."
                  />
                  <div style={{display:"flex", flexDirection: "row"}}>
                     <h2>COMPLETE</h2>
                     <Checkbox id={"done"}
                               label={"Yes"}
                               value={newTodo.done}
                               onChange={handleNewTodo}
                               checked={checked}
                               inputProps={{'aria-label':'controlled'}}
                     />
                  </div>
                  <h2>MEMO</h2>
                  <CreateInput id={"memo"}
                     value={newTodo.memo}
                         onChange={handleNewTodo}
                         placeholder="할 일에 대한 메모를 입력하세요."
                  />
                  <CreateButton onClick={onCreate}
                  >생성
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