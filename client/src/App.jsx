import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Applications from "./pages/Applications";
import AddApplication from "./pages/AddApplication";
import EditApplication from "./pages/EditApplication";

import ResumeReview from "./pages/ResumeReview";

import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";



function App(){


return(

<BrowserRouter>


<Routes>


<Route 
path="/"
element={<Login/>}
/>


<Route 
path="/register"
element={<Register/>}
/>



<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>



<Route

path="/applications"

element={

<ProtectedRoute>

<Applications/>

</ProtectedRoute>

}

/>



<Route

path="/add"

element={

<ProtectedRoute>

<AddApplication/>

</ProtectedRoute>

}

/>



<Route

path="/edit/:id"

element={

<ProtectedRoute>

<EditApplication/>

</ProtectedRoute>

}

/>



<Route

path="/resume-review"

element={

<ProtectedRoute>

<ResumeReview/>

</ProtectedRoute>

}

/>



<Route
path="*"
element={<NotFound/>}
/>


</Routes>


</BrowserRouter>


)

}


export default App;