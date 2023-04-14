import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeForm } from "./style";
import { IconButton } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactsIcon from '@mui/icons-material/Contacts';

function TodoHome(){
   const navigate = useNavigate();
   const onLogin = ()=>{
      navigate('/user/login/')
   }
   const onSignUp = () =>{
      navigate('/user/signup/')
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
               <IconButton onClick={onLogin}>
                  <ContactsIcon/>
                  <text>FORGOT?</text>
               </IconButton>
               {/*<HomeLogin onClick={onLogin}/>*/}
            </div>
         </HomeForm>
      </>
   );
}


export default TodoHome;