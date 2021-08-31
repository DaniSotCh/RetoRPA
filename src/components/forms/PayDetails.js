import { Button, Card, CardActions, CardContent, Drawer, Grid, InputLabel, Modal, OutlinedInput, Typography } from '@material-ui/core';
import React from 'react';
import { formatToCurrency, formatValidInputClass, validInputClass } from '../resources/PackageHelper';
import ListPlan from '../shared/ListPlan';
import ReactInputMask from 'react-input-mask';

export default class PayDetails extends React.Component {
    state = {
        amount: 29,
        payType: '',
        planCheck: false,
        viewDetails: false,
        name: '',
        cardNumber: '',
        expirateDate: '',
        cvc: '',
        validates: {
            name: true,
            cardNumber: true,
            expirateDate: true,
            cvc: true,
        },
        showModal: false
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

    isValid = () => {
        let fields = [
            validInputClass(this.state.name),
            validInputClass(this.state.cardNumber),
            validInputClass(this.state.expirateDate),
            validInputClass(this.state.cvc),
        ]
        let valid = true;
        fields.forEach((value) => {
            if (!value) {
                valid = false;
            }
        });
        this.setState({
            validates: {
                name: validInputClass(this.state.name),
                cardNumber: validInputClass(this.state.cardNumber),
                expirateDate: validInputClass(this.state.expirateDate),
                cvc: validInputClass(this.state.cvc),
            }
        });
        return valid;
    }

    onPayCkick = () => {
        if (this.isValid()) {
            this.props.onPayCkick();
        } else {
            this.setState({ showModal: true });
        }
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
    updateName = (event) => {
        this.setState({
            name: event.target.value,
            validates: { ...this.state.validates, name: true }
        })
    }
    updateCardNumber = (event) => {
        this.setState({
            cardNumber: event.target.value,
            validates: { ...this.state.validates, cardNumber: true }
        })
    }
    updateExpirateDate = (event) => {
        this.setState({
            expirateDate: event.target.value,
            validates: { ...this.state.validates, expirateDate: true }
        })
    }
    updateCVC = (event) => {
        this.setState({
            cvc: event.target.value,
            validates: { ...this.state.validates, cvc: true }
        })
    }
    handleClose = () => {
        this.setState({ showModal: false })
    }
    render() {
        let titlePlan = !this.state.planCheck ? 'Plan Estandar' : 'Plan Premium';
        let planChange = this.state.planCheck ? 'estandar' : 'premium';
        return (
            <Typography component="div">
                <Modal
                    open={this.state.showModal}
                    onClose={this.handleClose}
                >
                    <div className='modal-error'>
                        <h2 id="spring-modal-title">Error</h2>
                        <p id="spring-modal-description">Por favor, complete todos los campos.</p>
                    </div>
                </Modal>
                <Card className={'no-outlined pt-40'}>
                    <CardContent className='mg-15'>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <InputLabel >Nombre y Apellidos</InputLabel>
                                <OutlinedInput id="component-outlined" className={formatValidInputClass(this.state.validates.name)} value={this.state.name} onChange={this.updateName} />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <InputLabel >Número de tarjeta</InputLabel>
                                <ReactInputMask
                                    mask="999 999 9999 9999"
                                    value={this.state.cardNumber}
                                    onChange={this.updateCardNumber}
                                >{() => <OutlinedInput className={formatValidInputClass(this.state.validates.cardNumber)}/>}</ReactInputMask>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <InputLabel >F. Expira</InputLabel>
                                <ReactInputMask
                                    mask="99 / 99"
                                    value={this.state.expirateDate}
                                    onChange={this.updateExpirateDate}
                                >{() => <OutlinedInput className={formatValidInputClass(this.state.validates.expirateDate)}/>}</ReactInputMask>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <InputLabel >CVC</InputLabel>
                                <ReactInputMask
                                    mask="999"
                                    value={this.state.cvc}
                                    onChange={this.updateCVC}
                                >{() => <OutlinedInput className={formatValidInputClass(this.state.validates.cvc)}/>}</ReactInputMask>
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
                            <Grid container spacing={3} className='txt-center' >
                                <Grid item xs={6} md={6}>
                                    <Typography variant='h6' component='h1'>{titlePlan}</Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
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
            </Typography>
        );
    }
}