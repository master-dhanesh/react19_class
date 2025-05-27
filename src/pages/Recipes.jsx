import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
    const { data } = useContext(recipecontext);

    const reciperender = data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
        <>
            <Link
                className="absolute right-[10%] bg-green-400 px-4 py-2 rounded"
                to="/recipes/create-recipe"
            >
                Create Recipe
            </Link>
            <div className="p-5 mt-10 flex flex-wrap">
                {data.length > 0 ? reciperender : "No recipe found!"}
            </div>
        </>
    );
};

export default Recipes;
