/* eslint-disable @typescript-eslint/no-unused-vars */
import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';


interface props{
    children?:ReactElement;
    isAuthenticated:boolean;
    isAdmin?:boolean;
    adminRoute?:boolean;
    redirect?: string;

}

const ProtectedRoute = ({
    children,
    isAuthenticated,isAdmin,adminRoute,redirect="/",
  }:props) => {

    if(!isAuthenticated) return <Navigate to={redirect} />
  return children;
  }

export default ProtectedRoute
