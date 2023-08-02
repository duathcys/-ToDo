import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSignUpMutation} from "../../hooks/useSignupMutation";
import Swal from "sweetalert2"
import HomeIcon from '@mui/icons-material/Home';
import {IconButton, Tooltip} from "@mui/material";
import {ConfirmButton, Formdiv, Title, TodoInput, TodoInputbox} from "../common";
import LoginIcon from "@mui/icons-material/Login";
import ContactsIcon from "@mui/icons-material/Contacts";

function TodoSignUp() {
   const navigate = useNavigate();
   const [inputId, setInputId] = useState('');
   const [inputNick, setInputNick] = useState('');
   const [inputPw, setInputPw] = useState('');
   const [inputCheck, setInputCheck] = useState('');
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
   const onLogin = () => navigate("/user/login/")
   const onFindInfo = () => navigate("/user/find/")
   const handleClickGoHomeButton = () => navigate("/")

   if (isLoading) return <h2>Signing Up</h2>

   return (
       <div>
          <>
             <Title>WELCOME</Title>
             <TodoInputbox>
                <h2>SIGN UP</h2>
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
                   <Tooltip title="정보 찾기">
                      <IconButton onClick={onFindInfo}>
                         <ContactsIcon/>
                      </IconButton>
                   </Tooltip>
                </div>

                <Formdiv>
                   <h3>ID</h3>
                   <TodoInput value={inputId}
                              onChange={handleInputId}
                              placeholder="아이디를 입력하세요"/>
                   <h3>NICKNAME</h3>
                   <TodoInput value={inputNick}
                              onChange={handleInputNick}
                              placeholder="닉네임을 입력하세요"/>
                   <h3>PASSWORD</h3>
                   <TodoInput type="password"
                              value={inputPw}
                              onChange={handleInputPw}
                              autoComplete="off"
                              placeholder="비밀번호를 입력하세요"/>
                   <TodoInput type="password"
                              value={inputCheck}
                              onChange={handleInputCheck}
                              autoComplete="off"
                              placeholder="비밀번호를 한번 더 입력하세요"/>
                </Formdiv>
                <ConfirmButton onClick={handleClickSignUpButton}>확인</ConfirmButton>
             </TodoInputbox>

          </>
       </div>

)}

export default TodoSignUp