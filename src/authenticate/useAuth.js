import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from './authService';
import { setAppUsername } from '../components/usernameSlice';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authenticate = async (username, password) => {
        try {
            const responseBody = await authenticateUser(username, password);
            localStorage.setItem("access_token", responseBody.access_token);
            dispatch(setAppUsername(username)); // Assuming 'setAppUsername' is your Redux action
            navigate('/');
        } catch (error) {
            alert("Authentication failed: " + error.message);
        }
    };

    return authenticate;
};