import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class HeaderChange extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static" className='txt-center'>
                    <Toolbar>
                        <Typography variant="h6">
                            Mag.
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}