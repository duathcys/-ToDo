import React from 'react';
import styled from "styled-components";
import moment from "moment";
import 'moment/locale/ko';
import {Link, useNavigate} from "react-router-dom";

const nowTime = moment().format('YYYY년 MM월 DD일');
let today = moment();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let nowDay = week[today.day()];


const TodoHeadBlock = styled.div`
  padding: 20px 32px;
  padding-bottom: 48px;

  h1 {
    margin: 0px;
    text-align: center;
    font-size: 40px;
    color: #000000;
  }

  .date {
    margin: 10px;
    font-size: 20px;
    text-align: right;
    color: black;
  }

  .day {
    margin: 10px;
    font-size: 20px;
    text-align: right;
    color: black;
  }
  .link{
    margin:10px;
    font-size:15px;
    text-align: right;
    font-weight: bold;
    display: flex;
    flex-flow: row;
    color: cadetblue;
  }
  .linkto{
    align-items: center;
    justify-content: right;
    display: flex;
  }
  .info{
    align-items: center;
    justify-content: right;
    display: flex;
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
`;

function TodoHead() {

   return (
      <TodoHeadBlock>
         <h1>To Do List</h1>
         <div className="info">{localStorage.getItem("UserId")}님</div>
         <div className="linkto">
            <Link to="/user/login" className="link" onClick={()=>{
               localStorage.removeItem('access')
               localStorage.removeItem('refresh')
               localStorage.removeItem('login error')
               // localStorage.removeItem('')
               return alert("로그아웃 하시겠습니까?")}

            }> Logout </Link>
            <Link to='/' className="link" onClick={()=>{
               return alert("홈으로 가시겠습니까?\n자동으로 로그아웃됩니다")}}> Home </Link>
         </div>

         <div className="date">{nowTime}</div>
         <div className="day">{nowDay}</div>
      </TodoHeadBlock>
   )
}

export default TodoHead