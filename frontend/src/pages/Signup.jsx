import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
const Signup = () => {
    const { register, handleSubmit } = useForm();

    const SigninHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        console.log(user);
    };
    return (
        <form onSubmit={handleSubmit(SigninHandler)} className="p-5 w-full">
            <input
                {...register("username")}
                className="w-full text-3xl border-b outline-0 p-2 mb-5"
                type="text"
                placeholder="john-doe"
            />
            <input
                {...register("email")}
                className="w-full text-3xl border-b outline-0 p-2 mb-5"
                type="email"
                placeholder="john@doe.example"
            />
            <input
                {...register("password")}
                className="w-full text-3xl border-b outline-0 p-2 mb-5"
                type="password"
                placeholder="********"
            />
            <button className="text-white text-3xl px-5 py-3 rounded bg-red-400">
                Signup User
            </button>
            <p className="mt-5">
                Already have an account?{" "}
                <Link className="text-blue-400" to="/signin">
                    Signin
                </Link>
            </p>
        </form>
    );
};

export default Signup;
