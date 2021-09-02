import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from 'react';
import { useEffect } from 'react';

function HeaderChange(props) {
    const [className,setClassName] = useState('');
    useEffect(() => {
        setClassName(props.suscriptionPlan ? 'items-center' : '')
    }, [props.suscriptionPlan]);

    const goHome = ()=>{
        props.goHome();
        window.location.href = '/suscripcion';
    }

    return (
        <div>
            <AppBar position="static" className={className}>
                <Toolbar>
                    {!props.suscriptionPlan &&
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={goHome}>
                            <ArrowBackIcon />
                        </IconButton>}
                    {props.suscriptionPlan ?
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
export default HeaderChange;