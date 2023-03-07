import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';
import * as PropTypes from "prop-types";
// import TodoMutate from "./TodoMutate";
import {CircleButton, CreateButton, Input, InsertForm, InsertFormPositioner} from "./style";
import {useCreateMutation} from "../../hooks/useCreateMutation";


CreateButton.propTypes = {children: PropTypes.node};


function TodoCreate() {
   const user_id =localStorage.getItem("UserId")
   const [open, setOpen] = useState(false);
   const [newTodo, setNewTodo] = useState({title: "", done: false, memo:"", info:user_id});
   const {mutate: onClickAddTodo, isLoading} = useCreateMutation(newTodo)
   // const handleClickAddButton = (e) => {
   //    addTodo(newTodo);
   //    setNewTodo({title: "", done: false, memo:"", info:user_id});
   //    setOpen(false)
   // }
   const handleNewTodo = (e)=>{
      const {id, value} = e.target;
      setNewTodo((prev)=>(
         {...prev, [id]:value})
      )
   }
   const onToggle = () => setOpen(!open);

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
                  <Input id={"done"}
                     value={newTodo.done}
                         onChange={handleNewTodo}
                         placeholder="COMPLETE"
                  />
                  <Input id={"memo"}
                     value={newTodo.memo}
                         onChange={handleNewTodo}
                         placeholder="MEMO"
                  />
                  <CreateButton onClick={()=>onClickAddTodo(newTodo)}
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