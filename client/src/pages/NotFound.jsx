import { Link } from "react-router-dom";

function NotFound(){

return(

<div className="auth-container">

<h1>404</h1>

<h2>Page Not Found</h2>

<Link to="/dashboard">

Go Back

</Link>

</div>

)

}

export default NotFound;