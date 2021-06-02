import { AppBar, Button,  makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import logo from '../../static/img/logo.jpeg'
import { Menu } from './Menu';


const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: '#000000'
    },
    logo: {
        width: 100,
        [theme.breakpoints.up('sm')] : {
            width: 170
        }
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    }
}));

export const Navbar: React.FC = () => {
    const classes = useStyles();

    

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Menu></Menu>
                <Typography className={classes.title}>
                    <img className={classes.logo} src={logo} alt="NOWVI"></img>
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};