import React, { useState } from 'react';
import moment from "moment";
import 'moment/locale/ko';
import { useNavigate } from "react-router-dom";
import { TodoHeadBlock } from "./style";
import Swal from "sweetalert2";
import {
   Avatar, Checkbox,
   FormControlLabel,
   FormGroup,
   FormLabel,
   Icon,
   IconButton,
   Menu,
   MenuItem,
   TextField
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from "@mui/icons-material/Search";

const nowTime = moment().format('YYYY년 MM월 DD일');
let today = moment();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let nowDay = week[today.day()];

function TodoHead() {
const navigate = useNavigate();
const [click, setClick] = useState();
const open = Boolean(click);
const [searchTerm, setSearchTerm] = useState();
const [opened, setOpened] = useState(false);
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

   const handleClick=(e)=>{
      setClick(e.currentTarget)
      console.log(open, 'open')
   }
   const handleClose=(e)=>{
      setClick(false)
   }
   const handleInputChange=(e)=>{
      setSearchTerm(e.target.value);
      console.log(searchTerm);
   }

   const handleOpen=(e)=>{
      setOpened(!opened);
   }

   const handleMyPage= (e)=>{
      navigate(`/user/mypage`);
   }

   return (
      <TodoHeadBlock>
         <h1>To Do List</h1>
         <div className="date">{nowTime}</div>
         <div className="day">{nowDay}</div>
         <div className="linkto">
            <IconButton
               onClick={handleClick}
               aria-controls={click ? 'menu' : undefined}
               aria-haspopup="true"
               aria-expanded={click ? 'true' : undefined}>
               <Avatar
                  sx={{bgcolor: '#e1bee7'}}>
                  {localStorage.getItem("UserId").charAt(0)}
               </Avatar>
            </IconButton>
            <Menu
               open={open}
               id="menu">
               <MenuItem onClick={handleClose}>
                  {localStorage.getItem("UserId")}님
               </MenuItem>
               <MenuItem onClick={handleMyPage}>
                  마이페이지
               </MenuItem>
               <MenuItem>
                  Total: {localStorage.getItem("Total")}개
               </MenuItem>
               <MenuItem>
                  Left: {localStorage.getItem("Left")}개
               </MenuItem>
            </Menu>
            <IconButton onClick={onClickLogoutBtn}>
               <LogoutIcon/>
               <text className="text">LOGOUT</text>
            </IconButton>
            <IconButton onClick={onClickHomeBtn}>
               <HomeIcon/>
               <text className="text">HOME</text>
            </IconButton>
         </div>
      </TodoHeadBlock>

   );
}

export default TodoHead