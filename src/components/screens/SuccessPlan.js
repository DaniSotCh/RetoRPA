import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button, Grid, Typography } from '@material-ui/core';

export default class SuccessPlan extends React.Component {
    state = {
        planType: 'Estandar',
        amount: 29,
    }
    componentDidMount() {
        this.setState({
            planType: this.props.planType !== 'standar' ? 'Premium' : 'Estandar',
            amount: this.props.amount
        })
    }
    render() {
        return (
            <div>
                <Grid container className='txt-center' >
                    <Grid item xs={12} md={12}>
                        <CheckCircleIcon className='icon-size mg-20' />
                        <Typography >{'Bienvenido, has adquirido el'}</Typography>
                        <Typography variant='h5' component='h1'>{'Plan ' + this.state.planType}</Typography>
                        <Typography variant='subtitle2' component='subtitle2'>{'S/.' + this.state.amount + ' al mes'}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} className='mg-20'>
                        <Typography>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} className='mg-20'>
                        <Button onClick={this.props.goHome}><label className='txt-button'>{'Ir a ver mi plan'}</label></Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}