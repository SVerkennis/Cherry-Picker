import React from "react";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import {Box} from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import {Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import myTheme from "../../../styling/muiTheme";
import Paper from '@material-ui/core/Paper';
import DropDownItemHome from "./DropDownItemHome";
import DropDownItemObst from "./DropDownItemObst";
import DropDownItemGemuese from "./DropDownItemGemuese";
import DropDownItemRegistrieren from "./DropDownItemRegistrieren";
import DropDownItemLogin from "./DropDownItemLogin";

const useStyles = makeStyles((theme) => ({

    headerStuff: {
        flexGrow: 1,
        // HIER WIEDER ÄNDERN
      //  marginBottom: '-105px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    // all burger icon content
    BurgerButton: {
        background: 'none',
        boxShadow: 'none',
    },
    buttonMenu: {
        marginLeft: '1.8em',
        marginTop: '1rem',
    },

    // logo
    CherryLogo: {
        height: '100%',
        marginTop: '2rem',
        marginLeft: '2em',
    //    background: 'none',
        boxShadow: 'none',
        borderStyle: 'none',
    },

    // Lupe
    searchIcon: {
        boxShadow: 'none',
        marginLeft: '0.5em',
        marginTop: '1.4rem',
    },

    // background-green
        greenShape: {
            backgroundColor: '#5CDB95',
            marginLeft: '1.5em',
            marginRight: '1.5em',
            marginBottom: '-20%',
            marginTop: '1%',
            borderRadius: '22px',
            backgroundRepeat: 'no-repeat',
            height: "60px",
        },

    ovalShape: {
        backgroundColor: 'white',
        height: '2rem',
        width: '14em',
        marginTop: '-1.7rem',
        marginLeft: '5em',
        mozBorderRadius: "0 0 90px 90px",
        borderRadius: "0 0 90px 90px",
    }

}));



export default function ProminentAppBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

        return (

            <div className={classes.root}>
                <div>
                    <Grid container>

                        <Grid item xs={2}>
                            <Paper MenuIcon className={classes.BurgerButton}/>

                            <div className={classes.buttonMenu}>
                                <MenuIcon variant={"contained"} aria-controls="simple-menu" aria-haspopup="true"
                                          onClick={handleClick}>
                                </MenuIcon>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >

                                    <DropDownItemHome/>

                                    <DropDownItemObst/>

                                    <DropDownItemGemuese/>

                                    <DropDownItemRegistrieren/>

                                    <DropDownItemLogin/>

                                </Menu>
                            </div>
                        </Grid>

                        <Grid item xs={8}>
                            <div>
                                <div className={classes.backgroundSnippet}/>
                            </div>

                            <div>
                                <img src="./images/NewLogo.png" alt="" className={classes.CherryLogo}/>
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div>
                                <SearchIcon className={classes.searchIcon}/>
                            </div>
                        </Grid>


                    </Grid>
                </div>


                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className={classes.greenShape}/>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.ovalShape}/>
                    </Grid>
                </Grid>

            </div>

    );
}