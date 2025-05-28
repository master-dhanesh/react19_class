import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Favroite = () => {
    const { favroite } = useContext(recipecontext);
    console.log(favroite);
    const reciperender = favroite.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
        <>
            <div className="p-5 mt-10 flex flex-wrap">
                {favroite.length > 0 ? reciperender : "No recipe found!"}
            </div>
        </>
    );
};

export default Favroite;
