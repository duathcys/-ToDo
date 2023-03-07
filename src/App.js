import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createGlobalStyle} from 'styled-components';
import TodoLogin from "./component/TodoLogin/TodoLogin";
import Todo from "./component/Todo";
import TodoHome from "./component/TodoHome/TodoHome";
import {PublicRoute} from "./component/Routes/PublicRoute";
import TodoSignUp from "./component/TodoSignUp/TodoSignUp";

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;
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
