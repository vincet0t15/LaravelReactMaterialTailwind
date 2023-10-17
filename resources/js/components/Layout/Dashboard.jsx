import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Dashboard() {
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
        <div className="grid grid-cols mt-14">
            {/* TABLE */}
            <div className="grid grid-cols-3 mt-5 place-items-center">
                <Card className="mt-6 w-96 dark:bg-blue-gray-800 mr-2">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody className="dark:text-white text-blue-gray-900">
                        <Typography
                            variant="h5"
                            className="mb-2 dark:text-white text-blue-gray-900"
                        >
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop
                            just 2 min by walk and near to &quot;Naviglio&quot;
                            where you can enjoy the main night life in
                            Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 w-96 dark:bg-blue-gray-800 mr-2">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody className="dark:text-white text-blue-gray-900">
                        <Typography
                            variant="h5"
                            className="mb-2 dark:text-white text-blue-gray-900"
                        >
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop
                            just 2 min by walk and near to &quot;Naviglio&quot;
                            where you can enjoy the main night life in
                            Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 w-96 dark:bg-blue-gray-800 ">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody className="dark:text-white text-blue-gray-900">
                        <Typography
                            variant="h5"
                            className="mb-2 dark:text-white text-blue-gray-900"
                        >
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop
                            just 2 min by walk and near to &quot;Naviglio&quot;
                            where you can enjoy the main night life in
                            Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
            </div>

            {/* CARD WITH IMAGE */}
            <div class="grid grid-cols-4 md:grid-cols-1 sm:grid-cols-1">
                <Card className="mt-6 w-96 w-full dark:bg-blue-gray-800 dark:text-white text-blue-gray-900">
                    <CardBody>
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-2 dark:text-white"
                        >
                            UI/UX Review Check
                        </Typography>
                        <table className="w-full min-w-max table-auto text-left dark:text-white">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 dark:bg-blue-gray-900"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70 dark:text-white "
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {TABLE_ROWS.map(
                                    ({ name, job, date }, index) => {
                                        const isLast =
                                            index === TABLE_ROWS.length - 1;
                                        const classes = isLast
                                            ? "p-4 dark:text-white"
                                            : "p-4 border-b border-blue-gray-50 dark:text-white";

                                        return (
                                            <tr
                                                key={name}
                                                className="dark:text-white"
                                            >
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal dark:text-white"
                                                    >
                                                        {name}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal dark:text-white"
                                                    >
                                                        {job}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal dark:text-white"
                                                    >
                                                        {date}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-medium dark:text-white"
                                                    >
                                                        Edit
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-3 mt-5 place-items-center">
                <Card className="mt-6 w-96 dark:bg-blue-gray-800 dark:text-white mr-2">
                    <CardBody>
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-2 dark:text-white"
                        >
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop
                            just 2 min by walk and near to &quot;Naviglio&quot;
                            where you can enjoy the main night life in
                            Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 w-96 dark:bg-blue-gray-800 dark:text-white mr-2">
                    <CardBody>
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-2 dark:text-white"
                        >
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop
                            just 2 min by walk and near to &quot;Naviglio&quot;
                            where you can enjoy the main night life in
                            Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 w-96 dark:bg-blue-gray-800 dark:text-white mr-2">
                    <CardBody>
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-2 dark:text-white"
                        >
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop
                            just 2 min by walk and near to &quot;Naviglio&quot;
                            where you can enjoy the main night life in
                            Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
        // <div className="dark:white-text mt-14 flex-1">
        //     <div className="grid grid-cols-4">
        //         <div className="bg-red-300">
        //             <h5>1</h5>
        //         </div>

        //         <div className="bg-blue-300">
        //             <h5>2</h5>
        //         </div>

        //         <div className="bg-green-300">
        //             <h5>3</h5>
        //         </div>

        //         <div className="bg-orange-300">
        //             <h5>4</h5>
        //         </div>

        //         <div className="bg-teal-300">
        //             <h5>5</h5>
        //         </div>

        //         <div className="bg-yellow-300">
        //             <h5>6</h5>
        //         </div>

        //         <div className="bg-slate-300">
        //             <h5>7</h5>
        //         </div>

        //         <div className="bg-pink-300">
        //             <h5>8</h5>
        //         </div>

        //         <div className="bg-violet-300">
        //             <h5>9</h5>
        //         </div>

        //         <div className="bg-amber-300">
        //             <h5>10</h5>
        //         </div>

        //         <div className="bg-cyan-300">
        //             <h5>11</h5>
        //         </div>

        //         <div className="bg-fuchsia-300">
        //             <h5>12</h5>
        //         </div>
        //     </div>
        //     <div className="grid grid-cols-3 gap-4 ">
        //         <div>
        //             <Card className="mt-6 w-96 dark:bg-blue-gray-800">
        //                 <CardHeader color="blue-gray" className="relative h-56">
        //                     <img
        //                         src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        //                         alt="card-image"
        //                     />
        //                 </CardHeader>
        //                 <CardBody className="dark:text-white text-blue-gray-900">
        //                     <Typography
        //                         variant="h5"
        //                         className="mb-2 dark:text-white text-blue-gray-900"
        //                     >
        //                         UI/UX Review Check
        //                     </Typography>
        //                     <Typography>
        //                         The place is close to Barceloneta Beach and bus
        //                         stop just 2 min by walk and near to
        //                         &quot;Naviglio&quot; where you can enjoy the
        //                         main night life in Barcelona.
        //                     </Typography>
        //                 </CardBody>
        //                 <CardFooter className="pt-0">
        //                     <Button>Read More</Button>
        //                 </CardFooter>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card className="mt-6 w-96 dark:bg-blue-gray-800">
        //                 <CardHeader color="blue-gray" className="relative h-56">
        //                     <img
        //                         src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        //                         alt="card-image"
        //                     />
        //                 </CardHeader>
        //                 <CardBody className="dark:text-white text-blue-gray-900">
        //                     <Typography
        //                         variant="h5"
        //                         className="mb-2 dark:text-white text-blue-gray-900"
        //                     >
        //                         UI/UX Review Check
        //                     </Typography>
        //                     <Typography>
        //                         The place is close to Barceloneta Beach and bus
        //                         stop just 2 min by walk and near to
        //                         &quot;Naviglio&quot; where you can enjoy the
        //                         main night life in Barcelona.
        //                     </Typography>
        //                 </CardBody>
        //                 <CardFooter className="pt-0">
        //                     <Button>Read More</Button>
        //                 </CardFooter>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card className="mt-6 w-96 dark:bg-blue-gray-800">
        //                 <CardHeader color="blue-gray" className="relative h-56">
        //                     <img
        //                         src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        //                         alt="card-image"
        //                     />
        //                 </CardHeader>
        //                 <CardBody className="dark:text-white text-blue-gray-900">
        //                     <Typography
        //                         variant="h5"
        //                         className="mb-2 dark:text-white text-blue-gray-900"
        //                     >
        //                         UI/UX Review Check
        //                     </Typography>
        //                     <Typography>
        //                         The place is close to Barceloneta Beach and bus
        //                         stop just 2 min by walk and near to
        //                         &quot;Naviglio&quot; where you can enjoy the
        //                         main night life in Barcelona.
        //                     </Typography>
        //                 </CardBody>
        //                 <CardFooter className="pt-0">
        //                     <Button>Read More</Button>
        //                 </CardFooter>
        //             </Card>
        //         </div>

        //         <div className="col-start-1 col-end-7">
        //             <Card className="mt-6 w-96 w-full dark:bg-blue-gray-800 dark:text-white text-blue-gray-900">
        //                 <CardBody>
        //                     <Typography
        //                         variant="h5"
        //                         color="blue-gray"
        //                         className="mb-2 dark:text-white"
        //                     >
        //                         UI/UX Review Check
        //                     </Typography>
        //                     <table className="w-full min-w-max table-auto text-left dark:text-white">
        //                         <thead>
        //                             <tr>
        //                                 {TABLE_HEAD.map((head) => (
        //                                     <th
        //                                         key={head}
        //                                         className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 dark:bg-blue-gray-900"
        //                                     >
        //                                         <Typography
        //                                             variant="small"
        //                                             color="blue-gray"
        //                                             className="font-normal leading-none opacity-70 dark:text-white "
        //                                         >
        //                                             {head}
        //                                         </Typography>
        //                                     </th>
        //                                 ))}
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {TABLE_ROWS.map(
        //                                 ({ name, job, date }, index) => {
        //                                     const isLast =
        //                                         index === TABLE_ROWS.length - 1;
        //                                     const classes = isLast
        //                                         ? "p-4 dark:text-white"
        //                                         : "p-4 border-b border-blue-gray-50 dark:text-white";

        //                                     return (
        //                                         <tr
        //                                             key={name}
        //                                             className="dark:text-white"
        //                                         >
        //                                             <td className={classes}>
        //                                                 <Typography
        //                                                     variant="small"
        //                                                     color="blue-gray"
        //                                                     className="font-normal dark:text-white"
        //                                                 >
        //                                                     {name}
        //                                                 </Typography>
        //                                             </td>
        //                                             <td className={classes}>
        //                                                 <Typography
        //                                                     variant="small"
        //                                                     color="blue-gray"
        //                                                     className="font-normal dark:text-white"
        //                                                 >
        //                                                     {job}
        //                                                 </Typography>
        //                                             </td>
        //                                             <td className={classes}>
        //                                                 <Typography
        //                                                     variant="small"
        //                                                     color="blue-gray"
        //                                                     className="font-normal dark:text-white"
        //                                                 >
        //                                                     {date}
        //                                                 </Typography>
        //                                             </td>
        //                                             <td className={classes}>
        //                                                 <Typography
        //                                                     as="a"
        //                                                     href="#"
        //                                                     variant="small"
        //                                                     color="blue-gray"
        //                                                     className="font-medium dark:text-white"
        //                                                 >
        //                                                     Edit
        //                                                 </Typography>
        //                                             </td>
        //                                         </tr>
        //                                     );
        //                                 }
        //                             )}
        //                         </tbody>
        //                     </table>
        //                 </CardBody>
        //                 <CardFooter className="pt-0">
        //                     <Button>Read More</Button>
        //                 </CardFooter>
        //             </Card>
        //         </div>
        //     </div>

        //     <div className="col-start-1 col-end-7">
        //         <Card className="mt-6 w-96 w-full dark:bg-blue-gray-800 dark:text-white text-blue-gray-900">
        //             <CardBody>
        //                 <Typography
        //                     variant="h5"
        //                     color="blue-gray"
        //                     className="mb-2 dark:text-white"
        //                 >
        //                     UI/UX Review Check
        //                 </Typography>
        //                 <table className="w-full min-w-max table-auto text-left dark:text-white">
        //                     <thead>
        //                         <tr>
        //                             {TABLE_HEAD.map((head) => (
        //                                 <th
        //                                     key={head}
        //                                     className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 dark:bg-blue-gray-900"
        //                                 >
        //                                     <Typography
        //                                         variant="small"
        //                                         color="blue-gray"
        //                                         className="font-normal leading-none opacity-70 dark:text-white "
        //                                     >
        //                                         {head}
        //                                     </Typography>
        //                                 </th>
        //                             ))}
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {TABLE_ROWS.map(
        //                             ({ name, job, date }, index) => {
        //                                 const isLast =
        //                                     index === TABLE_ROWS.length - 1;
        //                                 const classes = isLast
        //                                     ? "p-4 dark:text-white"
        //                                     : "p-4 border-b border-blue-gray-50 dark:text-white";

        //                                 return (
        //                                     <tr
        //                                         key={name}
        //                                         className="dark:text-white"
        //                                     >
        //                                         <td className={classes}>
        //                                             <Typography
        //                                                 variant="small"
        //                                                 color="blue-gray"
        //                                                 className="font-normal dark:text-white"
        //                                             >
        //                                                 {name}
        //                                             </Typography>
        //                                         </td>
        //                                         <td className={classes}>
        //                                             <Typography
        //                                                 variant="small"
        //                                                 color="blue-gray"
        //                                                 className="font-normal dark:text-white"
        //                                             >
        //                                                 {job}
        //                                             </Typography>
        //                                         </td>
        //                                         <td className={classes}>
        //                                             <Typography
        //                                                 variant="small"
        //                                                 color="blue-gray"
        //                                                 className="font-normal dark:text-white"
        //                                             >
        //                                                 {date}
        //                                             </Typography>
        //                                         </td>
        //                                         <td className={classes}>
        //                                             <Typography
        //                                                 as="a"
        //                                                 href="#"
        //                                                 variant="small"
        //                                                 color="blue-gray"
        //                                                 className="font-medium dark:text-white"
        //                                             >
        //                                                 Edit
        //                                             </Typography>
        //                                         </td>
        //                                     </tr>
        //                                 );
        //                             }
        //                         )}
        //                     </tbody>
        //                 </table>
        //             </CardBody>
        //             <CardFooter className="pt-0">
        //                 <Button>Read More</Button>
        //             </CardFooter>
        //         </Card>
        //     </div>

        //     <div className="grid grid-flow-col auto-cols-max">
        //         <div>
        //             <Card className="mt-6 w-96 dark:bg-blue-gray-800 dark:text-white mr-2">
        //                 <CardBody>
        //                     <Typography
        //                         variant="h5"
        //                         color="blue-gray"
        //                         className="mb-2 dark:text-white"
        //                     >
        //                         UI/UX Review Check
        //                     </Typography>
        //                     <Typography>
        //                         The place is close to Barceloneta Beach and bus
        //                         stop just 2 min by walk and near to
        //                         &quot;Naviglio&quot; where you can enjoy the
        //                         main night life in Barcelona.
        //                     </Typography>
        //                 </CardBody>
        //                 <CardFooter className="pt-0">
        //                     <Button>Read More</Button>
        //                 </CardFooter>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card className="mt-6 w-96 dark:bg-blue-gray-800 dark:text-white mr-2">
        //                 <CardBody>
        //                     <Typography
        //                         variant="h5"
        //                         color="blue-gray"
        //                         className="mb-2 dark:text-white"
        //                     >
        //                         UI/UX Review Check
        //                     </Typography>
        //                     <Typography>
        //                         The place is close to Barceloneta Beach and bus
        //                         stop just 2 min by walk and near to
        //                         &quot;Naviglio&quot; where you can enjoy the
        //                         main night life in Barcelona.
        //                     </Typography>
        //                 </CardBody>
        //                 <CardFooter className="pt-0">
        //                     <Button>Read More</Button>
        //                 </CardFooter>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card className="mt-6 w-96 dark:bg-blue-gray-800 dark:text-white mr-2">
        //                 <CardBody>
        //                     <Typography
        //                         variant="h5"
        //                         color="blue-gray"
        //                         className="mb-2 dark:text-white"
        //                     >
        //                         UI/UX Review Check
        //                     </Typography>
        //                     <Typography>
        //                         The place is close to Barceloneta Beach and bus
        //                         stop just 2 min by walk and near to
        //                         &quot;Naviglio&quot; where you can enjoy the
        //                         main night life in Barcelona.
        //                     </Typography>
        //                 </CardBody>
        //                 <CardFooter className="pt-0">
        //                     <Button>Read More</Button>
        //                 </CardFooter>
        //             </Card>
        //         </div>
        //     </div>
        // </div>
    );
}
