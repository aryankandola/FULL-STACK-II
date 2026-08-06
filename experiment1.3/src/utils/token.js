export const saveToken = (token) => {
    localStorage.setItem("jwtToken", token);
};


export const getToken = () => {
    return localStorage.getItem("jwtToken");
};


export const removeToken = () => {

    localStorage.removeItem("jwtToken");
    localStorage.removeItem("currentUser");

};


export const saveUser = (user) => {

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

};


export const getUser = () => {

    return JSON.parse(
        localStorage.getItem("currentUser")
    );

};