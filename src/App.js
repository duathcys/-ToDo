import React, {useCallback} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//import RestAPI from "./RestAPI.js";
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList';
import TodoHead from './component/TodoHead';
import TodoCreate from './component/TodoCreate';
import TodoLogin from "./component/TodoLogin";
import Todo from "./component/Todo";
import TodoHome from "./component/TodoHome";
import TodoSignUp from "./component/TodoSignUp";
// import {RQpostData} from "./posttest";
//import Users from './Users';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;
// let handleCreate;
// handleCreate = (data)=>{
//     const{TodoList}=this.state;
//     this.setState({
//         TodoList:TodoList.concat({
//             id:this.id++,
//             ...data,
//         }),
//     });
// };



function App() {
  return (
     <>
       <GlobalStyle/>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<TodoHome/>}/>
           <Route path="/user/login" element={<TodoLogin />}/>
           <Route path="/user/signup" element={<TodoSignUp />}/>
           <Route path="/todo/list" element={<Todo />}/>
         </Routes>
       </BrowserRouter>
     </>
  );
}

export default App;
