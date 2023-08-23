import styled from "styled-components";

export const HomeForm = styled.form`
  width: 600px;
  height: 400px;
  background-color: #e3e1e1;
  background-image: url("/images/bg02.png");
  border-radius: 6px;
  box-shadow: 0 0 0.25em 0em rgba(0, 0, 0, 0.25);
  margin-top: 280px;
  margin-bottom: 0px;
  margin-inline: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;

  //h3 {
  //  font-size: 30px;
  //  align-content: center;
  //  justify-content: center;
  //  color: rgb(197, 173, 149);
  //}
`

export const HomeLogin=styled.button`
  width:30px;
  height:10px;
  background-color: black;
  &:active{
    background-color: white;
    border:none;
  }
`