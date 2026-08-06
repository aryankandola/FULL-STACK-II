import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/auth";


function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleLogin = () => {

        const result = login(username, password);


        if(result){

            alert("Login Successful");

            navigate("/dashboard");

        }
        else{

            alert("Invalid Username or Password");

        }

    };


    return (

        <div className="login-container">

            <h2>
                JWT Login System
            </h2>


            <input

                type="text"

                placeholder="Username"

                value={username}

                onChange={(e)=>setUsername(e.target.value)}

            />


            <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

            />


            <button onClick={handleLogin}>

                Login

            </button>


            <p>

                New user?

                <Link to="/register">

                    Register

                </Link>

            </p>


        </div>

    );

}


export default Login;