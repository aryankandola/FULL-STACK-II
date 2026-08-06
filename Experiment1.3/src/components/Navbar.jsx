import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/auth";
import { getUser } from "../utils/token";


function Navbar(){


    const navigate = useNavigate();


    const user = getUser();



    const handleLogout = () => {


        logout();


        navigate("/");


    };



    return(

        <nav>


            <h2>
                JWT RBAC System
            </h2>



            <div>


                <Link to="/dashboard">

                    Dashboard

                </Link>



                {
                    user?.role === "Admin" &&

                    <Link to="/admin">

                        Admin Panel

                    </Link>
                }




                {
                    (user?.role === "Admin" ||
                     user?.role === "Editor") &&

                    <Link to="/editor">

                        Editor Panel

                    </Link>

                }




                <Link to="/viewer">

                    Viewer Panel

                </Link>




                <button onClick={handleLogout}>

                    Logout

                </button>


            </div>


        </nav>

    );


}


export default Navbar;