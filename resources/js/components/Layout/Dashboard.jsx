import React, { NavLink } from "react";
import SideBar from "./SideBar";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import {

    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import NavBar from "./NavBar";
export default function Dashboard() {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const TABLE_HEAD = ["Name", "Job", "Employed", ""];

    const TABLE_ROWS = [
        {
            name: "John Michael",
            job: "Manager",
            date: "23/04/18",
        },
        {
            name: "Alexa Liras",
            job: "Developer",
            date: "23/04/18",
        },
        {
            name: "Laurent Perrier",
            job: "Executive",
            date: "19/09/17",
        },
        {
            name: "Michael Levi",
            job: "Developer",
            date: "24/12/08",
        },
        {
            name: "Richard Gran",
            job: "Manager",
            date: "04/10/21",
        },
    ];
    return (
        <div>
            1
        </div>

    )
}
