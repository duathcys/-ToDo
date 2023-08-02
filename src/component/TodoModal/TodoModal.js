import React, {useEffect, useState} from "react";
import {MdComment} from "react-icons/md";
import {Button, Canvas, Container, Detail, Input, MemoInput, Wrapper} from "./style";
import {useGetDataQuery} from "../../hooks/useGetDataQuery";
import {useUpdateMutation} from "../../hooks/useUpdateMutation";
import { Checkbox } from "@mui/material";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../../CustomDatePicker.css';

const TodoModal = (props) => {
   const [modalOpen, setModalOpen] = useState(false);
   const {isLoading, data} = useGetDataQuery();
   const [inputValue, setInputValue] = useState({title: props.title, done: props.done, memo: props.memo, info:props.info, dueDate:''});
   const [checked, setChecked] = useState(props.done);
   const {mutate: updateTodo, isSuccess, isLoading2} = useUpdateMutation();
   const [dueDate, setDueDate] = useState(new Date());

   const handleDateChange =(date)=>{
      const formatDate = date.toISOString().split('T')[0];
      setDueDate(date);
      setInputValue((prev)=>(
          {...prev, dueDate:formatDate})
      )
   }
   const handleClickUpdateButton = () => {
      console.log('input', inputValue)
      updateTodo({id: props.id, inputValue})
   }

   useEffect(() => {
      if(isSuccess){
         disableModal();
      }
   }, [isSuccess])

   const onInput = (e) => {
      const {name, value} = e.target
      setInputValue({
         ...inputValue,
         [name]: value
      })
      setChecked(e.target.checked);
      setInputValue((prev)=>(
            {...prev, done:e.target.checked}
      ))
      setInputValue((prev)=>(
         {...prev, info:props.info}
      ))
   }

   const disableModal = () => {
      setModalOpen(!modalOpen);
   };
   if (isLoading) return <h2>로딩중...</h2>

   return (
      <>
         <Detail onClick={disableModal}>
            <MdComment/>
         </Detail>
         {modalOpen &&
            <div>
               <Container>
                  <div className="exit-wrapper" onClick={disableModal}>
                     &times;
                  </div>
                  <Wrapper>상세페이지</Wrapper>
                  <h3>TITLE</h3>
                  <Input name="title" value={inputValue.title} onChange={onInput}/>
                  <div style={{display:"flex", flexDirection: "row"}}>
                     <h3>COMPLETE</h3>
                     <Checkbox
                        name="done"
                        label="Yes"
                        value={inputValue.done}
                        onChange={onInput}
                        checked={checked}
                     />
                     <h3>Due Date</h3>
                     <div style={{display:"flex", padding:"10px"}}>
                        <DatePicker selected={dueDate} onChange={handleDateChange}/>
                     </div>
                  </div>
                  <h3>MEMO</h3>
                  <MemoInput
                     name="memo"
                     value={inputValue.memo}
                     onChange={onInput}
                  />
                  <Button onClick={handleClickUpdateButton}>
                     완료
                  </Button>
               </Container>
               <Canvas onClick={disableModal}/>
            </div>
         }
      </>
   )
}

export default TodoModal;