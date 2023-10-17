import { Card, Input, Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const Login = async (e) => {
        e.preventDefault();
        Axios.get("/sanctum/csrf-cookie").then(() => {
            Axios.post("/api/login", user)
                .then((response) => {
                    localStorage.setItem("archive-system", response.data.token);
                    navigate("/dashboard");
                })
                .catch((e) => {
                    console.log(e);
                });
        });
    };

    return (
        <Card color="transparent" shadow={false} className="">
            <form className="mt-8 mb-2  max-w-screen-lg  ">
                <div className="mb-4 flex flex-col gap-6  dark:text-white">
                    <Input
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        color={
                            localStorage.getItem("color-theme") === "dark"
                                ? "white"
                                : "gray"
                        }
                        size="lg"
                        label="Username"
                        className=" dark:text-white dark:fucos:text-white"
                    />
                    <Input
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        type="password"
                        color={
                            localStorage.getItem("color-theme") === "dark"
                                ? "white"
                                : "gray"
                        }
                        size="lg"
                        label="Password"
                        className=" dark:text-white dark:fucos:text-white"
                    />
                </div>

                <Button onClick={Login} className="mt-6" fullWidth>
                    Login
                </Button>
            </form>
        </Card>
    );
}
