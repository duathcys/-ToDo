import React from 'react';
import moment from "moment";
import 'moment/locale/ko';
import {Link, useNavigate} from "react-router-dom";
import {TodoHeadBlock} from "./style";

const nowTime = moment().format('YYYY년 MM월 DD일');
let today = moment();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let nowDay = week[today.day()];

function TodoHead() {
const navigate = useNavigate();
   const onClickLogoutBtn = () => {
      const confirm = window.confirm("정말 로그아웃 하시겠습니까?")
     if(confirm) {
        localStorage.clear();
        navigate("/user/login");
     }
   };

   return (
      <TodoHeadBlock>
         <h1>To Do List</h1>
         <div className="info">{localStorage.getItem("UserId")}님</div>
         <div className="linkto">
            <button onClick={onClickLogoutBtn}>Logout</button>
            <Link to='/' className="link" onClick={() => {
               return alert("홈으로 가시겠습니까?\n자동으로 로그아웃됩니다")
            }}> Home </Link>
         </div>

         <div className="date">{nowTime}</div>
         <div className="day">{nowDay}</div>
      </TodoHeadBlock>
   )
}

export default TodoHead