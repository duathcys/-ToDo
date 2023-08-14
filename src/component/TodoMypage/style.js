import styled from "styled-components";

export const TodoMyPageBlock = styled.div `
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

export const TodoMypageHead = styled.div `
  h1 {
    padding-top: 10px;
    text-align: center;
    font-size: 40px;
    color: #000000;
  }

  h2 {
    padding: 10px;
    margin-right: 10px;
    font-size: 18px;
    text-align: right;
    color: #000000;
  }
`

const TodoListBlock = styled.div`
    padding: 20px 32px;
    padding-bottom: 225px;
    overflow-x: auto;
`;

export const TextBlock = styled.form`
  //display: flex;
  //flex-direction: column;
  border-radius: 5px;
  width: 500px;
  height: 300px;
  
  border: 1px solid grey;
  padding: 10px;
  margin-bottom: 15px;

  h4 {
    font-size: 20px;
    font-weight: bold;
  }
;
`
