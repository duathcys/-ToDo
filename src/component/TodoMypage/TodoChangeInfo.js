import {TextBlock} from "./style";
import {Button, Divider} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import Swal from "sweetalert2";
import {TodoInput, TodoListBlock} from "../common";
import {updateMyInfo} from "../../API/user";
import CustomButton from "../../Custom/CustomButton/CustomButton";

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
            <TextBlock>
                <h4>Nickname</h4>
                <Divider/>
                <TodoInput name="nickname"
                           defaultValue={localStorage.getItem("Nickname")}
                           variant="standard"
                           label="Nickname"
                           onChange={onChangeInput}/>
                <h4>ID</h4>
                <Divider/>
                <TodoInput disabled
                           name="userId"
                           defaultValue={localStorage.getItem("UserId")}
                           variant="standard"
                           label="ID"
                />
                <h4>Current Password</h4>
                <Divider/>
                <TodoInput name="user_pw"
                           variant="standard"
                           label="Password"
                           placeholder="현재 비밀번호"
                           onChange={onChangeInput}
                           type="password"/>
                <CustomButton onClick={handleClickButton} name="비밀번호 변경하려면"/>
            </TextBlock>
                {click ? (
                    <TextBlock>
                        <h4>New Password</h4>
                        <Divider/>
                        <TodoInput name="new_pw"
                                   variant="standard"
                                   label="Password"
                                   placeholder="새로운 비밀번호"
                                   onChange={onChangeInput}
                                   type="password"/>
                        <h4>New Password Confirm</h4>
                        <Divider/>
                        <TodoInput name="new_pw_confirm"
                                   variant="standard"
                                   label="PasswordConfirm"
                                   placeholder="새로운 비밀번호 확인"
                                   onChange={onChangePwConfirm}
                                   type="password"/>
                    </TextBlock>
                ) : null}
                <CustomButton onClick={handleUpdateInfo} name="저장"/>
        </TodoListBlock>
    );
};