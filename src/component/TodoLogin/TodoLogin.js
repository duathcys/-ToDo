import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {LoginButton, SigninButton, TestDiv, TodoInputbox, TodoInputid, TodoInputpw, TodoLogingreet} from "./style";
import {useLoginMutation} from "../../hooks/useLoginMutation";
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";

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
            <TodoLogingreet>WELCOME</TodoLogingreet>
            <TodoInputbox>
               <h2>LOGIN</h2>
               <IconButton onClick={handleClickGoHomeButton}>
                  <HomeIcon/>
               </IconButton>
               <TestDiv>
                  <h3>ID</h3>
                  <TodoInputid
                     value={inputId}
                     onChange={handleInputId}
                     placeholder="아이디를 입력하세요"/>
                  <h3>PASSWORD</h3>
                  <TodoInputpw type="password"
                               value={inputPw}
                               onChange={handleInputPw}
                               autoComplete="off"
                               placeholder="비밀번호를 입력하세요"/>
               </TestDiv>
               <LoginButton
                  onClick={() => onClickLoginButton({user_id: inputId, user_pw: inputPw})}>로그인</LoginButton>
               <SigninButton onClick={handleClickSignUpButton}>회원가입</SigninButton>
            </TodoInputbox>
         </>
      </div>
   )
}

export default TodoLogin