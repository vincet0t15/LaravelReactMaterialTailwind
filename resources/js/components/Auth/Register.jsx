import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Register() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        e.persist();
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const createUser = async () => {
        Axios.post("/api/register", user)
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <Card color="transparent" shadow={false}>
            <form className="mt-8 mb-2  max-w-screen-lg ">
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        size="lg"
                        label="Name"
                        color={
                            localStorage.getItem("color-theme") === "dark"
                                ? "white"
                                : "gray"
                        }
                        className=" dark:text-white dark:fucos:text-white  "
                    />
                    <Input
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        size="lg"
                        label="Username"
                        color={
                            localStorage.getItem("color-theme") === "dark"
                                ? "white"
                                : "gray"
                        }
                        className=" dark:text-white dark:fucos:text-white  "
                    />
                    <Input
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        type="password"
                        size="lg"
                        label="Password"
                        color={
                            localStorage.getItem("color-theme") === "dark"
                                ? "white"
                                : "gray"
                        }
                        className=" dark:text-white dark:fucos:text-white  "
                    />
                    <Input
                        name="password_confirmation"
                        value={user.password_confirmation}
                        onChange={handleChange}
                        type="password"
                        size="lg"
                        label="Confirm-Password"
                        color={
                            localStorage.getItem("color-theme") === "dark"
                                ? "white"
                                : "gray"
                        }
                        className=" dark:text-white dark:fucos:text-white  "
                    />
                </div>

                <Button className="mt-6" fullWidth onClick={createUser}>
                    Register
                </Button>
            </form>
        </Card>
    );
}
