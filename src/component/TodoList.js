import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem/TodoItem";
import history from "./TodoCheck";
import {Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useGetDataQuery} from "../hooks/useGetDataQuery";

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
   const [filterlist, setFilterlist] = useState( []);
   const [done, setDone] = useState(true);
   const [notDone, setNotDone] = useState(true);

   const handleInputChange=(e)=>{
      setSearchTerm(e.target.value);
   }
   let filterData = data?.data;

   const onSearch = ()=>{
      if (searchTerm === '') {
         setFilterlist(filterData)
      } else {
         setFilterlist(
            data?.data.filter((todo) => todo.title.includes(searchTerm)));
      }
   }
   const applyFilter = () => {


       if (searchTerm === "") {
         filterData = data?.data;
       } else {
         filterData = data?.data.filter((todo) => todo.title.includes(searchTerm));
       }

       if (!done) {
         filterData = filterData.filter((todo) => !todo.done);
       }

       if (!notDone) {
         filterData = filterData.filter((todo) => todo.done);
       }

       setFilterlist(filterData);
     };

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


   useEffect(()=>{
      if (data?.data) {
         applyFilter();
      }
   }, [data, done, notDone])
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
                  <FormControlLabel control={<Checkbox checked={done}/>} label="DONE" onClick={()=>{setDone(!done)}}/>
                  <FormControlLabel control={<Checkbox checked={notDone}/>} label="NOT DONE" onClick={()=>{setNotDone(!notDone)}}/>
               </FormGroup>
            </div>
         </>
         <TodoItem params={filterlist}/>
      </TodoListBlock>
   );
}


export default TodoList;