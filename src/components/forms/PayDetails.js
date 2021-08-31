import { Button, Card, CardActions, CardContent, Drawer, FormControl, Grid, Input, InputLabel, OutlinedInput, Switch, Typography } from '@material-ui/core';
import React from 'react';
import { formatToCurrency } from '../resources/PackageHelper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import ListPlan from '../shared/ListPlan';

export default class PayDetails extends React.Component {
    state = {
        amount: 29,
        payType: '',
        planCheck: false,
        viewDetails: false
    }

    componentDidMount() {
        this.setState({
            payType: this.props.planType,
            amount: this.props.amount,
            planCheck: this.props.planType !== 'standar' ? true : false
        });
    }
    componentDidUpdate(prev) {
        if (prev.planType != null && prev.planType !== this.props.planType) {
            this.setState({
                payType: this.props.planType,
                amount: this.props.amount,
                planCheck: this.props.planType !== 'standar' ? true : false
            });
        }
    }

    handleChange = (event) => {
        this.setState({
            planCheck: event.target.checked,
            amount: event.target.checked ? 59 : 29
        });
    };

    onPayCkick = () => {
        this.props.onPayCkick();
    }
    viewDetails = () => {
        this.setState({ viewDetails: true });
    }

    closeDetails = () => {
        this.setState({ viewDetails: false });
    }

    changePlan = () => {
        let planChange = this.state.planCheck ? 'standar' : 'premium';
        let amount = this.state.planCheck ? 29 : 59;
        this.props.onChangePlan(amount, planChange);
    }
    render() {
        let titlePlan = !this.state.planCheck ? 'Plan Estandar' : 'Plan Premium';
        let planChange = this.state.planCheck ? 'estandar' : 'premium';
        return (
            <div>
                <Card className={'no-outlined pt-40 mg-15'}>
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
                <Grid className='grid-bottom txt-center' container spacing={1}>
                    <Grid item xs={6} md={6} onClick={this.viewDetails}>
                        <Typography variant='h6' component='h1'>{titlePlan}</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} onClick={this.viewDetails}>
                        <Typography variant='h6' component='h1'>{'S/.' + this.state.amount + ' al mes'}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button onClick={this.changePlan}><label className='txt-button'>{'Cambiar a Plan ' + planChange}</label></Button>
                        <Drawer anchor='bottom' open={this.state.viewDetails} onClose={this.closeDetails}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={6} className='txt-center' >
                                    <Typography variant='h6' component='h1'>{titlePlan}</Typography>
                                </Grid>
                                <Grid item xs={6} md={6} className='txt-center' >
                                    <Typography variant='h6' component='h1'>{'S/.' + this.state.amount + ' al mes'}</Typography>
                                </Grid>
                                <Grid item xs={12} md={12} alignContent='center' className='mg-15'>
                                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    <ListPlan planCheck={this.state.planCheck} />
                                <Button onClick={this.changePlan}><label className='txt-button'>{'Cambiar a Plan ' + planChange}</label></Button>
                                </Grid>
                            </Grid>
                        </Drawer>
                    </Grid>
                </Grid>
            </div>
        );
    }
}