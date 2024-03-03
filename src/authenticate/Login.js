import React, { useState } from 'react';
import { Box, TextField, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAuth } from './useAuth';

export default function Login() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const authenticate = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate(username, password);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 3,
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Sign In
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: matches ? '25ch' : '100%' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TextField
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Login
                </Button>
            </Box>
        </Box>
    );
}