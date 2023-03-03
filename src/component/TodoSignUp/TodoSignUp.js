import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import history from "../TodoCheck";
import {LoginButton, SigninButton, TestDiv, TodoInputbox, TodoInputid, TodoInputpw, TodoLogingreet} from "./style";
import {useSignUpMutation} from "../../hooks/useSignupMutation";

function TodoSignUp() {
   const navigate = useNavigate();
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');
   const [inputCheck, setInputCheck] = useState('');
   const [signIn, setSignIn] = useState({user_id: "", user_pw: ""});
   const [locationKeys, setLocationKeys] = useState([]);
   // const {isLoading2, data} = TodoInfoData();
   const {mutate: addUser, isLoading, isError, isSuccess, error} = useSignUpMutation(signIn);

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