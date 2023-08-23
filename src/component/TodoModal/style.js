import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 200px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  flex-direction: column;
  width: 685px;
  height: 512px;
  padding: 18px;
  background-color: #fff;
  background-image: url("/images/bg02.png");
  box-shadow: 0 0 0.25em 0em rgba(0, 0, 0, 0.5);
  border-radius: 6px;
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

  h3 {
    padding: 12px 0 12px 0;
    margin: 0;
    display: flex;
    justify-content: left;
    align-content: center;

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
  color: rgba(100, 149, 237, 0.5);
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #6495ed;
  }

  &:active {
    color: rgba(100, 149, 237, 0.49);
  }
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgba(222, 226, 230, 1);
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 0;
  margin-top: 5px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  font-family: HakgyoansimWoojuR, sans-serif;
`;

export const MemoInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgba(222, 226, 230, 1);
  width: 100%;
  outline: none;
  font-size: 18px;
  text-align: left;
  box-sizing: border-box;
  margin-top: 5px;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const Button = styled.button`
  //padding: 5px;
  //display: flex;
  //display: inline-block;
  align-items: center;
  justify-content: center;
  background: #fff;
  //color: black;
  //background: #e0dddd;
  outline: none;
  border-radius: 4px;
  border-color: #fff;
  box-shadow: #fff;
  font-size: 15px;
  cursor: pointer;
`