import {TodoHeadBlock, TodoTemplateBlock} from "../common";
import {Box, FormControl, IconButton, InputLabel, Menu, MenuItem, Select, Tab, Tabs} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {deleteUser} from "../../API/user";
import TodoChangeInfo from "./TodoChangeInfo";
import TodoReport from "./TodoReport";
import TodoCategory from "./TodoCategory";
import CustomMenuItem from "../../Custom/CustomMenuItem/CustomMenuItem";
import * as PropTypes from "prop-types";

function CustomTabPanel(props) {
    const {children, value, index} = props;
    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    value: PropTypes.number,
    children: PropTypes.node,
    index: PropTypes.number,
};
export default function TodoMypage() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [value, setValue] = useState(0);

    const handleMenu = (e, newValue) => {
        setValue(newValue);
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
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleMenu} centered>
                        <Tab label="Today Report"/>
                        <Tab label="회원정보 수정"/>
                        <Tab label="카테고리 편집"/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <TodoReport/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <TodoChangeInfo/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <TodoCategory/>
                </CustomTabPanel>
            </Box>
        </TodoTemplateBlock>
    );

}