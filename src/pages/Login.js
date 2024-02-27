import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const url = 'api/auth/authenticate'

    const authenticate = async (e) => {
        e.preventDefault();

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });
        const responseBody = await response.json();
        if (response.status !== 200) {
            alert(JSON.stringify(responseBody));
        } else {
            localStorage.setItem("access_token", responseBody.access_token);
            console.log(responseBody);
            navigate('/');
        }
    }
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <div>
                <form>
                    <label>Username:</label>
                    <input
                        type="username"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={authenticate}
                    >Login</button>
                </form>
            </div>
        </Box>
    );
};