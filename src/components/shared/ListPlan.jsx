import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import CheckIcon from '@material-ui/icons/Check';

export default class ListPlan extends React.Component {
    state = {
        planCheck: false
    }
    componentDidMount() {
        this.setState({ planCheck: this.props.planCheck })
    }
    componentDidUpdate(prev) {
        if (prev.planCheck !== this.props.planCheck) {
            this.setState({ planCheck: this.props.planCheck })
        }
    }
    render() {
        return (
            <List className='list-center'>
                <ListItem>
                    <ListItemIcon><CheckIcon /></ListItemIcon>
                    <ListItemText
                        primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon /></ListItemIcon>
                    <ListItemText
                        primary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    //secondary='Secondary text'
                    />
                </ListItem>
                <ListItem disabled={!this.state.planCheck}>
                    <ListItemIcon><CheckIcon /></ListItemIcon>
                    <ListItemText
                        primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    //secondary='Secondary text'
                    />
                </ListItem>
                <ListItem disabled={!this.state.planCheck}>
                    <ListItemIcon><CheckIcon /></ListItemIcon>
                    <ListItemText
                        primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    //secondary='Secondary text'
                    />
                </ListItem>
            </List>
        );
    }
}