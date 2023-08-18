import {DetailBlock, TextBlock} from "./style";
import * as React from "react";
import {useState} from "react";
import {TodoListBlock} from "../common";

export default function TodoReport(){
    const [data, setData] = useState([]);
    const todayTodo = JSON.parse(localStorage.getItem('Today'));
    const totalTodo = JSON.parse(localStorage.getItem('Total'));
    const leftTodo = JSON.parse(localStorage.getItem('Left'));
    const onClickButton = (e)=>{
        const buttonTitle = e.target.id;
        switch (buttonTitle) {
            case "week":
                setData([]);
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
        <TodoListBlock>
            <h2>TODAY REPORT</h2>
            <div style={{display:"flex", flexDirection: "row"}}>
                <TextBlock>
                    <h4 onClick={onClickButton} id="week">기한 일주일 미만 : </h4>
                    <h4 onClick={onClickButton} id="today">오늘 등록한 TODO : {todayTodo.length} (개)</h4>
                    <h4 onClick={onClickButton} id="yesterday">어제 등록한 TODO : </h4>
                    <h4 onClick={onClickButton} id="total">총 TODO : {totalTodo.length} (개)</h4>
                    <h4 onClick={onClickButton} id="unFinish">남은 TODO : {leftTodo.length} (개)</h4>
                </TextBlock>
                <DetailBlock>
                    {/*<h4>할  일</h4>*/}
                    {/*<h4>기  한</h4>*/}
                    {/*<h4>분  류</h4>*/}
                    {data?.map((todo)=>{
                        return(
                            <>
                                <h4>{todo.title}</h4>
                                <h4>{todo.dueDate}</h4>
                                <h4>{todo.category}</h4>
                            </>
                        )

                    })}
                </DetailBlock>
            </div>

        </TodoListBlock>
    )
}

