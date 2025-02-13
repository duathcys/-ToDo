import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "../../hooks/useLoginMutation";
import HomeIcon from '@mui/icons-material/Home';
import {IconButton, Tooltip} from "@mui/material";
import {Formdiv, Title, TodoInput, TodoInputbox} from "../common";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ContactsIcon from "@mui/icons-material/Contacts";
import CustomButton from "../../Custom/CustomButton/CustomButton";

export default function TodoLogin() {
   const navigate = useNavigate();
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');
   const {mutate: onClickLoginButton, isLoading} = useLoginMutation(inputId);
   // const {isLoading2, data} = useGetCategoryQuery();
   const handleInputId = (e) => setInputId(e.target.value)
   const handleInputPw = (e) => setInputPw(e.target.value)
   const onSignUp = () => navigate("/user/signup/")
   const onFindInfo = () => navigate("/user/find/")

   const onLogin = () => {
      onClickLoginButton({user_id: inputId, user_pw: inputPw})
   }
   const handleClickGoHomeButton = () => navigate("/")

   return (
       <div>
          <>
             <Title>WELCOME</Title>
             <TodoInputbox>
                <h2>LOGIN</h2>
                <div>
                   <Tooltip title="Home">
                      <IconButton onClick={handleClickGoHomeButton}>
                         <HomeIcon/>
                      </IconButton>
                   </Tooltip>
                   <Tooltip title="회원가입">
                      <IconButton onClick={onSignUp}>
                         <AssignmentIcon/>
                      </IconButton>
                   </Tooltip>
                   <Tooltip title="정보찾기">
                      <IconButton onClick={onFindInfo}>
                         <ContactsIcon/>
                      </IconButton>
                   </Tooltip>
                </div>
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
                <CustomButton
                    onClick={onLogin}
                    name="확인"/>
             </TodoInputbox>
          </>
       </div>
   );
};