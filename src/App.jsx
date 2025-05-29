import axios from "./utils/axios";

const App = () => {
    const GetProducts = async () => {
        try {
            const res = await axios.get("/products");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="font-thin px-[10%] py-10">
            <h1>Axios</h1>
            <button onClick={GetProducts}>Get Product</button>
        </div>
    );
};

export default App;
