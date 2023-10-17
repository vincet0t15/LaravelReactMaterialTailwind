import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SideBar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="sticky h-full overflow-y-auto rounded-none p-4 shadow-xl shadow-blue-gray-900/5 dark:bg-blue-gray-800">
            <div className="mb-2 p-4 ">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="dark:text-white"
                >
                    Sidebar
                </Typography>
            </div>
            <List>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="hover:bg-gray-100 dark:hover:bg-gray-700  dark:text-white border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="dark:text-white h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal dark:text-white "
                            >
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0 dark:text-white">
                            <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`dark:text-white mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem
                        className="dark:text-white p-0"
                        selected={open === 2}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="dark:hover:bg-gray-700 border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="dark:text-white h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="dark:text-white mr-auto font-normal"
                            >
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0 dark:text-white ">
                            <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                            <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Products
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                    <ListItemPrefix>
                        <InboxIcon className="dark:text-white h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip
                            value="14"
                            size="sm"
                            variant="ghost"
                            color="blue-gray"
                            className="dark:text-white rounded-full"
                        />
                    </ListItemSuffix>
                </ListItem>
                <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                    <ListItemPrefix>
                        <UserCircleIcon className="dark:text-white h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem className="dark:focus:bg-gray-600 dark:focus:text-black dark:hover:bg-gray-700 dark:text-white">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}
