import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import RestAPI from "./RestAPI.js";
import {createGlobalStyle} from 'styled-components';
import TodoLogin from "./component/TodoLogin/TodoLogin";
import Todo from "./component/Todo";
import TodoHome from "./component/TodoHome/TodoHome";
import {PublicRoute} from "./component/Routes/PublicRoute";
import TodoSignUp from "./component/TodoSignUp/TodoSignUp";
// import {RQpostData} from "./posttest";
//import Users from './Users';m

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
            <Route element={<PublicRoute />}>
               <Route path="/user/login" element={<TodoLogin />}/>
               <Route path="/user/signup" element={<TodoSignUp />}/>
            </Route>
           <Route path="/todo/list" element={<Todo />}/>
         </Routes>
       </BrowserRouter>
     </>
  );
}

export default App;
