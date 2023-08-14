import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem/TodoItem";
import history from "./TodoCheck";
import {Divider, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useGetDataQuery} from "../hooks/useGetDataQuery";
import {useGetCategoryQuery} from "../hooks/useGetCategoryQuery";

const TodoListBlock = styled.div`
    padding: 20px 32px;
    padding-bottom: 225px;
    overflow-x: auto;
`;

const Block = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: #282c34;
  h1 {
    font-size: 20px;
    text-align: center;
    
  }
`

function TodoList() {
    const {isLoading, isSuccess, data} = useGetDataQuery();
    const [locationKeys, setLocationKeys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selection, setSelection] = useState('');
    const [doneList, setDoneList] = useState([]);
    const [unDoneList, setUnDoneList] = useState([]);
    const {data:categoryData} = useGetCategoryQuery();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    let doneFilter = data?.data.filter((todo) => todo.done === true);
    let unDoneFilter = data?.data.filter((todo) => todo.done === false);
    const onSearch = () => {
        if (searchTerm !== '') {
            doneFilter = data?.data.filter((todo) => todo.done === true && todo.title.includes(searchTerm));
            unDoneFilter = data?.data.filter((todo) => todo.done === false && todo.title.includes(searchTerm));
        }
        setDoneList(doneFilter);
        setUnDoneList(unDoneFilter);
    }


    const applyFilter = () => {
        if (searchTerm === "") {
            doneFilter = data?.data.filter((todo) => todo.done === true);
            unDoneFilter = data?.data.filter((todo) => todo.done === false);
        } else if(searchTerm !== "") {
            doneFilter = data?.data.filter((todo) => todo.done === true && todo.title.includes(searchTerm));
            unDoneFilter = data?.data.filter((todo) => todo.done === false && todo.title.includes(searchTerm));
        }

        setDoneList(doneFilter);
        setUnDoneList(unDoneFilter);
    };
    const handleSelect = (e) => {
        setSelection(e.target.value);
        console.log(e.target.value);
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


    useEffect(() => {
        if (data?.data) {
            applyFilter();
        }
    }, [data])

    if (isLoading) {
        return <div>Waiting</div>;
    }
    if (isSuccess) {
        let totalTodos = data?.data;
        let leftTodos = data?.data.filter((todo) => todo.done === false);
        localStorage.setItem("Total", totalTodos.length);
        localStorage.setItem("Left", leftTodos.length);
    }
    return (
        <>
            <div style={{display: "flex", flexDirection: "row", paddingLeft: "30px"}}>
                <TextField
                    variant="standard"
                    label="Search"
                    onChange={handleInputChange}
                    sx={{width: 600, marginLeft: "50px"}}
                />
                <IconButton
                    onClick={onSearch}>
                    <SearchIcon/>
                </IconButton>
                <FormControl sx={{m: 1, minWidth: 120}} style={{paddingLeft: "30px"}}>
                    <InputLabel style={{paddingLeft: "30px", fontWeight: "bold"}}>선택</InputLabel>
                    <Select
                        value={selection}
                        label="selection"
                        onChange={handleSelect}
                        input={<OutlinedInput label="선택"/>}
                    >
                        {categoryData?.data.map((cat)=>{
                            return (
                                    <MenuItem value={cat.name}>{cat.name}</MenuItem>
                                )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center"}}>
                <Block>
                    <h1>해야할 일</h1>
                    <TodoItem params={doneList}/>
                </Block>
                <Divider sx={{borderColor: "black"}}/>
                <Block>
                    <h1>완료한 일</h1>
                    <TodoItem params={unDoneList}/>
                </Block>
            </div>
        </>
    );
}


export default TodoList;