import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem/TodoItem";
import history from "./TodoCheck";
import {Divider, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useGetDataQuery} from "../hooks/useGetDataQuery";
import {useGetCategoryQuery} from "../hooks/useGetCategoryQuery";
import CustomSearch from "../Custom/CustomSearch";

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
    const handleSelect = (e) => {
        setSelection(e.target.value);
    }

    const applyFilter = () => {
        if(searchTerm !== "") {
            doneFilter = data?.data.filter((todo) => todo.done === true && todo.title.includes(searchTerm));
            unDoneFilter = data?.data.filter((todo) => todo.done === false && todo.title.includes(searchTerm));
        }
        if (selection !== "" && selection !== "전체") {
            doneFilter = doneFilter?.filter((todo) => todo.category === selection);
            unDoneFilter = unDoneFilter?.filter((todo) => todo.category === selection);
        }
        setDoneList(doneFilter);
        setUnDoneList(unDoneFilter);
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


    useEffect(() => {
        if (data?.data) {
            applyFilter();
        }
    }, [data, selection])

    const calDaysPassed = (date1, date2) => Math.trunc(date2 - date1) / (1000 * 60 * 60 * 24);

    if (isLoading) {
        return <div>Waiting</div>;
    }
    if (isSuccess) {
        let totalTodos = data?.data;
        let leftTodos = data?.data.filter((todo) => todo.done === false);
        let TodayDate = new Date();
        let weekTodos = data?.data.filter((todo)=>{
            console.log(new Date(todo.dueDate));

            const dueDays = calDaysPassed(TodayDate, new Date(todo.dueDate));
            console.log(todo.title,dueDays);
            if(dueDays > 0 && dueDays < 7) return todo;
        })
        let todayTodos = data?.data.filter((todo) =>
            new Date(todo.createAt).toISOString().split("T")[0] === TodayDate.toISOString().split("T")[0]);
        localStorage.setItem("Total", JSON.stringify(totalTodos));
        localStorage.setItem("Left", JSON.stringify(leftTodos));
        localStorage.setItem("Today", JSON.stringify(todayTodos));
        localStorage.setItem("Week", JSON.stringify(weekTodos));
    }
    return (
        <>
            <div style={{display: "flex", flexDirection: "row", paddingLeft: "30px", fontFamily:"HakgyoansimWoojuR, sans-serif"}}>
                <CustomSearch
                    label="Search"
                    onChange={handleInputChange}
                    onClick={onSearch}/>
                <FormControl sx={{m: 1, minWidth: 120, borderRadius:"4px"}}>
                    <InputLabel style={{fontWeight: "bold", fontFamily:"HakgyoansimWoojuR, sans-serif"}}>카테고리</InputLabel>
                    <Select
                        value={selection}
                        label="selection"
                        onChange={handleSelect}
                        input={<OutlinedInput label="카테고리"/>}
                    >
                        <MenuItem value="전체" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>전체</MenuItem>
                        {categoryData?.data.map((cat)=>{
                            return (
                                <MenuItem value={cat.name} style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>{cat.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center"}}>
                <Block>
                    <h1>해야할 일</h1>
                    <TodoItem params={unDoneList}/>
                </Block>
                <Divider sx={{borderColor: "black"}}/>
                <Block>
                    <h1>완료한 일</h1>
                    <TodoItem params={doneList}/>
                </Block>
            </div>
        </>
    );
}


export default TodoList;