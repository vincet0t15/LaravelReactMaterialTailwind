import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = () => {

    const token = localStorage.getItem("archive-system");
    let auth = { token: token };

    return auth.token ? <Outlet /> : <Navigate to="/login" />;
};


export default PrivateRoute;
