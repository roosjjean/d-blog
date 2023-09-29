import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <br />
            <p>That Page Cannot Be Found</p>
            <br />
            <Link to="/">Back To Home Page</Link>
        </div>
    );
}
 
export default NotFound;

