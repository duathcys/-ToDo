import {TodoHeadBlock, TodoTemplateBlock} from "../common";
import {FormControl, IconButton, InputLabel, ListItemIcon, Menu, MenuItem, Select} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Block, Checklist} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {deleteUser} from "../../API/user";
import TodoChangeInfo from "./TodoChangeInfo";
import TodoReport from "./TodoReport";

export default function TodoMypage() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [selection, setSelection] = useState('');

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
        deleteUser().then(
            Swal.fire('회원 탈퇴 완료', '회원 탈퇴가 되었습니다.', 'success')
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                }));
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
                            <MenuItem onClick={handleTodo}>
                                <ListItemIcon>
                                    <Checklist/>
                                </ListItemIcon>
                                TODO LIST 보기
                            </MenuItem>
                            <MenuItem onClick={handleDropOut}>
                                <ListItemIcon>
                                    <Block/>
                                </ListItemIcon>
                                회원 탈퇴
                            </MenuItem>
                        </Menu>
                    </div>
                    {localStorage.getItem("UserId")}님
                </div>
            </TodoHeadBlock>
            <FormControl sx={{m:3, width: 300}}>
                <InputLabel>메뉴 선택</InputLabel>
                <Select placeholder="메뉴 선택"
                        id="selection"
                        label="selection"
                        onChange={handleMenu}
                        value={selection}
                        defaultValue="report">
                    <MenuItem value="report">Today Report</MenuItem>
                    <MenuItem value="upInfo">닉네임 및 아바타 수정</MenuItem>
                    <MenuItem value="upPass">비밀번호 수정</MenuItem>
                </Select>
            </FormControl>
            {selection === "report" ? <TodoReport/> : <TodoChangeInfo/>}
        </TodoTemplateBlock>
    );

}