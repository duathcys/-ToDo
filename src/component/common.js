import styled from "styled-components";

export const Title = styled.div`
  padding: 50px 32px 20px;
  margin: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  color: #232324;
`
export const TodoInputbox = styled.form`
  width: 600px;
  height: auto;
  min-height: 450px;
  background-color: #e3e1e1;
  background-image: url("/images/bg02.png");
  border-radius: 6px;
  box-shadow: 0 0 0.25em 0em rgba(0, 0, 0, 0.25);
  margin-top: 100px;
  margin-inline: auto;
  padding: 10px;
  

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h2 {
    text-align: center;
    font-size: 30px;
    color: #000000;
    padding: 10px;
    margin-top: 10px;
  }
`

export const TodoInput = styled.input`
  width: 400px;
  height: 50px;
  background: white;
  border-radius: 6px;
  border: none;
  box-shadow: 0 0 0.25em 0em rgba(0, 0, 0, 0.25);
  font-size: 18px;
  margin: 10px;
  &:active {
    border-inline: none;
  }
`

export const ConfirmButton = styled.button`
  width: auto;
  min-width: 80px;
  height: 30px;
  cursor: pointer;
  background: white;
  border-radius: 6px;
  border: none;
  box-shadow: 0 0 0.25em 0em rgba(0, 0, 0, 0.25);
  font-size: 18px;
  margin-right: 30px;
  position: relative;
  margin-left: auto;
  margin-top: 10px;
  
`

export const Formdiv = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 150px;
`

export const TodoTemplateBlock = styled.div `
  width: 1500px;
  height: 870px;

  position: relative;
  //background-color: #fff;
  background-color: #e3e1e1;
  background-image: url("/images/bg02.png");
  border-radius: 6px;
  box-shadow: 0 0 0.25em 0em rgba(0, 0, 0, 0.25);

  margin: 32px auto;
  display: flex;
  flex-direction: column;
`;

export const TodoHeadBlock = styled.div`
  padding: 20px 32px 20px;

  h1 {
    margin: 20px 0;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.94);
  }

  .detail {
    margin: 10px;
    font-size: 20px;
    text-align: right;
    color: black;
  }

  .link {
    margin: 10px;
    font-size: 15px;
    text-align: right;
    font-weight: bold;
    display: flex;
    flex-flow: row;
    color: cadetblue;
  }

  .linkto {
    align-items: center;
    justify-content: right;
    display: flex;
  }

  .info {
    align-items: center;
    justify-content: right;
    display: flex;
    font-size: 20px;
    color: black;
    font-weight: bold;
  }

  .text {
    font-size: 11px;
    font-weight: bold;
  }
`;

export const TodoListBlock = styled.div`
    padding: 20px 32px;
    overflow-x: auto;
  h2 {
    text-align: center;
  }
`;