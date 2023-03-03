import {Navigate, Outlet} from "react-router-dom";

export const PublicRoute = () => {
   if(localStorage.getItem("UserId")) return <Navigate to={`/todo/list/?info=${localStorage.getItem("UserId")}`} />
   return (
      <Outlet />
   )

}