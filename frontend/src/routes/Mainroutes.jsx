import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Settings from "../pages/user/Settings";
import Unauth from "./Unauth";
import Auth from "./Auth";
const Signup = lazy(() => import("../pages/user/Signup"));
const Signin = lazy(() => import("../pages/user/Signin"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />

            <Route
                path="/signin"
                element={
                    <Unauth>
                        <Signin />
                    </Unauth>
                }
            />
            <Route
                path="/signup"
                element={
                    <Unauth>
                        <Signup />
                    </Unauth>
                }
            />

            <Route
                path="/settings"
                element={
                    <Auth>
                        <Settings />
                    </Auth>
                }
            />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
