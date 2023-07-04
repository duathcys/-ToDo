import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {LoginButton, SignUpButton, TestDiv, TodoInputbox, TodoInputid, TodoInputpw, TodoLogingreet} from "./style";
import {useSignUpMutation} from "../../hooks/useSignupMutation";
import Swal from "sweetalert2"
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";

function TodoSignUp() {
   const navigate = useNavigate();
   const [inputId, setInputId] = useState('');
   const [inputNick, setInputNick] = useState('');
   const [inputPw, setInputPw] = useState('');
   const [inputCheck, setInputCheck] = useState('');
   // const {isLoading2, data} = TodoInfoData();
   const {mutate: onClickSignUpButton, isLoading} = useSignUpMutation();

   const handleInputId = (e) => setInputId(e.target.value)
   const handleInputNick = (e) => setInputNick(e.target.value)
   const handleInputPw = (e) => setInputPw(e.target.value)
   const handleInputCheck = (e) => setInputCheck(e.target.value)

   const handleClickSignUpButton = ()=>{
      console.log(inputPw === inputCheck)
      if(inputPw === inputCheck) {onClickSignUpButton({user_id:inputId, user_pw:inputPw, nickname:inputNick})}
      else Swal.fire('다시 시도해주세요', '비밀번호 확인이 바르지 않습니다.', 'error')
   }
   const handleClickLogInButton = () => navigate("/user/login/")
   const handleClickGoHomeButton = () => navigate("/")

   if (isLoading) return <h2>Signing Up</h2>

   return (
      <>
         <TodoLogingreet>WELCOME</TodoLogingreet>
         <TodoInputbox>
            <h2>SIGN UP</h2>
            <IconButton onClick={handleClickGoHomeButton}>
                  <HomeIcon/>
               </IconButton>
            <TestDiv>
               <h3>ID</h3>
               <TodoInputid value={inputId}
                            onChange={handleInputId}
                            placeholder="아이디를 입력하세요"/>
               <h3>NICKNAME</h3>
               <TodoInputid value={inputNick}
                            onChange={handleInputNick}
                            placeholder="닉네임을 입력하세요"/>
               <h3>PASSWORD</h3>
               <TodoInputpw type="password"
                            value={inputPw}
                            onChange={handleInputPw}
                            autoComplete="off"
                            placeholder="비밀번호를 입력하세요"/>
               <TodoInputpw type="password"
                            value={inputCheck}
                            onChange={handleInputCheck}
                            autoComplete="off"
                            placeholder="비밀번호를 한번 더 입력하세요"/>
            </TestDiv>
            <SignUpButton onClick={handleClickSignUpButton}>회원가입</SignUpButton>
            <LoginButton onClick={handleClickLogInButton}>로그인</LoginButton>
         </TodoInputbox>

      </>
)}

export default TodoSignUp