import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem/TodoItem";
import history from "./TodoCheck";
import {Divider, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useGetDataQuery} from "../hooks/useGetDataQuery";

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
  //padding: 50px;
  margin: 10px;
  //border: 1px solid;
  border-radius: 8px;
  box-shadow: #282c34;
  //justify-content: center;
  //align-content: center;
  h1 {
    font-size: 20px;
    text-align: center;
    
  }
`

function TodoList() {
    const {isLoading, isSuccess, data} = useGetDataQuery();
    const [locationKeys, setLocationKeys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterlist, setFilterlist] = useState([]);
    const [done, setDone] = useState({complete: true, use: false});
    const [selection, setSelection] = useState('');
    const [doneList, setDoneList] = useState([]);
    const [unDoneList, setUnDoneList] = useState([]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    // let filterData = data?.data;
    // let doneData = dat

    const onSearch = () => {
        if (searchTerm !== '') {
            setDoneList(doneList.filter((todo) => todo.title.includes(searchTerm)));
            setUnDoneList(unDoneList.filter((todo) => todo.title.includes(searchTerm)));
            // setFilterlist(filterData)
        }
        // else {
        //    setFilterlist(
        //       data?.data.filter((todo) => todo.title.includes(searchTerm)));
        // }
    }
    const applyFilter = () => {
        if (searchTerm !== "") {
            setDoneList(doneList.filter((todo) => todo.title.includes(searchTerm)));
            setUnDoneList(unDoneList.filter((todo) => todo.title.includes(searchTerm)));
        }
        // if (done.use === true) {
        //     console.log('ioisjdf');
        //     filterData = filterData.filter((todo) => todo.done === done.complete);
        // }
        // setFilterlist(filterData);
    };
    const handleSelect = (e) => {
        setSelection(e.target.value);
    }

    useEffect(() => {
        setDoneList(data?.data.filter((todo) => todo.done === true));
        setUnDoneList(data?.data.filter((todo) => todo.done === false));
    }, [doneList, unDoneList])

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
    }, [data, done])

    useEffect(() => {

        if (selection === 'Complete') {
            setDone({complete: true, use: true});
        } else if (selection === 'Incomplete') {
            setDone({complete: false, use: true});
        } else if (selection === 'All') {
            setDone({complete: false, use: false})
        }
        console.log(done);
    }, [selection, done.complete, done.use]);

    if (isLoading) {
        return <div>Waiting</div>;
    }
    if (isSuccess) {
        let totaltodos = data?.data;
        let lefttodos = data?.data.filter((todo) => todo.done === false);
        localStorage.setItem("Total", totaltodos.length);
        localStorage.setItem("Left", lefttodos.length);
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
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Complete">Complete</MenuItem>
                        <MenuItem value="Incomplete">Incomplete</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {/*//     <TodoListBlock>*/}
            {/*//         <TodoItem params={filterlist}/>*/}
            {/*//     </TodoListBlock>*/}
            {/*// </>*/}
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