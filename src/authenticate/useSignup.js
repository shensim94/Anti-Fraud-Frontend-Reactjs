import { useNavigate } from 'react-router-dom';
import { registerUser } from './authService';

export const useSignup = () => {
    const navigate = useNavigate();

    const signup = async (name, username, password) => {
        try {
            await registerUser(name, username, password);
            navigate('/login'); // Redirect to login page upon successful registration
        } catch (error) {
            alert("Signup failed: " + error.message);
        }
    };

    return signup;
};