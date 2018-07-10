import React from 'react';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
        margin: '0 auto',
        marginTop: '15px',
        marginBottom: '15px',
        display: 'block'
    },
});

function TitleButton(props) {
    const { classes } = props;

    return (
        <Button size='large' variant="contained" color="primary" className={classes.button}>
            {props.title}
        </Button>
    )
}

export default withStyles(styles)(TitleButton);