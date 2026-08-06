import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {register} from "../services/auth";


function Register(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [role,setRole]=useState("Viewer");


const navigate=useNavigate();



const handleRegister=()=>{


const result=register(
username,
password,
role
);



if(result){

alert("Registration Successful");

navigate("/");

}
else{

alert("User already exists");

}


};



return(

<div className="login-container">


<h2>
Register
</h2>


<input

placeholder="Username"

onChange={(e)=>setUsername(e.target.value)}

/>


<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>


<select

value={role}

onChange={(e)=>setRole(e.target.value)}

>


<option>
Admin
</option>


<option>
Editor
</option>


<option>
Viewer
</option>


</select>


<br/><br/>


<button onClick={handleRegister}>

Register

</button>


</div>

);


}


export default Register;