import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";

const Root = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Root;