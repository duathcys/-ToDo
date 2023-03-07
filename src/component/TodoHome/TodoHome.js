import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {HomeForm, HomeLogin} from "./style";


function TodoHome(){
   const navigate = useNavigate();
   const onLogin = ()=>{
      navigate('/user/login/')
   }
   if (!onLogin) return <Navigate to="/"/>
   return (
      <>
         <HomeForm>
            TO DO LIST HOME
            <HomeLogin onClick={onLogin}/>
         </HomeForm>
      </>
   );
}


export default TodoHome;