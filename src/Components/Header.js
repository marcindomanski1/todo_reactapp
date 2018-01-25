import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
    root: {
        width: '100%',
    },
};

function Header(props) {
    const {classes} = props;
    return (
        <Grid container spacing={24}>
            <Grid item sm={3}/>
            <Grid item xs={12} md={6}>
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography type="title" color="inherit">
                                ToDo App built with React
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
        </Grid>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
