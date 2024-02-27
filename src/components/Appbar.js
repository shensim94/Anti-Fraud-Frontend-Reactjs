import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {
  const username = useSelector(state => state.username.value)
  const navigate = useNavigate();
  const loginButtonHandler = () => navigate('/login');
  const signUpButtonHandler = () => navigate('/signup');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick = {loginButtonHandler}>Login</Button>
          <Button color="inherit" onClick = {signUpButtonHandler}>Sign Up</Button>
          <span>{username}</span>
        </Toolbar>
      </AppBar>
    </Box>
  );
}