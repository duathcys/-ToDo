import React, {useState} from 'react';
import moment from "moment";
import 'moment/locale/ko';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Avatar, Box, Divider, IconButton, Menu, MenuItem} from "@mui/material";
import {TodoHeadBlock} from "../common";
import CustomMenuItem from "../../Custom/CustomMenuItem/CustomMenuItem";

const nowTime = moment().format('YYYY년 MM월 DD일');
let today = moment();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let nowDay = week[today.day()];

function TodoHead() {
   const navigate = useNavigate();
   const [anchorEl, setanchorEl] = useState(null);
   const open = Boolean(anchorEl);
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
      Swal.fire({title:'HOME', text:'홈으로 가시겠습니까? 자동으로 로그아웃됩니다', icon:"question", showCancelButton:true, confirmButtonText:'홈'})
         .then((result)=>{
            if(result.isConfirmed){
               localStorage.clear();
               navigate('/');
            }
         })
   }

   const handleClick=(e)=>{
      setanchorEl(e.currentTarget);
   }
   const handleClose=(e)=>{
      setanchorEl(null)
   }
   const handleMyPage= (e)=>{
      navigate(`/user/mypage`);
   }

    return (
        <TodoHeadBlock>
            <h1>TODO LIST</h1>
            <div className="detail">{nowTime}</div>
            <div className="detail">{nowDay}</div>
            <div className="linkto">
                <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                    <IconButton
                        onClick={handleClick}
                        sx={{ml: 2}}
                        aria-controls={open ? 'menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>
                        <Avatar
                            sx={{bgcolor: '#e1bee7'}}>
                            {localStorage.getItem("UserId").charAt(0)}
                        </Avatar>
                    </IconButton>
                </Box>
                <Menu anchorEl={anchorEl}
                      open={open}
                      id="menu"
                      onClose={handleClose}
                      onClick={handleClose}>
                    <MenuItem style={{fontWeight: "bold", fontFamily: "HakgyoansimWoojuR, sans-serif"}}>
                        {localStorage.getItem("UserId")}님
                    </MenuItem>
                    <Divider/>
                    <CustomMenuItem onClick={handleMyPage} name="MyPage"/>
                    <CustomMenuItem onClick={onClickLogoutBtn} name="LogOut"/>
                    <CustomMenuItem onClick={onClickHomeBtn} name="Home"/>
                </Menu>
            </div>
        </TodoHeadBlock>

    );
}

export default TodoHead