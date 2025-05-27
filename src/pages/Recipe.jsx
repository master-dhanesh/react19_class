import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Recipe = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipecontext);
    const { id } = useParams();
    const recipe = data.find((r) => r.id == id);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            image: recipe.image,
            title: recipe.title,
            chef: recipe.chef,
            desc: recipe.desc,
            ingr: recipe.ingr,
            inst: recipe.inst,
        },
    });

    const SubmitHandler = (updatedRecipe) => {
        const i = data.findIndex((r) => r.id == id);
        // code to update recipe
        console.log(data[i]);
        const copydata = [...data];
        copydata[i] = { ...recipe, ...updatedRecipe };
        setdata(copydata);
        toast.success("recipe updated!");
        reset();
    };

    const DeleteHandler = () => {
        const filterData = data.filter((r) => r.id != id);
        setdata(filterData);
        toast.success("Recipe Deleted");
        navigate("/recipes");
    };

    return recipe ? (
        <div className="mt-5 w-full h-screen overflow-auto flex  ">
            {/*  */}
            <div className="left w-[50vw]">
                <h1 className="text-5xl font-black">{recipe.title}</h1>
                <img
                    className="h-[30vh] object-cover"
                    src={recipe.image}
                    alt=""
                />
                <small className=" font-black text-red-400">
                    {recipe.chef}
                </small>
            </div>
            {/*  */}
            <form
                onSubmit={handleSubmit(SubmitHandler)}
                className="text-xl mt-5 p-5 shadow w-1/2"
            >
                <input
                    className="w-full mb-5 block border-b p-1 outline-0"
                    {...register("image")}
                    type="url"
                    placeholder="Image url"
                />

                <input
                    className="w-full mb-5 block border-b p-1 outline-0"
                    {...register("title")}
                    type="text"
                    placeholder="Title"
                />
                <input
                    className="w-full mb-5 block border-b p-1 outline-0"
                    {...register("chef")}
                    type="text"
                    placeholder="Chef"
                />

                <textarea
                    className="w-full mb-5 block border-b p-1 outline-0"
                    {...register("desc")}
                    placeholder="recipe description..."
                ></textarea>
                <textarea
                    className="w-full mb-5 block border-b p-1 outline-0"
                    {...register("ingr")}
                    placeholder="recipe ingredients, seperated by comma"
                ></textarea>
                <textarea
                    className="w-full mb-5 block border-b p-1 outline-0"
                    {...register("inst")}
                    placeholder="recipe instructions, seperated by comma"
                ></textarea>

                <select
                    className="w-full mb-5 block border-b p-1 outline-0"
                    {...register("category")}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button
                    type="submit"
                    className="bg-green-400 px-4 py-2 rounded"
                >
                    Update Recipe
                </button>
                <button
                    onClick={DeleteHandler}
                    type="button"
                    className="ml-5 bg-red-400 px-4 py-2 rounded"
                >
                    Delete Recipe
                </button>
            </form>
            {/*  */}
        </div>
    ) : (
        "Loading"
    );
};

export default Recipe;
