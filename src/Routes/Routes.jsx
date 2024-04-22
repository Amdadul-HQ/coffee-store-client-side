import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import EditCoffee from "../Pages/EditCoffee/EditCoffee";
import Viewcoffeedetails from "../Pages/ViewCoffeeDetails/Viewcoffeedetails";

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
                loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path:'/coffee/:id',
                element:<Viewcoffeedetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])
export default router