import { NavLink } from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-4">
            <div className="container d-flex align-items-center">
                <span className="navbar-brand fs-4 mb-0">
                    World of posts
                </span>

                <ul className="navbar-nav flex-row gap-4 ms-auto">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => "nav-link text-black p-0" + (isActive ? " active" : "")}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/new-post"
                            className={({ isActive }) => "nav-link text-black p-0" + (isActive ? " active" : "")}
                        >
                            Add
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => "nav-link text-black p-0" + (isActive ? " active" : "")}
                        >
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) => "nav-link text-black p-0" + (isActive ? " active" : "")}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;
