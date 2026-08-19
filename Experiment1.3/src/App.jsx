import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

import Admin from "./pages/Admin";
import Editor from "./pages/Editor";
import Viewer from "./pages/Viewer";

import "./App.css";


function App(){

    return(

        <BrowserRouter>

            <Routes>


                {/* Login */}

                <Route

                    path="/"

                    element={<Login/>}

                />



                {/* Register */}

                <Route

                    path="/register"

                    element={<Register/>}

                />



                {/* Dashboard - Login Required */}

                <Route

                    path="/dashboard"

                    element={

                        <ProtectedRoute>

                            <Dashboard/>

                        </ProtectedRoute>

                    }

                />



                {/* Admin Route */}

                <Route

                    path="/admin"

                    element={

                        <RoleRoute allowedRoles={["Admin"]}>

                            <Admin/>

                        </RoleRoute>

                    }

                />



                {/* Editor Route */}

                <Route

                    path="/editor"

                    element={

                        <RoleRoute allowedRoles={["Admin","Editor"]}>

                            <Editor/>

                        </RoleRoute>

                    }

                />



                {/* Viewer Route */}

                <Route

                    path="/viewer"

                    element={

                        <RoleRoute allowedRoles={["Admin","Editor","Viewer"]}>

                            <Viewer/>

                        </RoleRoute>

                    }

                />


            </Routes>


        </BrowserRouter>

    );

}


export default App;