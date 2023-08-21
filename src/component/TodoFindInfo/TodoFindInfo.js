import React, {useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import {IconButton, Tooltip} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {ConfirmButton, Formdiv, Title, TodoInput, TodoInputbox} from "../common";
import {getMyInfo} from "../../API/user";


function TodoFindInfo() {
    const navigate = useNavigate();
    const [inputName, setInputName] = useState('');

    const onLogin = ()=> {
        navigate('/user/login/')
    }
    const onSignUp = () =>{
        navigate('/user/signup/')
    }


    const handleInputName = (e) => {
        setInputName(e.target.value);
    }
    const handleClickGoHomeButton = () => {
        navigate('/');
    }
    const handleSubmit = () => {
        getMyInfo().then((res)=>{
            if (!res.error) {
                Swal.fire({
                    title : '회원정보 찾기',
                    html : `아이디 : ${res.data} (확인을 누르면 로그인 페이지로 이동합니다.)`,
                    showDenyButton : true,
                    confirmButtonText : '확인',
                    denyButtonText : '취소',
                    icon : 'success'
                }).then((result)=>{
                    if (result.isConfirmed) {
                        navigate('/user/login');
                    } else if (result.isDenied) {
                        setInputName('');
                    }
                })
            }
        })
    };

    return (
        <>
            <Title>WELCOME</Title>
            <TodoInputbox>
                <h2>FIND</h2>
                <div>
                    <Tooltip title="Home">
                        <IconButton onClick={handleClickGoHomeButton}>
                            <HomeIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="로그인">
                        <IconButton onClick={onLogin}>
                            <LoginIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="회원가입">
                        <IconButton onClick={onSignUp}>
                            <AssignmentIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
                <Formdiv>
                    <h3>Nickname</h3>
                    <TodoInput
                        value={inputName}
                        onChange={handleInputName}
                        placeholder="닉네임을 입력하세요"/>
                </Formdiv>
                <ConfirmButton onClick={handleSubmit}>확인</ConfirmButton>
                <ConfirmButton onClick={handleSubmit}>비밀번호 재설정</ConfirmButton>
            </TodoInputbox>
        </>

    )
        ;
}

export default TodoFindInfo;
