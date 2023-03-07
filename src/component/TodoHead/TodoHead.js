import React from 'react';
import moment from "moment";
import 'moment/locale/ko';
import {useNavigate} from "react-router-dom";
import {GoToBtn, TodoHeadBlock} from "./style";
import Swal from "sweetalert2";

const nowTime = moment().format('YYYY년 MM월 DD일');
let today = moment();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let nowDay = week[today.day()];

function TodoHead() {
const navigate = useNavigate();
   const onClickLogoutBtn = () => {
      Swal.fire({title:'LOGOUT', text:'정말 로그아웃 하시겠습니까?', icon:'question', showCancelButton:true, confirmButtonText:'로그아웃'})
         .then((result)=>{
            if(result.isConfirmed){
            localStorage.clear();
            navigate("/user/login");
            }
         })
   };

   const onClickHomeBtn = ()=>{
      Swal.fire({title:'HOME', text:'홈으로 가시겠습니까?\n자동으로 로그아웃됩니다', icon:"question", showCancelButton:true, confirmButtonText:'홈'})
         .then((result)=>{
            if(result.isConfirmed){
               localStorage.clear();
               navigate('/');
            }
         })
   }

   return (
      <TodoHeadBlock>
         <h1>To Do List</h1>
         <div className="info">{localStorage.getItem("UserId")}님</div>
         <div className="linkto">
            <GoToBtn onClick={onClickLogoutBtn}>Logout</GoToBtn>
            <GoToBtn onClick={onClickHomeBtn}>HOME</GoToBtn>
         </div>
         <div className="date">{nowTime}</div>
         <div className="day">{nowDay}</div>
      </TodoHeadBlock>
   )
}

export default TodoHead