import {TextBlock} from "./style";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import Swal from "sweetalert2";
import {TodoListBlock} from "../common";
import {useUpdateUserMutation} from "../../hooks/useUpdateUserMutation";
import {updateMyInfo} from "../../API/user";

export default function TodoChangeInfo() {

    const [newPwConfirm, setNewPwConfirm] = useState("");
    const [click, setClick] = useState(false);
    const [newInfo, setNewInfo] = useState({
        nickname: localStorage.getItem("Nickname"),
        user_id: localStorage.getItem("UserId"),
        user_pw: "",
        new_pw: "",
    });
    // const {mutate:updateUser} = useUpdateUserMutation();
    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setNewInfo((prev) => (
            {...prev, [name]: value}
        ));
    };
    const onChangePwConfirm = (e)=>{
        setNewPwConfirm(e.target.value);
    }
    const handleClickButton = ()=>{
        setClick(!click);
    }
    const handleUpdateInfo = ()=>{
        if (newInfo.user_pw === "") {
            Swal.fire('회원정보 수정', '비밀번호를 입력해주세요', 'warning');
        } else if (newInfo.new_pw !== "" && newInfo.new_pw !== newPwConfirm) {
            Swal.fire('회원정보 수정', '비밀번호가 일치하지 않습니다.', "error");
        } else {
            // updateUser(newInfo);
                updateMyInfo(newInfo).then((res)=>{
                    if (res) {
                        Swal.fire('회원정보 수정', '회원정보가 수정되었습니다.', 'success');
                        localStorage.removeItem("Nickname");
                        localStorage.setItem("Nickname", newInfo.nickname);
                        setNewInfo({
                            nickname: localStorage.getItem("Nickname"),
                            user_id: localStorage.getItem("UserId"),
                            user_pw: "",
                            new_pw: "",
                        })
                    }
                }).catch((err)=>{
                    Swal.fire('회원정보 수정', `${err.response.data}`, 'error')
                })
            }
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
                           onChange={onChangeInput}/>
                <TextField disabled
                           name="userId"
                           defaultValue={localStorage.getItem("UserId")}
                           variant="standard"
                           label="ID"
                           style={{width: "200px", margin: "10px"}}
                />
                <TextField name="user_pw"
                           variant="standard"
                           label="Password"
                           style={{width: "200px", margin: "10px"}}
                           placeholder="현재 비밀번호"
                           onChange={onChangeInput}
                           type="password"/>
                <Button onClick={handleClickButton}>비밀번호 변경하려면</Button>
                {click ? (
                    <>
                        <TextField name="new_pw"
                                   variant="standard"
                                   label="Password"
                                   style={{width: "200px", margin: "10px"}}
                                   placeholder="새로운 비밀번호"
                                   onChange={onChangeInput}
                                   type="password"/>
                        <TextField name="new_pw_confirm"
                                   variant="standard"
                                   label="PasswordConfirm"
                                   style={{width: "200px", margin: "10px"}}
                                   placeholder="새로운 비밀번호 확인"
                                   onChange={onChangePwConfirm}
                                   type="password"/>
                    </>
                ) : null}
                <Button style={{width: "150px"}} onClick={handleUpdateInfo}>저 장</Button>
            </TextBlock>
        </TodoListBlock>
    );
};