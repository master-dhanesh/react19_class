import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";

const App = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    useEffect(() => {
        !user && dispatch(asynccurrentuser());
    }, [user]);

    return (
        <div className="py-10 px-[10%] font-thin ">
            <Nav />
            <Mainroutes />
        </div>
    );
};

export default App;
