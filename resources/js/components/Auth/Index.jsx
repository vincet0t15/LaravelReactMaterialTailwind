import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
} from "@material-tailwind/react";
import {
    BanknotesIcon,
    CreditCardIcon,
    LockClosedIcon,
} from "@heroicons/react/24/solid";

import Login from "./Login";
import Register from "./Register";

export default function AuthIndex() {

    const [type, setType] = React.useState({
        type: 'card',
        text: "Login your account"
    });

    console.log(type)

    return (
        <div className="h-screen  w-full flex items-center justify-center">
            <Card className="w-full max-w-[30rem]" >
                <CardHeader

                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                >
                    <div className="mb-4 rounded-full border border-dark/10 bg-dark/10 p-6 text-dark">
                        <BanknotesIcon className="h-10 w-10" />
                    </div>
                    <Typography variant="h4" color="black">
                        {type.text}
                    </Typography>
                </CardHeader>
                <CardBody>
                    <Tabs value={type.type} className="overflow-hidden">
                        <TabsHeader className="relative z-0 ">
                            <Tab value={type.type = "card"} onClick={() => setType({ type: 'card', text: 'Login your account' })}>
                                Login
                            </Tab>
                            <Tab value="paypal" onClick={() => setType({ type: 'paypal', text: 'Register your account' })}>
                                Register
                            </Tab>
                        </TabsHeader>
                        <TabsBody
                            className="overflow-hidden"
                            animate={{
                                initial: {
                                    x: type.type = "card" ? 400 : -400,
                                },
                                mount: {
                                    x: 0,
                                },
                                unmount: {
                                    x: type.type = "card" ? 400 : -400,
                                },
                            }}
                        >
                            <TabPanel value={type.card = 'card'} className="p-0 overflow-hidden">
                                <Login />
                            </TabPanel>

                            <TabPanel value={type.type = 'paypal'} className="p-0">
                                <Register />
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </CardBody>
            </Card >
        </div >
    );
}
