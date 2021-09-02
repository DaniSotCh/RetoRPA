import React, { useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button, Grid, Typography } from '@material-ui/core';
import { useEffect } from 'react';

function SuccessPlan(props) {
    const [planType, setPlanType] = useState('Estandar');
    const [amount, setAmount] = useState(29);

    useEffect(() => {
        setPlanType(props.planType !== 'standar' ? 'Premium' : 'Estandar');
        setAmount(props.amount);
    }, []);

    return (
        <div>
            <Grid container className='txt-center' >
                <Grid item xs={12} md={12}>
                    <CheckCircleIcon className='icon-size mg-20' />
                    <Typography >{'Bienvenido, has adquirido el'}</Typography>
                    <Typography variant='h5' component='h1'>{'Plan ' + planType}</Typography>
                    <Typography variant='subtitle2' component='subtitle2'>{'S/.' + amount + ' al mes'}</Typography>
                </Grid>
                <Grid item xs={12} md={12} className='mg-20'>
                    <Typography>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}</Typography>
                </Grid>
                <Grid item xs={12} md={12} className='mg-20'>
                    <Button onClick={props.goHome}><label className='txt-button'>{'Ir a ver mi plan'}</label></Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default SuccessPlan;