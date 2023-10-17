import React, { useEffect } from "react";
import MyRouter from "../Router/MyRouter";
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@material-tailwind/react";

export default function Main() {

    return (
        <div>
            <MyRouter></MyRouter>
        </div>
    )
}

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <Router>
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    </Router>
);

