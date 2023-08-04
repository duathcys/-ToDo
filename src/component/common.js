import styled from "styled-components";

export const Title = styled.div`
  padding: 50px 32px 20px;
  margin: 10px;
  text-align: center;
  font-size: 40px;
  color: #000000;
`
export const TodoInputbox = styled.form`
  width: 600px;
  height: auto;
  min-height: 450px;
  background: #e0dddd;
  margin-top: 100px;
  //margin-bottom: 0px;
  margin-inline: auto;
  padding: 10px;
  
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
    padding: 10px;
    margin-top: 10px;
  }
`

export const TodoInput = styled.input`
  width: 400px;
  height: 50px;
  background: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  font-size: 18px;
  margin: 10px;
`

export const ConfirmButton = styled.button`
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
  margin-top: 10px;
  
`

export const Formdiv = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 150px;
`

export const TodoTemplateBlock = styled.div `
  width: 800px;
  height: 800px;

  position: relative;
  background: #e0dddd;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export const TodoHeadBlock = styled.div`
  padding: 20px 32px 20px;

  h1 {
    margin: 0px;
    text-align: center;
    font-size: 40px;
    color: #000000;
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
    padding-bottom: 225px;
    overflow-x: auto;
`;