import Navbar from "./Navbar";
import {getUser} from "../utils/token";


function Dashboard(){


    const user = getUser();



    return(

        <>

        <Navbar/>


        <div className="dashboard">


            <h1>
                Dashboard
            </h1>


            <h3>
                Welcome {user?.username}
            </h3>


            <p>
                JWT Authentication Successful
            </p>


        </div>


        </>

    );


}


export default Dashboard;