import { DarkMode } from "@mui/icons-material";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        //to do
        setCurrentUser({
            id:1,
            name:"Dasuni Siriwardhana",
            profilePic:"https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=600",
    })
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return(
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};