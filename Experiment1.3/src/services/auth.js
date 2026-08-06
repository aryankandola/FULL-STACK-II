import { 
    saveToken,
    removeToken,
    saveUser
} from "../utils/token";


// Register New User

export const register = (username, password, role) => {

    let users = JSON.parse(
        localStorage.getItem("users")
    ) || [];


    const existingUser = users.find(
        user => user.username === username
    );


    if(existingUser){

        return false;

    }


    users.push({

        username: username,

        password: password,

        role: role

    });


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    return true;

};



// Login User

export const login = (username, password) => {


    let users = JSON.parse(
        localStorage.getItem("users")
    ) || [];



    const user = users.find(

        user => 
        user.username === username &&
        user.password === password

    );



    if(user){


        // Creating Mock JWT Token

        const token = btoa(

            JSON.stringify({

                username: user.username,

                role: user.role

            })

        );



        saveToken(token);


        // Save current logged-in user

        saveUser(user);



        return true;

    }



    return false;

};



// Logout User

export const logout = () => {

    removeToken();

};