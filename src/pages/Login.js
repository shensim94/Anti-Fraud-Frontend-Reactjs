import React from 'react';
import { Box } from '@mui/material';

function Login(){
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <div>
                <form>
                    <label>Email:</label>
                    <input type="email" />
                    <label>Password:</label>
                    <input type="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </Box>
    );
};

export default Login;