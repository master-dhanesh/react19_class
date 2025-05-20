import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();

    const navigatHandler = () => {
        navigate("/products/detail");
    };

    return (
        <div className="w-[80%] mx-auto">
            <div>
                <h1 className="text-5xl font-thin mb-4">Product Name</h1>
                <button
                    onClick={navigatHandler}
                    className="bg-red-400 text-white rounded px-4 py-2"
                >
                    See Details
                </button>
            </div>
            <hr />
            <Outlet />
        </div>
    );
};

export default Products;
