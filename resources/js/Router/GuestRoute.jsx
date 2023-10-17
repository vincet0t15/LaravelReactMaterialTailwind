import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";



const GuestRoute = () => {

    const token = localStorage.getItem("archive-system");
    let auth = { token: token };

    return auth.token ? <Navigate to="/dashboard" /> : <Outlet />;

};

export default GuestRoute;
