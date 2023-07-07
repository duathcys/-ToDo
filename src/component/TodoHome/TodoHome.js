import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeForm } from "./style";
import { IconButton } from "@mui/material";
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
      navigate('/user/info/')
   }
   return (
      <>
         <HomeForm>
            TO DO LIST HOME
            <div>
               <IconButton onClick={onLogin}>
                  <LoginIcon/>
                  <text>LOGIN</text>
               </IconButton>
               <IconButton onClick={onSignUp}>
                  <AssignmentIcon/>
                  <text>SIGNUP</text>
               </IconButton>
               </div>
               <div>
               <IconButton onClick={onFindInfo}>
                  <ContactsIcon/>
                  <text>FORGOT</text>
               </IconButton>
            </div>
         </HomeForm>
      </>
   );
}


export default TodoHome;