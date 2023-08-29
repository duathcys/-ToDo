import React, {useEffect, useState} from "react";
import {Canvas, Container, Detail, Input, Wrapper} from "./style";
import {useGetDataQuery} from "../../hooks/useGetDataQuery";
import {useUpdateMutation} from "../../hooks/useUpdateMutation";
import {Divider} from "@mui/material";
import 'react-datepicker/dist/react-datepicker.css';
import '../../Custom/CustomDatePicker/CustomDatePicker.css';
import {FeedOutlined} from "@mui/icons-material";
import CustomButton from "../../Custom/CustomButton/CustomButton";
import CustomDatePicker from "../../Custom/CustomDatePicker/CustomDatePicker";
import CustomCheckBox from "../../Custom/CustomCheckBox/CustomCheckBox";
import CustomSelect from "../../Custom/CustomSelect/CustomSelect";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";

const TodoModal = (props) => {
   const [modalOpen, setModalOpen] = useState(false);
   const {isLoading, data} = useGetDataQuery();
   const [inputValue, setInputValue] = useState({title: props.title, done: props.done, memo: props.memo, info:props.info, dueDate:props.dueDate, category:props.category});
   const [checked, setChecked] = useState(props.done);
   const {mutate: updateTodo, isSuccess} = useUpdateMutation();
   const [dueDate, setDueDate] = useState(new Date());
   const {data: categoryList} = useGetCategoryQuery();
   const handleCategory = (e)=>{
      setInputValue({...inputValue, category: e.target.value})

   }
   const handleDateChange =(date)=>{
      const formatDate = date.toISOString().split('T')[0];
      setDueDate(date);
      setInputValue((prev)=>(
          {...prev, dueDate:formatDate})
      )
   }
   const handleClickUpdateButton = () => {
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

   if (isLoading) {
      console.log(isLoading);}

   return (
       <>
          <Detail onClick={disableModal}>
             <FeedOutlined/>
          </Detail>
          {modalOpen &&
              <div>
                 <Container>
                    <div className="exit-wrapper" onClick={disableModal}>
                       &times;
                    </div>
                    <Wrapper>상세페이지</Wrapper>
                    <div>
                       <h3>TITLE</h3>
                       <Input name="title" value={inputValue.title} onChange={onInput}/>
                       <h3>COMPLETE</h3>
                       <CustomCheckBox
                           name="done"
                           label="Yes"
                           value={inputValue.done}
                           onChange={onInput}
                           checked={checked}/>
                       <h3>Due Date</h3>
                       <CustomDatePicker selected={dueDate} onChange={handleDateChange}/>
                       <h3>MEMO</h3>
                       <Input
                           name="memo"
                           value={inputValue.memo}
                           onChange={onInput}
                       />
                       <h3>Category</h3>
                       <CustomSelect
                           inputLabel="카테고리"
                           id="category"
                           label="category"
                           onChange={handleCategory}
                           value={inputValue.category}
                           data={categoryList?.data}/>
                    </div>
                    <CustomButton onClick={handleClickUpdateButton} name="완료"/>
                 </Container>
                 <Canvas onClick={disableModal}/>
              </div>
          }
       </>
   );
}

export default TodoModal;