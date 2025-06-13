import axios from "../../api/config";
import { loadproducts } from "../reducers/productSlice";

export const asyncloadproducts = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products");
        localStorage.setItem("products", JSON.stringify(data));
        dispatch(loadproducts(data));
        console.log("Products Loaded!");
    } catch (error) {
        console.log(error);
    }
};

export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product); //db
        dispatch(asyncloadproducts());
        console.log("Product Created!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncupdateproduct =
    (id, product) => async (dispatch, getState) => {
        try {
            await axios.patch(`/products/${id}`, product); //db
            dispatch(asyncloadproducts());
            console.log("Products Updated!");
        } catch (error) {
            console.log(error);
        }
    };

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/products/${id}`); //db
        dispatch(asyncloadproducts());
        console.log("Products Deleted!");
    } catch (error) {
        console.log(error);
    }
};
