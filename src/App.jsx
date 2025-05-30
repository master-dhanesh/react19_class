import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
    return (
        <div className="font-thin px-[10%] py-10">
            <nav className="flex gap-x-10 mb-10">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
};

export default App;
