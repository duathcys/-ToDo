import styled, {css} from "styled-components";

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }

  &:active {
    color: crimson;
  }

  display: none;
`;

export const Change = styled.div`
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

export const BIGBlock = styled.div`
  display: flex;
  flex-direction: column;
  //border: 2px solid blue;
`

export const TodoItemBlock = styled.div`
  display: flex;
  //align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: row;
  //border: 1px solid black;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

export const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
   props.done &&
   css`
            border: 1px solid #ff0000;
            color: #ff0000;
          `}
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #495057;
  ${props =>
   props.done &&
   css`
            color: #000000;
          `}
`;