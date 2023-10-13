import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Main'
import Dashboard from '../components/Layout/Dashboard'


import Login from '../components/Auth/Login'
import AuthIndex from '../components/Auth/Index'

export default function MyRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Layout />} >
                <Route exact path="dashboard" element={<Dashboard />} />
            </Route>

            {/* auth */}
            <Route exact path="/login" element={<AuthIndex />} >
                <Route exact path="login" element={<Login />} />
            </Route>
        </Routes>
    )
}
