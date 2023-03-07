import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem/TodoItem";
import history from "./TodoCheck";

const TodoListBlock = styled.div`
    padding: 20px 32px;
    padding-bottom: 225px;
    overflow-x: auto;
`;

const TodoSearch = styled.input`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;
`
const SearchButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
`
function TodoList() {

   const [search, setSearch]=useState('');
   const [locationKeys, setLocationKeys] = useState([]);

   useEffect(() => {
      return history.listen((location) => {
         if (history.action === "PUSH") {
            setLocationKeys([location.key]);
         }
         if (history.action === "POP") {
            setLocationKeys(([_, ...keys]) => keys);
            history.push(`/todo/list/?info=${localStorage.getItem('UserId')}`)
         } else {
            setLocationKeys((keys) => [location.key, ...keys]);
            history.push(`/todo/list/?info=${localStorage.getItem('UserId')}`)
         }
      })
   }, [locationKeys, history])
   return (
      <TodoListBlock>
         <TodoItem/>
      </TodoListBlock>
   );
}


export default TodoList;