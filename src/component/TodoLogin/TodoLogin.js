import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "../../hooks/useLoginMutation";
import HomeIcon from '@mui/icons-material/Home';
import {IconButton, Tooltip} from "@mui/material";
import {ConfirmButton, Formdiv, Title, TodoInput, TodoInputbox} from "../common";

function TodoLogin() {
   const navigate = useNavigate();
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');
   const {mutate: onClickLoginButton, isLoading, isError, isSuccess, error, data} = useLoginMutation(inputId);
   const handleInputId = (e) => setInputId(e.target.value)
   const handleInputPw = (e) => setInputPw(e.target.value)
   const handleClickSignUpButton = () => navigate("/user/signup/")
   const handleClickGoHomeButton = () => navigate("/")

   if (isLoading) return <h2>Waiting for LogIn</h2>;

   return (
      <div>
         <>
            <Title>WELCOME</Title>
            <TodoInputbox>
               <h2>LOGIN</h2>
               <Tooltip title="Home">
                  <IconButton onClick={handleClickGoHomeButton}>
                     <HomeIcon/>
                  </IconButton>
               </Tooltip>
               <Formdiv>
                  <h3>ID</h3>
                  <TodoInput
                     value={inputId}
                     onChange={handleInputId}
                     placeholder="아이디를 입력하세요"/>
                  <h3>PASSWORD</h3>
                  <TodoInput type="password"
                               value={inputPw}
                               onChange={handleInputPw}
                               autoComplete="off"
                               placeholder="비밀번호를 입력하세요"/>
               </Formdiv>
               <ConfirmButton
                  onClick={() => onClickLoginButton({user_id: inputId, user_pw: inputPw})}>로그인</ConfirmButton>
               <ConfirmButton onClick={handleClickSignUpButton}>회원가입</ConfirmButton>
            </TodoInputbox>
         </>
      </div>
   )
}

export default TodoLogin