import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Main'
import Dashboard from '../components/Layout/Dashboard'


import Login from '../components/Auth/Login'
export default function MyRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Layout />} >
                <Route exact path="dashboard" element={<Dashboard />} />
                <Route exact path="login" element={<Login />} />
            </Route>
        </Routes>
    )
}
