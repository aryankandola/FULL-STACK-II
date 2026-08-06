import {Navigate} from "react-router-dom";
import {getUser} from "../utils/token";


function RoleRoute({children,allowedRoles}){


const user=getUser();



if(!user){

return <Navigate to="/" />;

}



if(!allowedRoles.includes(user.role)){


return <Navigate to="/dashboard"/>;


}



return children;


}


export default RoleRoute;