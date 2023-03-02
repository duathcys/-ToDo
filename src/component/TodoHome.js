import styled from "styled-components";
import React from "react";
import {useNavigate} from "react-router-dom";

const HomeForm = styled.form`
  width: 600px;
  height: 400px;
  background: #e0dddd;
  margin-top: 280px;
  margin-bottom: 0px;
  margin-inline: auto;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size:50px;
  text-align: center;
  `

const HomeLogin=styled.button`
  width:30px;
  height:10px;
  background-color: black;
  &:active{
    background-color: white;
    border:none;
  }
`


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