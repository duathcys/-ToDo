import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem/TodoItem";
import history from "./TodoCheck";
import { Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useGetDataQuery } from "../hooks/useGetDataQuery";

const TodoListBlock = styled.div`
    padding: 20px 32px;
    padding-bottom: 225px;
    overflow-x: auto;
`;

const TodoSearch = styled.input`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;
`
const SearchButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
`
function TodoList() {
   const {isLoading, data}=useGetDataQuery();
   const [locationKeys, setLocationKeys] = useState([]);
   const [searchTerm,setSearchTerm] = useState('');
   const [filterlist, setFilterlist] = useState([]);
   const [checkdone, setCheckdone] = useState(false);
   //
   // const filterlist = {
   //    if (searchTerm === '') {
   //    setFilterlist(data?.data)
   // } else {
   //    setFilterlist(
   //       data?.data.filter((todo) => todo.title === searchTerm));
   // }
   //
   // }
   // useEffect(() => {
   //    return filterlist(()=>{
   //       if (searchTerm === '') {
   //          setFilterlist(data?.data)
   //       } else {
   //          setFilterlist(
   //             data?.data.filter((todo) => todo.title === searchTerm));
   //       }
   //    })
   //    }
   // // // );
   // useEffect(()=>{
   //    setFilterlist(data?.data.filter((todo)=>todo.length>0));
   // }, [])
   const handleInputChange=(e)=>{
      setSearchTerm(e.target.value);
      console.log(searchTerm);
   }

   const onSearch = ()=>{
      if (searchTerm === '') {
         setFilterlist(data?.data)
      } else {
         setFilterlist(
            data?.data.filter((todo) => todo.title === searchTerm));
      }
      // console.log(filterlist);
   }

   useEffect(() => {
      return history.listen((location) => {
         if (history.action === "PUSH") {
            setLocationKeys([location.key]);
         }
         if (history.action === "POP") {
            setLocationKeys(([_, ...keys]) => keys);
            history.push(`/todo/list/?info=${localStorage.getItem('UserId')}`)
         } else {
            setLocationKeys((keys) => [location.key, ...keys]);
            history.push(`/todo/list/?info=${localStorage.getItem('UserId')}`)
         }
      })
   }, [locationKeys, history])

   console.log(checkdone);

   return (
      <TodoListBlock>
         <>
            <div>
               <TextField
                  variant="standard"
                  label="Search"
                  onChange={handleInputChange}
                  sx={{width: 500}}
               />
               <IconButton
                  onClick={onSearch}>
                  <SearchIcon/>
               </IconButton>
            </div>
            <div>
               <FormLabel>선택할 수 있게</FormLabel>
               <FormGroup>
                  <FormControlLabel control={<Checkbox/>} label="DONE" onClick={()=>{setCheckdone(true)}}/>
                  <FormControlLabel control={<Checkbox/>} label="NOT DONE" onClick={()=>{setCheckdone(false)}}/>
               </FormGroup>
            </div>
         </>
         <TodoItem params={filterlist}/>
      </TodoListBlock>
   );
}


export default TodoList;