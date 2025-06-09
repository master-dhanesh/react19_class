import { useDispatch, useSelector } from "react-redux";
import { create } from "./store/reducers/productSlice";
import { asyncloadproduct } from "./store/actions/productActions";
import { useEffect } from "react";

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    // console.log(data);

    const CreateProduct = () => {
        const newproduct = {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description:
                "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: {
                rate: 4.1,
                count: 259,
            },
        };

        // normal function -> call()
        // action -> dispatch(call())
        dispatch(create(newproduct));
    };

    const LoadProducts = () => {
        dispatch(asyncloadproduct());
    };

    useEffect(() => {
        LoadProducts();
    }, []);

    return (
        <div className="px-[20%] py-10 font-thin ">
            <h1 className="text-5xl mb-10">App</h1>
            <button onClick={CreateProduct}>Create Product</button>
            <br />
            <br />
            <button onClick={LoadProducts}>Load Products</button>
        </div>
    );
};

export default App;
