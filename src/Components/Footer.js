import React, {Component} from 'react';
import {GoMarkGithub} from 'react-icons/lib/go';
import {FaLinkedinSquare} from 'react-icons/lib/fa';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {

        width: 30,
        height: 30,
        padding: 10,
    }
});

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid style={{textAlign: "center", paddingTop: 20}}>
                <span className={classes.root}>Created by Marcin Domański</span>
                <Grid>
                    <a href="https://www.linkedin.com/in/m-domanski/">
                        <FaLinkedinSquare
                            color="primary"
                            className={classes.root}
                        />
                    </a>
                    <a href="https://github.com/marcindomanski1/">
                        <GoMarkGithub
                            color="primary"
                            className={classes.root}
                        />
                    </a>
                </Grid>
            </Grid>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);