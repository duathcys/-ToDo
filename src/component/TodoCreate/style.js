import styled, {css} from "styled-components";

export const CircleButton = styled.button`
  background: #38d9a9;

  &:hover {
    background: #63e6be;
  }

  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: fixed;
  left: 50%;
  bottom: 7.5%;
  transform: translate(-50%, 50%);
  color: white;
  border: none;
  outline: none;
  display: flex;
  align-items: center;  
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
   props.open &&
   css`
            background: #ff6b6b;

            &:hover {
              background: #ff8787;
            }

            &:active {
              background: #fa5252;
            }

            transform: translate(-50%, 50%) rotate(45deg);
          `}
`;

export const InsertFormPositioner = styled.div`
  z-index: 4;
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

export const InsertForm = styled.form`

  background: #f8f9fa;
  padding: 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;

  h1 {
    text-align: center;
    font-size: 25px;
    color: #000000;
  }

  h2 {
    text-align: left;
    font-size: 20px;
    color: #000000;
  }
`;

export const CreateInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgba(222, 226, 230, 1);
  width: 500px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  font-family: HakgyoansimWoojuR, sans-serif;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const InputArea = styled.textarea`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const CreateButton = styled.button`
  background: #e0dddd;

  &:hover {
    color: #5e5b5b;
  }

  &:active {
    color: #343131;
  }

  color: black;
  outline: 1px solid #e0dddd;
  border-radius: 4px;
  border: 1px solid #e0dddd;
  cursor: pointer;
  width: 50px;
  height: 32px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`