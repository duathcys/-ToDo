import {TextBlock} from "./style";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {updateMyInfo} from "../../API/user";
import {TodoListBlock} from "../common";

export default function TodoChangeInfo() {

    const [newNick, setNewNick] = useState("");
    const [newPw, setNewPw] = useState("");
    const [password, setPassword] = useState("");
    const [newPwConfirm, setNewPwConfirm] = useState("");
    const [newInfo, setNewInfo] = useState({
        nickname: localStorage.getItem("Nickname"),
        user_id: localStorage.getItem("UserId"),
        user_pw: "",
        new_pw: "",
    });

    const [click, setClick] = useState(false);
    const handleNewNick = (e)=>{
        setNewNick(e.target.value);
        console.log(newNick);
    }
    const handleNewPw = (e)=>{
        setNewPw(e.target.value);
        console.log(newPw);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        console.log(password);
    }
    const handleNewPwConfirm = (e)=>{
        setNewPwConfirm(e.target.value);
    }
    useEffect(() => {
        setNewInfo({...newInfo, user_pw: password, nickname: newNick, new_pw: newPw});
        console.log(newInfo);
    }, [password, newNick, newPw, newPwConfirm]);
    const handleUpdateInfo = ()=>{
        if (password === "") {
            Swal.fire('회원정보 수정', '비밀번호를 입력해주세요', 'warning');
        }
        else if (newPw !== "") {
            if (newPw !== newPwConfirm) {
                Swal.fire('회원정보 수정', '비밀번호가 일치하지 않습니다.', "error");
            }
        } else{
            updateMyInfo(newInfo).then((res)=>{
                if (res) {
                    Swal.fire('회원정보 수정', '회원정보가 수정되었습니다.', 'success');
                    localStorage.removeItem("Nickname");
                    localStorage.setItem("Nickname", newNick);
                    setNewInfo({
                        nickname: localStorage.getItem("Nickname"),
                        user_id: localStorage.getItem("UserId"),
                        user_pw: "",
                        new_pw: "",
                    })
                    // setPassword("");
                    // setNewPw("");
                    // setNewPwConfirm("");
                }
            }).catch((err)=>{
                Swal.fire('회원정보 수정', `${err.response.data}`, 'error')
            })
        }
    }
    const handleClickButton = ()=>{
        setClick(!click);
    }
    return (
        <TodoListBlock>
            <h2>회원 정보 수정</h2>
            <TextBlock style={{display: "flex", flexDirection: "column"}}>
                <TextField name="nickname"
                           defaultValue={localStorage.getItem("Nickname")}
                           variant="standard"
                           label="Nickname"
                           style={{width: "200px", margin: "10px"}}
                           onChange={handleNewNick}/>
                <TextField disabled
                           name="userId"
                           defaultValue={localStorage.getItem("UserId")}
                           variant="standard"
                           label="ID"
                           style={{width: "200px", margin: "10px"}}
                />
                <TextField name="password"
                           variant="standard"
                           label="Password"
                           style={{width: "200px", margin: "10px"}}
                           placeholder="현재 비밀번호"
                           onChange={handlePassword}
                           type="password"/>
                <Button onClick={handleClickButton}>비밀번호 변경하려면</Button>
                {click ? (
                    <>
                        <TextField name="password"
                                   variant="standard"
                                   label="Password"
                                   style={{width: "200px", margin: "10px"}}
                                   placeholder="새로운 비밀번호"
                                   onChange={handleNewPw}
                                   type="password"/>
                        <TextField name="password"
                                   variant="standard"
                                   label="PasswordConfirm"
                                   style={{width: "200px", margin: "10px"}}
                                   placeholder="새로운 비밀번호 확인"
                                   onChange={handleNewPwConfirm}
                                   type="password"/>
                    </>
                ) : null}
                <Button style={{width: "150px"}} onClick={handleUpdateInfo}>저 장</Button>
            </TextBlock>
        </TodoListBlock>
    );
};