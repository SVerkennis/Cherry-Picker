import React from "react";
import {Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

    backgroundColor: {
        backgroundColor: 'white',
    },

    underlineText: {
        textDecoration: 'none',
        color: myTheme.palette.secondary.main,
        fontFamily: 'Lato-Regular, sans-serif',
    },


}));

function DropDownItemGemuese({}) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(

        <MenuItem onClick={handleClose} className={classes.backgroundColor}>
            <Link to={"/vegetables"} className={classes.underlineText}>Gemüse</Link>
        </MenuItem>

    )

}

export default DropDownItemGemuese;