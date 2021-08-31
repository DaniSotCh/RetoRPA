import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class HeaderChange extends React.Component {
    render() {
        let className = this.props.suscriptionPlan ? 'items-center' : '';
        return (
            <div>
                <AppBar position="static" className={className}>
                    <Toolbar>
                        {!this.props.suscriptionPlan &&
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.props.goHome}>
                                <ArrowBackIcon />
                            </IconButton>}
                        {this.props.suscriptionPlan ?
                            <Typography variant="h6">
                                Mag.
                            </Typography>
                            :
                            <Typography variant="subtitle1">
                                Tus datos
                            </Typography>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}