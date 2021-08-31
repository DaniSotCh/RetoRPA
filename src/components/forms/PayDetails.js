import { Button, Card, CardActions, CardContent, Drawer, FormControl, Grid, Input, InputLabel, OutlinedInput, Switch, Typography } from '@material-ui/core';
import React from 'react';
import { formatToCurrency } from '../resources/PackageHelper';
import BottomNavigation from '@material-ui/core/BottomNavigation';

export default class PayDetails extends React.Component {
    state = {
        amount: 29,
        payType: '',
        viewDetails: false
    }

    componentDidMount() {
        this.setState({
            planType: this.props.planType,
            amount: this.props.amount
        });
    }

    handleChange = (event) => {
        this.setState({
            planCheck: event.target.checked,
            amount: event.target.checked ? 59 : 29
        });
    };

    onPayCkick = () => {
        let type = this.state.planCheck ? 'standar' : 'premium';
        this.props.onPlanClick(type);
    }
    viewDetails = () => {
        this.setState({ viewDetails: true })
    }

    closeDetails = () => {
        this.setState({ viewDetails: false })
    }
    render() {
        return (
            <div>
                <Card className={'no-outlined pt-40'}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <InputLabel >Nombre y Apellidos</InputLabel>
                                <OutlinedInput id="component-outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <InputLabel >Número de tarjeta</InputLabel>
                                <OutlinedInput
                                    type='number'
                                    pattern="{{9999}} {{9999}} {{9999}} {{9999}}" />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <InputLabel >F. Expira</InputLabel>
                                <OutlinedInput
                                    type='number'
                                    pattern="{{9999}} {{9999}} {{9999}} {{9999}}" />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <InputLabel >CVC</InputLabel>
                                <OutlinedInput
                                    type='number'
                                    pattern="{{9999}} {{9999}} {{9999}} {{9999}}" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="large" onClick={this.onPayCkick}>{'Pagar S/.' + formatToCurrency(this.state.amount)}</Button>
                    </CardActions>
                </Card>
                <Grid className='grid-bottom txt-center' container spacing={3}>
                    <Grid item xs={6} md={6}>
                        <Typography variant='h6' component='h1'>Plan Standar</Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant='h6' component='h1'>{this.state.amount}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" color="primary" onClick={this.viewDetails}>{'OSSSSSSSSSSSSSSSSSSSSSSSSS'}</Button>
                        <Drawer anchor='bottom' open={this.state.viewDetails} onClose={this.closeDetails}>
                            sdddddd
                        </Drawer>
                    </Grid>
                </Grid>
            </div>
        );
    }
}