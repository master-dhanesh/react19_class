import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();

    const navigatHandler = () => {
        navigate("/products/detail");
    };

    return (
        <div className="w-[80%] mx-auto">
            <div className="flex justify-between items-center mb-3">
                <span className="text-5xl font-thin mb-4">Product 1</span>
                <div>
                    <button
                        onClick={navigatHandler}
                        className="mr-3 bg-red-400 text-white rounded px-4 py-2"
                    >
                        Details
                    </button>
                    <button
                        onClick={() => navigate("/products/detail/Product-1")}
                        className="bg-red-400 text-white rounded px-4 py-2"
                    >
                        Description
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center mb-3">
                <span className="text-5xl font-thin mb-4">Product 2</span>
                <div>
                    <button
                        onClick={navigatHandler}
                        className="mr-3 bg-red-400 text-white rounded px-4 py-2"
                    >
                        Details
                    </button>
                    <button
                        onClick={() => navigate("/products/detail/Product-2")}
                        className="bg-red-400 text-white rounded px-4 py-2"
                    >
                        Description
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center mb-3">
                <span className="text-5xl font-thin mb-4">Product 3</span>
                <div>
                    <button
                        onClick={navigatHandler}
                        className="mr-3 bg-red-400 text-white rounded px-4 py-2"
                    >
                        Details
                    </button>
                    <button
                        onClick={() => navigate("/products/detail/Product-3")}
                        className="bg-red-400 text-white rounded px-4 py-2"
                    >
                        Description
                    </button>
                </div>
            </div>

            <hr className="my-5" />
            <Outlet />
        </div>
    );
};

export default Products;
