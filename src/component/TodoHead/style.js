import styled from "styled-components";

export const TodoHeadBlock = styled.div`
  padding: 20px 32px;
  padding-bottom: 48px;

  h1 {
    margin: 0px;
    text-align: center;
    font-size: 40px;
    color: #000000;
  }

  .date {
    margin: 10px;
    font-size: 20px;
    text-align: right;
    color: black;
  }

  .day {
    margin: 10px;
    font-size: 20px;
    text-align: right;
    color: black;
  }
  .link{
    margin:10px;
    font-size:15px;
    text-align: right;
    font-weight: bold;
    display: flex;
    flex-flow: row;
    color: cadetblue;
  }
  .linkto{
    align-items: center;
    justify-content: right;
    display: flex;
  }
  .info{
    align-items: center;
    justify-content: right;
    display: flex;
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
`;