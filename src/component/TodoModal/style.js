import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  //display: flex;
  top: 200px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  flex-direction: column;
  width: 685px;
  height: 512px;
  padding: 18px;
  background-color: white;
  border-radius: 8px;
  z-index: 2000;

  .exit-wrapper {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 32px;
    width: 32px;
    height: 32px;
    line-height: 26px;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Canvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 53;
`;

export const Wrapper = styled.div`
  background-color: transparent;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6495ed;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #6495ed;
  }

  &:active {
    color: rgba(100, 149, 237, 0.49);
  }

  //display: none;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 0px;
`;

export const MemoInput = styled.input`
  padding-left: 12px;
  padding-top: 72px;
  padding-bottom: 72px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  text-align: left;
  box-sizing: border-box;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  padding: 5px;
  align-items: center;
  justify-content: right;
  color: black;
  background: #e0dddd;
  outline: 1px solid #e0dddd;
  border-radius: 4px;
  border-color: #e0dddd;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: #5e5b5b;
  }

  &:active {
    color: #343131;
  }
`