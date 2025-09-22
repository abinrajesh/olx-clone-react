import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                localStorage.setItem("user", JSON.stringify(currentUser));
            } else {
                localStorage.removeItem("user");
            }

            setLoading(false);
        });

        return () => unsubscribe();

    }, []);



    return (
        <AuthContext.Provider value={{ user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);