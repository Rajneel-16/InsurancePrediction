import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPencilAlt, faEdit);

const Header = ({ onSidebarMobileOpen }) => {
    const theme = useTheme();

    return (
        <>
            <AppBar
                elevation={1}
                sx={{
                    backgroundColor: "#3B9B39",
                    color: theme.palette.text.secondary
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <IconButton
                        color='inherit'
                        onClick={onSidebarMobileOpen}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon fontSize='medium' />
                    </IconButton>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                            <IconButton size='large' disabled>
                                <Avatar
                                    variant='rounded'
                                    sx={{
                                        backgroundColor: green[600],
                                        height: 52,
                                        width: 52,
                                        marginRight: '15px'
                                    }}
                                >
                                    <FamilyRestroomIcon style={{ fontSize: "40px" }} />
                                </Avatar>
                                <Typography
                                    variant='h3'
                                    component='div'
                                    sx={{
                                        flexGrow: 1,
                                        color: theme.palette.text.primary,
                                        fontWeight: 'bold',
                                        textDecoration: 'none'
                                    }}
                                >
                                    PreditSure
                                </Typography>
                            </IconButton>
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button
                            component='a'
                            color='primary'

                            size='small'
                            variant='h3'
                            sx={{
                                color: 'white',
                                // fontSize: theme.typography.subtitle1,
                                fontSize: "20px",
                                fontWeight: 'bold',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <HomeIcon /> Home
                        </Button></Link>
                    <Link to='/insurance-form' style={{ textDecoration: 'none' }}>

                        <Button
                            component='a'
                            color='primary'
                            size='small'
                            variant='text'
                            sx={{
                                color: 'white',
                                // fontSize: theme.typography.subtitle1,
                                fontSize: "20px",
                                fontWeight: 'bold',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <DynamicFormIcon
                                style={{ height: 23, width: 23 }}
                            /> Get Prediction
                        </Button></Link>
                    
                   {/*
                   <Link to='/static' style={{ textDecoration: 'none' }}>

                        <Button
                            component='a'
                            color='primary'
                            size='small'
                            variant='text'
                            sx={{
                                color: 'white',
                                // fontSize: theme.typography.subtitle1,
                                fontSize: "20px",
                                fontWeight: 'bold',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <DynamicFormIcon
                                style={{ height: 23, width: 23 }}
                            /> Static Page
                        </Button></Link>
                    */}
                        
                </Toolbar>
                <Divider />
            </AppBar>
        </>
    );
};

export default Header;