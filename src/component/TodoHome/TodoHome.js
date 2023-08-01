import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeForm } from "./style";
import {IconButton, Tooltip} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactsIcon from '@mui/icons-material/Contacts';

function TodoHome(){
   if (localStorage.getItem("UserId")) {
      localStorage.clear()
   }
   const navigate = useNavigate();
   const onLogin = ()=>{
      navigate('/user/login/')
   }
   const onSignUp = () =>{
      navigate('/user/signup/')
   }

   const onFindInfo = () =>{
      navigate('/user/find/')
   }
   return (
      <>
         <HomeForm>
            TO DO LIST HOME
            <div>
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
               <Tooltip title="회원정보 찾기">
                  <IconButton onClick={onFindInfo}>
                     <ContactsIcon/>
                  </IconButton>
               </Tooltip>
               </div>
         </HomeForm>
      </>
   );
}


export default TodoHome;