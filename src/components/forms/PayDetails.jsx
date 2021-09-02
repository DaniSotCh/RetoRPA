import { Button, Card, CardActions, CardContent, Drawer, Grid, InputLabel, Modal, OutlinedInput, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { formatToCurrency, formatValidInputClass, validInputClass } from '../resources/PackageHelper';
import ListPlan from '../shared/ListPlan';
import ReactInputMask from 'react-input-mask';
import { useEffect } from 'react';

function PayDetails(props) {
    const [amount, setAmount] = useState(29);
    const [planCheck, setPlanCheck] = useState(false);
    const [viewDetails, setViewDetails] = useState(false);
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirateDate, setExpirateDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [validates, setValidates] = useState({
        name: true,
        cardNumber: true,
        expirateDate: true,
        cvc: true,
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setAmount(props.amount);
    }, [props.amount]);

    useEffect(() => {
        setPlanCheck(props.planType !== 'standar' ? true : false);
    }, [props.planType]);

    const isValid = () => {
        const fields = [
            validInputClass(name),
            validInputClass(cardNumber),
            validInputClass(expirateDate),
            validInputClass(cvc),
        ]
        let valid = true;
        fields.forEach((value) => {
            if (!value) {
                valid = false;
            }
        });
        setValidates({
            name: validInputClass(name),
            cardNumber: validInputClass(cardNumber),
            expirateDate: validInputClass(expirateDate),
            cvc: validInputClass(cvc),
        });
        return valid;
    }

    const onPayCkick = () => {
        if (isValid()) {
            props.onPayCkick();
            props.navigate('/confirmacion');
        } else {
            setShowModal(true);
        }
    }
    const funcViewDetails = () => {
        setViewDetails(true);
    }

    const closeDetails = () => {
        setViewDetails(false);
    }

    const changePlan = () => {
        const planChange = planCheck ? 'standar' : 'premium';
        const amount = planCheck ? 29 : 59;
        props.onChangePlan(amount, planChange);
    }
    const updateName = (event) => {
        setName(event.target.value)
        setValidates({ ...validates, name: true });
    }
    const updateCardNumber = (event) => {
        setCardNumber(event.target.value)
        setValidates({ ...validates, cardNumber: true });
    }
    const updateExpirateDate = (event) => {
        setExpirateDate(event.target.value)
        setValidates({ ...validates, expirateDate: true });
    }
    const updateCVC = (event) => {
        setCVC(event.target.value)
        setValidates({ ...validates, cvc: true });
    }
    const handleClose = () => {
        setShowModal(false)
    }
    let titlePlan = !planCheck ? 'Plan Estandar' : 'Plan Premium';
    let planChange = planCheck ? 'estandar' : 'premium';
    return (
        <Typography component="div">
            <Modal
                open={showModal}
                onClose={handleClose}
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
                            <OutlinedInput id="component-outlined" className={formatValidInputClass(validates.name)} value={name} onChange={updateName} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputLabel >Número de tarjeta</InputLabel>
                            <ReactInputMask
                                mask="999 999 9999 9999"
                                value={cardNumber}
                                onChange={updateCardNumber}
                            >{() => <OutlinedInput className={formatValidInputClass(validates.cardNumber)} />}</ReactInputMask>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <InputLabel >F. Expira</InputLabel>
                            <ReactInputMask
                                mask="99 / 99"
                                value={expirateDate}
                                onChange={updateExpirateDate}
                            >{() => <OutlinedInput className={formatValidInputClass(validates.expirateDate)} />}</ReactInputMask>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <InputLabel >CVC</InputLabel>
                            <ReactInputMask
                                mask="999"
                                value={cvc}
                                onChange={updateCVC}
                            >{() => <OutlinedInput className={formatValidInputClass(validates.cvc)} />}</ReactInputMask>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="large" onClick={onPayCkick}>{'Pagar S/.' + formatToCurrency(amount)}</Button>
                </CardActions>
            </Card>
            <Grid className='grid-bottom txt-center' container spacing={1}>
                <Grid item xs={6} md={6} onClick={funcViewDetails}>
                    <Typography variant='h6' component='h1'>{titlePlan}</Typography>
                </Grid>
                <Grid item xs={6} md={6} onClick={funcViewDetails}>
                    <Typography variant='h6' component='h1'>{'S/.' + amount + ' al mes'}</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button onClick={changePlan}><label className='txt-button'>{'Cambiar a Plan ' + planChange}</label></Button>
                    <Drawer anchor='bottom' open={viewDetails} onClose={closeDetails}>
                        <Grid container spacing={3} className='txt-center' >
                            <Grid item xs={6} md={6}>
                                <Typography variant='h6' component='h1'>{titlePlan}</Typography>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Typography variant='h6' component='h1'>{'S/.' + amount + ' al mes'}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} alignContent='center' className='mg-15'>
                                <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                <ListPlan planCheck={planCheck} />
                                <Button onClick={changePlan}><label className='txt-button'>{'Cambiar a Plan ' + planChange}</label></Button>
                            </Grid>
                        </Grid>
                    </Drawer>
                </Grid>
            </Grid>
        </Typography>
    );
}
export default PayDetails;