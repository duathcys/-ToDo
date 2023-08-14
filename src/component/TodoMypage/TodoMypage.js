import {TodoHeadBlock, TodoListBlock, TodoTemplateBlock} from "../common";
import {Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, TextField} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {Text} from "../TodoItem/style";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Block, Checklist} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {deleteUser} from "../../API/user";
import {ReportBlock, TextBlock, textBlock} from "./style";

function TodoMypage() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("");
    const [newCat, setNewCat] = useState({name: "", priority: 0});
    const {isLoading, data} = useGetCategoryQuery();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {mutate: onCreateCategory, isLoading2} = useCreateCategoryMutation(newCat);

    const categoryList = JSON.parse(localStorage.getItem('categoryList'))
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const onCreate = () => {
        categoryList.push(newCat);
        JSON.stringify(categoryList);
        onCreateCategory(newCat);
        setCategory('');
        setNewCat({name: "", priority: 0});
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

    const handleUpdateInfo = ()=>{

    }

    useEffect(() => {
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
            <TodoListBlock>
                <div style={{display:"flex", flexDirection: "row"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <h2>TODAY REPORT</h2>
                        <TextBlock>
                            <h4>기한 일주일 미만 : </h4>
                            <h4>오늘 등록한 TODO : {localStorage.getItem('Today')} (개)</h4>
                            <h4>어제 등록한 TODO : </h4>
                            <h4>총 TODO : {localStorage.getItem('Total')} (개)</h4>
                            <h4>남은 TODO : {localStorage.getItem('Left')} (개)</h4>
                        </TextBlock>
                    </div>
                    <Divider/>
                    <div>
                        <h2>회원 정보 수정</h2>
                        <TextBlock style={{display:"flex", flexDirection:"column"}}>
                            <TextField name="nickname"
                                       defaultValue="example"
                                       variant="standard"
                                       label="Nickname"
                                       style={{width:"200px", margin:"10px"}}/>
                            <TextField disabled
                                       name="userId"
                                       defaultValue={localStorage.getItem("UserId")}
                                       variant="standard"
                                       label="ID"
                                       style={{width:"200px", margin:"10px"}}/>
                            <TextField name="password"
                                       variant="standard"
                                       label="Password"
                                       style={{width:"200px", margin:"10px"}}/>
                            <TextField name="password"
                                       variant="standard"
                                       label="PasswordConfirm"
                                       style={{width:"200px", margin:"10px"}}/>
                            <Button style={{width: "150px"}} onClick={handleUpdateInfo}>저 장</Button>
                        </TextBlock>
                    </div>
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
                <TextField value={category} onChange={handleCategory} variant="standard"/>
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
        </TodoTemplateBlock>
    );

}

export default TodoMypage;