import { useNavigate } from "react-router-dom";
const ProductDetail = () => {
    const navigate = useNavigate();
    return (
        <div className="w-[80%] mx-auto">
            <h1>Product Full Detail</h1>
            <h1>Product Full Detail</h1>
            <button
                onClick={() => navigate(-1)}
                className="bg-red-400 text-white rounded px-4 py-2"
            >
                Go Back
            </button>
        </div>
    );
};

export default ProductDetail;
