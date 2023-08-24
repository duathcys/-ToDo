import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';
import * as PropTypes from "prop-types";
import {CircleButton, CreateButton, CreateInput, InsertForm, InsertFormPositioner} from "./style";
import {useCreateMutation} from "../../hooks/useCreateMutation";
import {Checkbox} from "@mui/material";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../../Custom/CustomDatePicker/CustomDatePicker.css';
import Swal from "sweetalert2";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import CustomSelect from "../../Custom/CustomSelect/CustomSelect";
import CustomButton from "../../Custom/CustomButton/CustomButton";


CreateButton.propTypes = {children: PropTypes.node};



function TodoCreate() {
   const user_id = localStorage.getItem("UserId")
   const [open, setOpen] = useState(false);
   const [newTodo, setNewTodo] = useState({title: "", done: false, memo:null, info:user_id,
      dueDate:"", category:""});
   const [checked, setChecked] = useState(false);
   const [dueDate, setDueDate] = useState(new Date());
   const {mutate: onClickAddTodo, isLoading} = useCreateMutation()
   const {data: categoryList} = useGetCategoryQuery();
   const handleNewTodo = (e)=>{
      const {id, value, checked} = e.target;
      setChecked(e.target.checked);
      setNewTodo((prev)=>(
          {...prev, [id]: id === 'done' ? checked : value})
      )
   }
   const handleCategory = (e)=>{
      setNewTodo((prev)=>(
          {...prev, category: e.target.value}
      ))
   }
   const onToggle = () => setOpen(!open);
   const handleDateChange =(date)=>{
      if (date < Date.now()) {
         Swal.fire('할 일 생성', '기한은 오늘보다 이전일 수 없습니다.', 'warning');
      }
      const formatDate = date.toISOString().split('T')[0];
      setDueDate(date);
      setNewTodo((prev)=>(
          {...prev, dueDate:formatDate})
      )
   }
   const onCreate = () => {
      onClickAddTodo(newTodo);
      setNewTodo({
         title: "", done: false, memo: "", info: user_id,
         dueDate: "", category: ""
      });
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
                    <h2>COMPLETE</h2>
                    <Checkbox id={"done"}
                              label={"Yes"}
                              value={newTodo.done}
                              onChange={handleNewTodo}
                              checked={checked}
                              inputProps={{'aria-label': 'controlled'}}
                    />
                    <h2>Due Date</h2>
                    <DatePicker selected={dueDate} onChange={handleDateChange}/>
                    <h2>MEMO</h2>
                    <CreateInput id="memo"
                                 value={newTodo.memo}
                                 onChange={handleNewTodo}
                                 placeholder="할 일에 대한 메모를 입력하세요."
                    />
                    <h2>CATEGORY</h2>
                    {/*<FormControl fullWidth>*/}
                    {/*   <InputLabel>Category</InputLabel>*/}
                    {/*   <Select placeholder="카테고리 선택"*/}
                    {/*           id="category"*/}
                    {/*           label="category"*/}
                    {/*           onChange={handleCategory}*/}
                    {/*           value={newTodo.category}*/}
                    {/*   >*/}
                    <CustomSelect
                        inputLabel="카테고리"
                        // placeholder="카테고리 선택"
                        id="category"
                        label="category"
                        onChange={handleCategory}
                        value={newTodo.category}
                        data={categoryList?.data}/>
                    {/*{categoryList?.data.map((category, idx) => {*/}
                    {/*   return (*/}
                    {/*       <MenuItem value={category.name}>{category.name}</MenuItem>*/}
                    {/*   )*/}
                    {/*})}*/}
                    {/*</Select>*/}
                    {/*</FormControl>*/}
                    {/*<CreateButton onClick={onCreate}*/}
                    {/*>생성*/}
                    {/*</CreateButton>*/}
                    {/*<CustomButton onClick={onCreate} name="생성"/>*/}
                 </InsertForm>
              </InsertFormPositioner>
          )}
          <CircleButton
              onClick={onToggle}
              open={open}>
             <MdAdd/>
          </CircleButton>
       </>
   );
}

export default TodoCreate;