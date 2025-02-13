import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import reportWebVitals from "./reportWebVitals";
import {QueryCache, QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient({
   queryCache: new QueryCache({
      onError:(error, query)=>{
         console.log('onError', error);
      },
      onSuccess:(data)=>{
         console.log('onSuccess', data);
      }
   })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <QueryClientProvider client={queryClient}>
      <App/>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"}/>
   </QueryClientProvider>
   // <BrowserRouter>
   //     <App/>
   // </BrowserRouter>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
