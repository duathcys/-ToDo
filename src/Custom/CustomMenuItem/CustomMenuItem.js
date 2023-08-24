import {ListItemIcon, MenuItem} from "@mui/material";
import {Block, Checklist, Home, Logout, Person} from "@mui/icons-material";
import React from "react";
import "./CustomMenuItem.css";
export default function CustomMenuItem({onClick, name}) {
    const iconByChoice = {
        MyPage: <Person fontSize="small"/>,
        LogOut: <Logout fontSize="small"/>,
        Home: <Home fontSize="small"/>,
        TodoList : <Checklist/>,
        회원탈퇴 : <Block/>,
        로그아웃: <Logout/>,
    }

    return (
        <MenuItem onClick={onClick}>
            <ListItemIcon>
                {iconByChoice[name] || null}
            </ListItemIcon>
            {name}
        </MenuItem>
    )
};