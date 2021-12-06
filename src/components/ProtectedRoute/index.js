import { useContext } from "react";
import { Navigate } from "react-router";
import { UserStorageContext } from "../../contexts/UserContext";

export const ProtectedRoute = ({ children }) => {
    const { login } = useContext(UserStorageContext)

    if (login === true) {
        return children
    } else if (login === false) {
        return <Navigate to="/login" />
    } else {
        return null
    }

}