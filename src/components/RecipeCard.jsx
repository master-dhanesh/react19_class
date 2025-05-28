import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { id, image, title, chef, desc } = props.recipe;

    return (
        <Link
            to={`/recipes/details/${id}`}
            className=" mr-3 mb-3 block w-[23vw] shadow rounded overflow-hidden"
        >
            <img className="w-full h-[30vh] object-cover" src={image} alt="" />
            <h1 className="p-1 mt-3 text-2xl font-black">{title}</h1>
            <small className="p-1 text-red-400">{chef}</small>
            <p className="mt-2 p-1">
                {desc.slice(0, 100)}...
                <small className="text-blue-400">more</small>
            </p>
        </Link>
    );
};

export default RecipeCard;
