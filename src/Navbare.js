import { Link } from "react-router-dom";

const Navbare = () => {
    return (
        <nav className="navbar">
            <h1>My First React Blog .</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create New</Link>
            </div>
        </nav>
    );
}

export default Navbare;