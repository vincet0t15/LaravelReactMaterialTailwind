import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Main";
import Dashboard from "../components/Layout/Dashboard";

import Login from "../components/Auth/Login";
import AuthIndex from "../components/Auth/Index";
import PrivateRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

export default function MyRouter() {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<Layout />}>
                    <Route
                        exact
                        path="/"
                        element={<Navigate to="dashboard" />}
                    />
                    <Route exact path="dashboard" element={<Dashboard />} />
                </Route>
            </Route>

            {/* auth */}
            <Route element={<GuestRoute />}>
                <Route exact path="/login" element={<AuthIndex />}>
                    <Route exact path="login" element={<Login />} />
                </Route>
            </Route>
        </Routes>
    );
}
