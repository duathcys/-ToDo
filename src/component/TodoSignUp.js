import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {TodoInfoData, TodoSignInMutation, TodoSignUpMutation} from "./TodoMutate";
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
  height: 500px;
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
  margin-top: 30px;
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

function TodoSignUp() {
   const navigate = useNavigate();
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');
   const [inputCheck, setInputCheck] = useState('');
   const [signIn, setSignIn] = useState({user_id: "", user_pw: ""});
   const [locationKeys, setLocationKeys] = useState([]);
   // const [searchParams, setsearchParams] = useSearchParams();
   // const {isLoading2, data} = TodoInfoData();
   const {mutate: addUser, isLoading, isError, isSuccess, error} = TodoSignUpMutation(signIn);

   // const setParams = ()=>{
   //    searchParams.set('info', localStorage.getItem('UserId'))
   //    setsearchParams(searchParams)
   // }
   useEffect(() => {
      return history.listen((location) => {
         if (history.action === "PUSH") {
            setLocationKeys([location.key]);
         }
         if (history.action === "POP") {
            setLocationKeys(([_, ...keys]) => keys);
            history.push("http://localhost:3000/user/login/")
         } else {
            setLocationKeys((keys) => [location.key, ...keys]);
            history.push("http://localhost:3000/user/login/")
         }
      })
   }, [locationKeys, history])

   // useEffect(()=>{
   //    localStorage.setItem("userId", data.user_id)
   // },[]);
   const handleInputId = (e) => {
      setSignIn((prev) =>
         ({...prev, user_id: e.target.value}))
      setInputId(e.target.value)
      console.log("user_id", e.target.value);
   }
   const handleInputPw = (e) => {
      setSignIn((prev) =>
         ({...prev, user_pw: e.target.value}))
      setInputPw(e.target.value)
      console.log("user_pw", e.target.value);
   }

   const handleInputCheck = (e)=>{
      setInputCheck(e.target.value)
      console.log("check", e.target.value)
   }
   const handleClickLogInButton=()=>{
      navigate("/user/login/")
   }
   const handleClickSignInButton = () => {
      if (inputCheck === inputPw) {
         addUser(signIn);
         setSignIn({user_id: "", user_pw: ""});
         console.log(signIn);}
      else
      {
         alert("비밀번호 확인이 올바르지 않습니다");
      }

      //    const validation = data?.data.filter(function (id) {
      //       return id.user_id === inputId
      //    })
      //    if (validation.length === 0) {
      //       alert('회원가입 성공')
      //    } else {
      //       alert('아이디 중복입니다! 다시 입력하세요')
      //    }
      // }
   }
   //
   // const result = data?.data.filter(function (id) {
   //    return id.user_id === inputId && id.user_pw === inputPw
   // })
   // console.log(result);
   // const navigatetoTodo = () => {
   //    console.log(data);
   //    if (result.length === 1) {
   //       localStorage.setItem("UserId", inputId)
   //       localStorage.setItem("UserPw", inputPw)
   //       // localStorage.setItem("itemName", token)
   //       const User_Info = localStorage.getItem("UserId")
   //       // const token = localStorage.getItem("itemName")
   //       alert(`${User_Info}님 환영합니다`)
   //       // setsearchParams.set({info:`${User_Info}`})
   //       // console.log(setsearchParams())
   //       navigate(`/todo/list/?info=${User_Info}`)
   //       // localStorage.getItem('user_id')
   //       // localStorage.getItem('token')
   //    } else {
   //       alert("로그인 실패")
   //       // eslint-disable-next-line no-restricted-globals
   //       location.reload()
   //    }
   //
   // }

   return (
      <div>
         {isLoading ? ('Adding Todo') : (
            <>
               {isError ? (<div>
                  {alert(`error:${error}`)}
               </div>) : null}
               {isSuccess ? <div>
                  {localStorage.getItem('signup error')?(
                        alert(localStorage.getItem('signup error')),
                           localStorage.removeItem('signup error'),
                           // eslint-disable-next-line no-restricted-globals
                           location.reload()
                     )
                     :(
                        alert('회원가입 성공\n로그인 페이지로 이동합니다'),
                           navigate(`/user/login/`)
                     )}
               </div> : null}
      <>
         <TodoLogingreet>WELCOME</TodoLogingreet>
         <TodoInputbox>
            <h2>SIGN UP</h2>
            <TestDiv>
               <h3>ID</h3>
               <TodoInputid value={signIn.user_id}
                            onChange={handleInputId}
                            placeholder="아이디를 입력하세요"/>
               <h3>PASSWORD</h3>
               <TodoInputpw type="password"
                            value={signIn.user_pw}
                            onChange={handleInputPw}
                            autoComplete="off"
                            placeholder="비밀번호를 입력하세요"/>
               <TodoInputpw type="password"
                            value={inputCheck}
                            onChange={handleInputCheck}
                            autoComplete="off"
                            placeholder="비밀번호를 한번 더 입력하세요"/>
            </TestDiv>
            <LoginButton onClick={handleClickLogInButton}>로그인</LoginButton>
            {/*<input type='submit' value='로그인' onClick={navigatetoTodo}/>*/}
            <SigninButton onClick={handleClickSignInButton}>회원가입</SigninButton>


         </TodoInputbox>

      </>
            </>
         )}
      </div>
   )
}

export default TodoSignUp