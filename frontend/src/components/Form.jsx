import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";
export default function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const name = method.toLowerCase() === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            // Send a POST request to the backend with the entered username and password
            const res = await api.post(route, { username, password });

            if (method.toLowerCase() === "login") {
                // Store the access token and refresh token in localStorage
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                console.log("Successfully logged in");
                navigate("/");
            } else {
                // Redirect to the login page after successful registration
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
            alert("Error: " + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input 
                className="form-input" 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input 
                className="form-input" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            {loading &&<LoadingIndicator/>}
            <button className="form-button" type="submit" >
                {name}
            </button>
        </form>
    );
}
