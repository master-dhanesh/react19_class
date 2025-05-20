import Home from "./components/Home";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ProductDetail from "./components/ProductDetail";
const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="" element={<Home />} />

                <Route path="products" element={<Products />}>
                    <Route path="detail" element={<ProductDetail />} />
                </Route>

                <Route path="services" element={<Services />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
