import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  color: "white",
  margin: "0.5rem",
  textDecoration : "none"
}

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography textTransform={"uppercase"} variant="h5" mr={"auto"}>Learning</Typography>
        <Link style= {styles} to="/">Home</Link>
        <Link style= {styles} to="/login">Login</Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header