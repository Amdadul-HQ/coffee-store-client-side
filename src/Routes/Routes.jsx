import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import EditCoffee from "../Pages/EditCoffee/EditCoffee";
import Viewcoffeedetails from "../Pages/ViewCoffeeDetails/Viewcoffeedetails";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserUpdate from "../Pages/UserUpdate/UserUpdate";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addcoffee',
                element:<AddCoffee/>
            },
            {
                path:'/updatecoffee/:id',
                element:<EditCoffee/>,
                loader:({params}) => fetch(`https://coffee-store-server-site-five.vercel.app/coffee/${params.id}`)
            },
            {
                path:'/coffee/:id',
                element:<Viewcoffeedetails/>,
                loader: ({params}) => fetch(`https://coffee-store-server-site-five.vercel.app/coffee/${params.id}`)
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/signin',
                element:<SignIn/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>,
                loader: () => fetch('https://coffee-store-server-site-five.vercel.app/user')
            },
            {
                path:'/userupdate/:id',
                element:<UserUpdate/>,
                loader:({params}) => fetch(`https://coffee-store-server-site-five.vercel.app/user/${params.id}`)
            }
        ]
    }
])
export default router