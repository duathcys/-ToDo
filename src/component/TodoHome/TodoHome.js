import React from "react";
import {useNavigate} from "react-router-dom";
import {HomeForm, HomeLogin} from "./style";
import { IconButton } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';

function TodoHome(){
   const navigate = useNavigate();
   const onLogin = ()=>{
      navigate('/user/login/')
   }
   return (
      <>
         <HomeForm>
            TO DO LIST HOME
            <div>
               <IconButton onClick={onLogin}>
                  <LoginIcon/>
                  <h2>LOGIN</h2>
               </IconButton>
               <IconButton onClick={onLogin}>
                  <AssignmentIcon>SIGNUP</AssignmentIcon>
               </IconButton>
               {/*<HomeLogin onClick={onLogin}/>*/}
            </div>
         </HomeForm>
      </>
   );
}


export default TodoHome;