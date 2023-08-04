import {TodoHeadBlock, TodoListBlock, TodoTemplateBlock} from "../common";
import {Divider, IconButton, Input, ListItemIcon, Menu, MenuItem, TextField} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {Text} from "../TodoItem/style";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Block, Checklist} from "@mui/icons-material";
import {useDeleteUserMutation} from "../../hooks/useDeleteUserMutation";

function TodoMypage(){
    const [category, setCategory] = useState("");
    const [newCat, setNewCat] = useState({name: "", priority: 0});
    const {isLoading, data} = useGetCategoryQuery();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {mutate: onCreateCategory, isLoading2} = useCreateCategoryMutation(newCat)
    const {mutate: onClickRemove} = useDeleteUserMutation();
    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget);
    }
    const handleClose =()=>{
        setAnchorEl(null);
    }

    const handleCategory = (e)=>{
        setCategory(e.target.value);
    }
    localStorage.setItem('categoryList', JSON.stringify(data?.data));
    const onCreate =()=>{
        onCreateCategory(newCat);
        localStorage.setItem('categoryList', JSON.stringify(data?.data));
        setCategory('');
        setNewCat({name: "", priority: 0});
    }

    // const onRemove = ()=>{
    //     onClickRemove()
    // }

    useEffect(()=>{
        setNewCat({name: category, priority: 0});
    })

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
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            id="menu"
                            onClose={handleClose}
                            onClick={handleClose}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <Checklist/>
                                </ListItemIcon>
                                    TODO LIST 보기
                            </MenuItem>
                            <MenuItem>
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
            <TodoListBlock>
                <h2>TODAY REPORT</h2>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <text>기한 일주일 미만</text>
                    <text>오늘 등록한 TODO</text>
                    <text>어제 등록한 TODO</text>
                </div>
                <Divider/>
                <h2>회원 정보 수정</h2>
                <div>
                    <TextField name="nickname"
                               defaultValue="example"
                               variant="standard"
                               label="Nickname"/>
                    <TextField disabled
                               name="userId"
                               defaultValue={localStorage.getItem("UserId")}
                               variant="standard"
                               label="ID"/>
                    <TextField name="password"
                               variant="standard"
                               label="Password"/>
                    <TextField name="password"
                               variant="standard"
                               label="PasswordConfirm"/>
                </div>
                <Divider/>
                <h2>카테고리 편집</h2>
                {data?.data.map((Cat, idx) => {
                    return (
                        <li key={idx}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Text>{Cat.name}</Text>
                                <Text>{Cat.priority}</Text>
                            </div>
                        </li>
                    )
                })}
                <TextField value={category} onChange={handleCategory}/>
                {/*<Select>*/}
                {/*    <Option value={category.prior}>0</Option>*/}
                {/*    <Option value={category.prior}>1</Option>*/}
                {/*    <Option value={category.prior}>2</Option>*/}
                {/*    <Option value={category.prior}>3</Option>*/}
                {/*    <Option value={category.prior}>4</Option>*/}
                {/*    <Option value={category.prior}>5</Option>*/}
                {/*</Select>*/}
                <button onClick={onCreate}>생성</button>
                <Divider/>
            </TodoListBlock>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        Total :*/}
            {/*        {localStorage.getItem("Total")} 개*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        Left :*/}
            {/*        {localStorage.getItem("Left")} 개*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        아바타 꾸미기*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </TodoTemplateBlock>
    );

}

export default TodoMypage;