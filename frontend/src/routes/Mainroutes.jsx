import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Signup = lazy(() => import("../pages/Signup"));
const Signin = lazy(() => import("../pages/Signin"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
