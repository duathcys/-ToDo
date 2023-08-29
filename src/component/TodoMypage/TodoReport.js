import {TextBlock} from "./style";
import * as React from "react";
import {useState} from "react";
import {TodoListBlock} from "../common";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";

export default function TodoReport(){
    const [data, setData] = useState([]);
    const todayTodo = JSON.parse(localStorage.getItem('Today'));
    const totalTodo = JSON.parse(localStorage.getItem('Total'));
    const leftTodo = JSON.parse(localStorage.getItem('Left'));
    const weekTodo = JSON.parse(localStorage.getItem('Week'));
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selection, setSelection] = useState([]);

    const onChangePage = (e, newPage)=>{
        setPage(newPage)
    }
    const onChangeRowsPerPage = (e)=>{
        setRowsPerPage(+e.target.value);
        setPage(0);
    }
    const onClickButton = (e)=>{
        const buttonTitle = e.target.id;
        switch (buttonTitle) {
            case "week":
                setData(weekTodo);
                break;
            case "today":
                setData(todayTodo);
                break;
            case "yesterday":
                break;
            case "total":
                setData(totalTodo);
                break;
            case "unFinish":
                setData(leftTodo);
                break;
            default:
                setData([]);
                break;
        }
    }
    return(
        <>
            <h2>TODAY REPORT</h2>
            <TodoListBlock>
                <div style={{display:"flex", flexDirection: "row"}}>
                    <TextBlock>
                        <h4 onClick={onClickButton} id="week">기한 일주일 미만 : {weekTodo.length} (개)</h4>
                        <h4 onClick={onClickButton} id="today">오늘 등록한 TODO : {todayTodo.length} (개)</h4>
                        <h4 onClick={onClickButton} id="yesterday">어제 등록한 TODO : </h4>
                        <h4 onClick={onClickButton} id="total">총 TODO : {totalTodo.length} (개)</h4>
                        <h4 onClick={onClickButton} id="unFinish">남은 TODO : {leftTodo.length} (개)</h4>
                    </TextBlock>
                    {/*<DetailBlock>*/}
                    <div>

                    </div>
                        <Paper sx={{width:"500px", backgroundColor:"#fff", borderShadow:"none", outLine:"none" }} style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>
                            <TableContainer sx={{maxHeight:440}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell key="title">title</TableCell>
                                            <TableCell key="category">category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data?.map( (todo)=> {
                                            return (
                                                <TableRow>
                                                    <TableCell key="title">{todo.title}</TableCell>
                                                    <TableCell key="category">{todo.category}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10]}
                                component="div"
                                count={data ? data.length : 0}
                                page={page}
                                onPageChange={onChangePage}
                                onRowsPerPageChange={onChangeRowsPerPage}
                                rowsPerPage={rowsPerPage}
                                style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}/>
                        </Paper>
                    {/*</DetailBlock>*/}
                </div>
            </TodoListBlock>
        </>

    )
}

