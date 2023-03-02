import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {TodoGetUser} from "./TodoMutate";
import history from "./TodoCheck";
// import {token} from "mysql/lib/protocol/Auth";

const TodoLogingreet = styled.div`
  padding: 50px 32px 20px;
  margin: 10px;
  text-align: center;
  font-size: 40px;
  color: #000000;
`

const TodoInputbox = styled.form`
  width: 600px;
  height: 400px;
  background: #e0dddd;
  margin-top: 150px;
  margin-bottom: 0px;
  margin-inline: auto;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    font-size: 30px;
    color: #000000;
    margin-top: 0px;
  }
`

const TodoInputid = styled.input`
  width: 400px;
  height: 50px;
  background: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  font-size: 18px;
  margin: 10px;
  position: center;
  //input:focus{
  //  border: none;
  //  outline:none;
  //}
  //input:active{
  //  border:none;
  //  outline:none;
  //}
  //&:hover{
  //  border:none;
  //}
  //input:active{
  //  outline:none;
  //  border:none;
  //}
  //input:focus{
  //  border:none;
  //  outline:none;
  //}
`
const TodoInputpw = styled.input`
  width: 400px;
  height: 50px;
  background: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  font-size: 18px;
  margin: 10px;
`

const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  font-size: 18px;
  margin-right: 30px;
  position: relative;
  margin-left: auto;
`

const SigninButton = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  font-size: 18px;
  margin-right: 30px;
  position: relative;
  margin-left: auto;
  margin-top: 10px;
`

const TestDiv = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 150px;
`

function TodoLogin() {
   const navigate = useNavigate();
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');
   const [logIn, setLogIn] = useState({user_id: "", user_pw: ""});
   const [locationKeys, setLocationKeys] = useState([]);
   // const {isLoading2, data} = TodoInfoData();
   const {mutate: loginUser, isLoading, isError, isSuccess, error, data} = TodoGetUser(logIn);

   useEffect(() => {
      return history.listen((location) => {
         if (history.action === "PUSH") {
            setLocationKeys([location.key]);
         }
         if (history.action === "POP") {
            setLocationKeys(([_, ...keys]) => keys);
            history.push("/user/login/")
         } else {
            setLocationKeys((keys) => [location.key, ...keys]);
            history.push("/user/login/")
         }
      })
   }, [locationKeys, history])


   const handleInputId = (e) => {
      setLogIn((prev) =>
         ({...prev, user_id: e.target.value}))
      setInputId(e.target.value)
      console.log("user_id", e.target.value);
   }
   const handleInputPw = (e) => {
      setLogIn((prev) =>
         ({...prev, user_pw: e.target.value}))
      setInputPw(e.target.value)
      console.log("user_pw", e.target.value);
   }
   console.log(logIn);
   const handleClickLogInButton = () => {
      console.log(logIn);
      loginUser(logIn)
      localStorage.setItem("UserId", inputId)
      const User_info = localStorage.getItem("UserId")
      const access = localStorage.getItem('access')
   }
   const handleClickSignUpButton = () => {
      navigate("/user/signup/")
   }

   return (
      <div>
         {isLoading ? ('Adding Todo') : (
            <>
               {isError ? (<div>
                  {alert(`error:${error}`)}
               </div>) : null}
               {isSuccess ? <div>
                  {localStorage.getItem('login error')?(
                        alert(localStorage.getItem('login error')),
                           localStorage.removeItem('login error'),
                           // eslint-disable-next-line no-restricted-globals
                           location.reload()
                     )
                     :(
                        alert('로그인 성공'),
                           navigate(`/todo/list/?info=${localStorage.getItem('UserId')}`)
                     )}
               </div> : null}
               <>
                  <TodoLogingreet>WELCOME</TodoLogingreet>
                  <TodoInputbox>
                     <h2>LOGIN</h2>
                     <TestDiv>
                        <h3>ID</h3>
                        <TodoInputid value={logIn.user_id}
                                     onChange={handleInputId}
                                     placeholder="아이디를 입력하세요"/>
                        <h3>PASSWORD</h3>
                        <TodoInputpw type="password"
                                     value={logIn.user_pw}
                                     onChange={handleInputPw}
                                     autoComplete="off"
                                     placeholder="비밀번호를 입력하세요"/>
                     </TestDiv>
                     <LoginButton onClick={() => {
                        handleClickLogInButton()
                     }}>로그인</LoginButton>
                     <SigninButton onClick={() => {
                        handleClickSignUpButton()
                     }}>회원가입</SigninButton>
                  </TodoInputbox>

               </>
            </>
         )}
      </div>
   )
}

export default TodoLogin