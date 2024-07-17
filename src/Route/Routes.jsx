import {
    createBrowserRouter
} from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home';
import Register from "../Users/Register";
import Login from "../Users/Login";
import AddItems from "../NavComp/AddItems";
import CraftDetails from "../HomeAssistent/CraftDetails";
import AllCrafts from "../NavComp/AllCrafts";
import ErrorPage from "../Error/ErrorPage";
import MyCrafts from "../NavComp/MyCrafts";
import PrivateRoute from "./PrivateRoute";
import UpdateCraft from "../HomeAssistent/UpdateCraft";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://arts-server-site-kmpyrbqoa-meherabs-projects-19544c30.vercel.app/crafts')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addcrafts',
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            },
            {
                path: '/craftdetails/:id',
                element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://arts-server-site-kmpyrbqoa-meherabs-projects-19544c30.vercel.app/crafts/${params.id}`)
            },
            {
                path: '/allcrafts',
                element: <PrivateRoute><AllCrafts></AllCrafts></PrivateRoute>,
                loader:()=> fetch('https://arts-server-site-kmpyrbqoa-meherabs-projects-19544c30.vercel.app/crafts')
            },
            {
                path: '/mycrafts',
                element: <PrivateRoute><MyCrafts></MyCrafts></PrivateRoute>,
                loader: ()=> fetch('https://arts-server-site-kmpyrbqoa-meherabs-projects-19544c30.vercel.app/crafts')
            },
            {
                path: '/updatecraft/:id',
                element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
                loader: ({params})=>fetch(`https://arts-server-site-kmpyrbqoa-meherabs-projects-19544c30.vercel.app/crafts/${params.id}`)
            }
        ]
    },
]);
export default router