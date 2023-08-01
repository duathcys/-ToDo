import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem/TodoItem";
import history from "./TodoCheck";
import {FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useGetDataQuery} from "../hooks/useGetDataQuery";

const TodoListBlock = styled.div`
    padding: 20px 32px;
    padding-bottom: 225px;
    overflow-x: auto;
`;
function TodoList() {
   const {isLoading, isSuccess, data} = useGetDataQuery();
   const [locationKeys, setLocationKeys] = useState([]);
   const [searchTerm,setSearchTerm] = useState('');
   const [filterlist, setFilterlist] = useState( []);
   const [done, setDone] = useState({complete:true, use:false});
   const [selection, setSelection] = useState('');

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
       if (done.use === true) {
           console.log('ioisjdf');
           filterData = filterData.filter((todo) => todo.done === done.complete);
       }
       setFilterlist(filterData);
     };
   const handleSelect = (e)=>{
       setSelection(e.target.value);
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


   useEffect(()=>{
      if (data?.data) {
         applyFilter();
      }
   }, [data, done])

    useEffect(() => {

        if (selection === 'Complete') {
            setDone({complete:true, use:true});
        } else if (selection === 'Incomplete') {
            setDone({complete:false, use:true});
        }
        else if (selection === 'All') {
            setDone({complete: false, use: false})
            }
        console.log(done);
    }, [selection, done.complete, done.use]);

    if (isLoading) {
        return <div>Waiting</div>;
    }
    if(isSuccess) {
        let totaltodos = data?.data;
        let lefttodos = data?.data.filter((todo) => todo.done === false);
        localStorage.setItem("Total", totaltodos.length);
        localStorage.setItem("Left", lefttodos.length);
    }
    return (
        <TodoListBlock>
            <>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <TextField
                        variant="standard"
                        label="Search"
                        onChange={handleInputChange}
                        sx={{width: 400}}
                    />
                    <IconButton
                        onClick={onSearch}>
                        <SearchIcon/>
                    </IconButton>
                    <FormControl sx={{m:1, minWidth:120}}>
                        <InputLabel>선택</InputLabel>
                        <Select
                            value={selection}
                            label="selection"
                            onChange={handleSelect}
                            input={<OutlinedInput label="선택"/>}
                        >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Complete">Complete</MenuItem>
                            <MenuItem value="Incomplete">Incomplete</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </>
            <TodoItem params={filterlist}/>
        </TodoListBlock>
    );
}


export default TodoList;