import {TextBlock} from "./style";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import Swal from "sweetalert2";
import {updateMyInfo} from "../../API/user";

export default function TodoChangeInfo() {

    const [newNick, setNewNick] = useState();
    const [newPw, setNewPw] = useState();
    const [newPwConfirm, setNewPwConfirm] = useState();
    const [newInfo, setNewInfo] = useState({
        user_id: localStorage.getItem("UserId"),
        user_pw: "",
        nickname:""
    });
    const handleNewNick = (e)=>{
        setNewNick(e.target.value);
    }
    const handleNewPw = (e)=>{
        setNewPw(e.target.value);
    }
    const handleNewPwConfirm = (e)=>{
        setNewPwConfirm(e.target.value);
    }

    const handleUpdateInfo = ()=>{
        if (newPw !== newPwConfirm) {
            Swal.fire('회원정보 수정', '비밀번호가 일치하지 않습니다.', "error");
        } else {
            setNewInfo({...newInfo, user_pw: newPw, nickname: newNick})
            updateMyInfo(newInfo);
        }
    }
    return (
        <div>
            <h2>회원 정보 수정</h2>
            <TextBlock style={{display:"flex", flexDirection:"column"}}>
                <TextField name="nickname"
                           defaultValue="example"
                           variant="standard"
                           label="Nickname"
                           style={{width:"200px", margin:"10px"}}
                           onChange={handleNewNick}/>
                <TextField disabled
                           name="userId"
                           defaultValue={localStorage.getItem("UserId")}
                           variant="standard"
                           label="ID"
                           style={{width:"200px", margin:"10px"}}/>
                <TextField name="password"
                           variant="standard"
                           label="Password"
                           style={{width:"200px", margin:"10px"}}
                           placeholder="현재 비밀번호"
                           onChange={handleNewPw}/>
                <TextField name="password"
                           variant="standard"
                           label="Password"
                           style={{width:"200px", margin:"10px"}}
                           placeholder="새로운 비밀번호"
                           onChange={handleNewPw}/>
                <TextField name="password"
                           variant="standard"
                           label="PasswordConfirm"
                           style={{width:"200px", margin:"10px"}}
                           placeholder="새로운 비밀번호 확인"
                           onChange={handleNewPwConfirm}/>
                <Button style={{width: "150px"}} onClick={handleUpdateInfo}>저 장</Button>
            </TextBlock>
        </div>

    );
};