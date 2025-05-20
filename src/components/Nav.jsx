import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex p-5 justify-center gap-10">
            <NavLink
                to="/"
                className={(e) => (e.isActive ? "text-red-300" : "")}
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-300" : "")}
                to="/services"
            >
                Services
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-300" : "")}
                to="/products"
            >
                Products
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-300" : "")}
                to="/about"
            >
                About
            </NavLink>
        </div>
    );
};

export default Nav;
