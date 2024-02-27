import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAppUsername } from '../components/usernameSlice';

export default function Signup(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const url = '/api/auth/user'
    const dispatch = useDispatch()


    const register = async (e) => {
        e.preventDefault();

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "username": username,
                "password": password
            })
        });
        const responseBody = await response.json();
        if (response.status !== 201) {
            alert(JSON.stringify(responseBody));
        } else {
            dispatch(setAppUsername(name))
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
                    <label>Name:</label>
                    <input
                        type="name"
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                    />
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
                        onClick = {register}
                    >Register</button>
                </form>
            </div>
        </Box>
    );
};