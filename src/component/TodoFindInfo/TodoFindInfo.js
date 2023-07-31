import {getMyInfo} from "../../API/getMyInfoAPI";
import {FindForm, SubmitButton, TestDiv, TodoInputid} from "./style";
import React, {useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";


function TodoFindInfo() {
    const navigate = useNavigate();
    const [inputName, setInputName] = useState('');

    const handleInputName = (e) => {
        setInputName(e.target.value);
    }
    const handleClickGoHomeButton = () => {
        navigate('/');
    }
    const handleSubmit = () => {
        localStorage.setItem("nickname", inputName);
        getMyInfo()
    };

    return (

        <FindForm>
            <h2>FIND</h2>
            <IconButton onClick={handleClickGoHomeButton}>
                <HomeIcon/>
            </IconButton>
            <TestDiv>
                <h3>Nickname</h3>
                <TodoInputid
                    value={inputName}
                    onChange={handleInputName}
                    placeholder="닉네임을 입력하세요"/>
            </TestDiv>
            <SubmitButton onClick={handleSubmit}>확인</SubmitButton>
        </FindForm>

    )
        ;
}

export default TodoFindInfo;
