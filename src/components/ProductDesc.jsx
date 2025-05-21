import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDesc = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    console.log(location);
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-3xl">{params.name}</h1>
            <h1>Product Full Description</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a
                autem iste! Magnam adipisci a natus quia. Laudantium delectus
                repudiandae repellat atque, eaque consectetur quos tempore
                asperiores libero, consequatur quisquam.
            </p>
            <button
                onClick={() => navigate(-1)}
                className="bg-red-400 text-white rounded px-4 py-2"
            >
                Go Back
            </button>
        </div>
    );
};

export default ProductDesc;
