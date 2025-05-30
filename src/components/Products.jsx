import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Products = () => {
    const [isAccept, setisAccept] = useState(false);
    const [products, setproducts] = useState(null);
    const GetProducts = async () => {
        try {
            const res = await axios.get("/products");
            setproducts(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetProducts();
        console.log("Products.jsx | Mounted");

        return () => {
            console.log("Product.jsx | UnMounted");
        };
    }, [isAccept]);

    // useEffect(() => {
    //     GetProducts()
    // },[])

    return (
        <div>
            <h1>Axios</h1>
            <button onClick={() => setisAccept(!isAccept)}>Change Value</button>
            <h1>{isAccept ? "Hello" : "No Hello"}</h1>
            <hr />
            <ol>
                {products
                    ? products?.map((p) => <li key={p.id}>{p.title}</li>)
                    : "Loading..."}
            </ol>
        </div>
    );
};

export default Products;
