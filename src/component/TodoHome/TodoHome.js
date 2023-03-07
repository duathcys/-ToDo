import React from "react";
import {useNavigate} from "react-router-dom";
import {HomeForm, HomeLogin} from "./style";


function TodoHome(){
   const navigate = useNavigate();
   const onLogin = ()=>{
      navigate('/user/login/')
   }
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