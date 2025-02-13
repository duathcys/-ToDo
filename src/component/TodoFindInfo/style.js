import styled from "styled-components";

export const FindForm = styled.form`
  width: 600px;
  height: 400px;
  background: #e0dddd;
  margin-top: 280px;
  margin-bottom: 0px;
  margin-inline: auto;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h2 {
    text-align: center;
    font-size: 30px;
    color: #000000;
    margin-top: 0px;
  }
  //font-size:50px;
  //text-align: center;
`

export const TodoInputid = styled.input`
  width: 400px;
  height: 50px;
  background: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  font-size: 18px;
  margin: 10px;
  position: center;
`

export const TestDiv = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 150px;
`

export const SubmitButton = styled.div`
  width: auto;
  min-width: 100px;
  height: 30px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  font-size: 18px;
  margin-right: 30px;
  position: relative;
  margin-left: auto;
`