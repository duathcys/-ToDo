import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';
import * as PropTypes from "prop-types";
// import TodoMutate from "./TodoMutate";
import {CreateButton} from "./style";
import {useCreateMutation} from "../../hooks/useCreateMutation";


CreateButton.propTypes = {children: PropTypes.node};


function TodoCreate() {
   const user_id =localStorage.getItem("UserId")
   const [open, setOpen] = useState(false);
   const [newTodo, setNewTodo] = useState({title: "", done: false, memo:"", info:user_id});
   const {mutate: addTodo, isLoading, isError, error} = useCreateMutation()
   const handleClickAddButton = (e) => {
      addTodo(newTodo);
      setNewTodo({title: "", done: false, memo:"", info:user_id});
      setOpen(false)
   }

   console.log(newTodo,'newTodo')


   const onToggle = () => setOpen(!open);

   if (isLoading) return <h2>Loading..</h2>;
   if (isError) return (
      <div>
         {alert(`${error.message} 오류가 발생했습니다`)}
         {/* eslint-disable-next-line no-restricted-globals */}
         {location.reload()}
      </div>)

   console.log(newTodo,'newTodo')

   return (
      <>
         {open && (
            <InsertFormPositioner>
               <InsertForm form={open.toString()}>
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