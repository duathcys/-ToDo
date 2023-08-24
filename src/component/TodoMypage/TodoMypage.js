import {TodoHeadBlock, TodoTemplateBlock} from "../common";
import {FormControl, IconButton, InputLabel, ListItemIcon, Menu, MenuItem, Select} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Block, Checklist, Logout} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {deleteUser} from "../../API/user";
import TodoChangeInfo from "./TodoChangeInfo";
import TodoReport from "./TodoReport";
import TodoCategory from "./TodoCategory";
import CustomMenuItem from "../../Custom/CustomMenuItem/CustomMenuItem";

export default function TodoMypage() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [selection, setSelection] = useState('');
    const componentsBySelection = {
        report: <TodoReport/>,
        info: <TodoChangeInfo/>,
        category: <TodoCategory/>
    }

    const handleMenu = (e) => {
        setSelection(e.target.value);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleTodo = () => {
        navigate(`/todo/list/?info=${localStorage.getItem('UserId')}`)
    }
    const handleDropOut = () => {
        Swal.fire({
            title:'DROPOUT',
            text: '회원 탈퇴를 하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '확인'
        })
            .then((result)=>{
                if (result.isConfirmed) {
                    deleteUser().then(
                        Swal.fire('회원 탈퇴 완료', '회원 탈퇴가 되었습니다.', 'success')
                            .then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/');
                                }
                            }));
                }
            })
    };

    const handleLogOut = () => {
        Swal.fire({
            title: 'LOGOUT',
            text: '정말 로그아웃 하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '로그아웃'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear();
                    navigate("/user/login");
                }
            });
    };

    return (
        <TodoTemplateBlock>
            <TodoHeadBlock>
                <h1>
                    My Page
                </h1>
                <div className="detail">
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            id="menu"
                            onClose={handleClose}
                            onClick={handleClose}
                        >
                            <CustomMenuItem onClick={handleTodo} name="TodoList"/>
                            <CustomMenuItem onClick={handleDropOut} name="회원탈퇴"/>
                            <CustomMenuItem onClick={handleLogOut} name="로그아웃"/>
                        </Menu>
                    </div>
                    {localStorage.getItem("UserId")}님
                </div>
            </TodoHeadBlock>
            <FormControl sx={{m: 3, width: 300}}>
                <InputLabel style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>메뉴 선택</InputLabel>
                <Select placeholder="메뉴 선택"
                        id="selection"
                        label="selection"
                        onChange={handleMenu}
                        value={selection}
                        defaultValue="report">
                    <MenuItem value="report" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>Today Report</MenuItem>
                    <MenuItem value="info" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>회원정보 수정</MenuItem>
                    <MenuItem value="category" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>카테고리 편집</MenuItem>
                </Select>
            </FormControl>
            {componentsBySelection[selection] || null}
        </TodoTemplateBlock>
    );

}