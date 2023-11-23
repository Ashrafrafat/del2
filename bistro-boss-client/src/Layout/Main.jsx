import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};
export default Main;