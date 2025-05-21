import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Products from "../components/Products";
import ProductDetail from "../components/ProductDetail";
import Services from "../components/Services";
import ProductDesc from "../components/ProductDesc";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="products" element={<Products />}>
                <Route path="/products/detail" element={<ProductDetail />} />
                <Route
                    path="/products/detail/:name"
                    element={<ProductDesc />}
                />
            </Route>

            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
        </Routes>
    );
};

export default Mainroutes;
