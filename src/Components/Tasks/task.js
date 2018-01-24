import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import  {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';


const style = theme => ({
    checked: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        color: 'red',
        textDecoration: 'line-through'
    },
    unChecked: {


    }
});

class Task extends Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            checked: false
        }
    }

    handleToggle(event) {
        this.setState({checked: event.target.checked});
    }

    render() {

        return (
            <ListItem>
                <Checkbox onChange={this.handleToggle}/>
                <ListItemText primary={this.props.label} style={this.state.checked ? style.checked : style.unChecked} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon onClick={() => this.props.onRemove(this.props.label)}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

        );
    }
}

Task.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Task);

