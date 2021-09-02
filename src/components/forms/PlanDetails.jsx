import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Switch, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ListPlan from '../shared/ListPlan';

function PlanDetails(props) {
    const [amount, setAmount] = useState(29);
    const [planCheck, setPlanCheck] = useState(false);

    const handleChange = (event) => {
        const value = event.target.checked ? 59 : 29;
        setPlanCheck(event.target.checked);
        setAmount(value);
        props.onChangeAmount(value)
    };

    const onPlanCkick = (event) => {
        props.onPlanClick(!planCheck ? 'standar' : 'premium');
    }

    return (
        <Typography component="div">
            <Grid component="label" container justifyContent='center' alignItems="center">
                <Grid item><Typography variant='h6' component='h1' className={planCheck ? 'txt-disabled' : ''}>Plan Standar</Typography></Grid>
                <Grid item>
                    <Switch checked={planCheck} onChange={handleChange} name="checkedA" size='medium' color='default' />
                </Grid>
                <Grid item><Typography variant='h6' component='h1' className={!planCheck ? 'txt-disabled' : ''}>Plan Premium</Typography></Grid>
            </Grid>
            {/*-------------- SUSCRIPTIONS ---------------- */}
            <Card className={''} variant="outlined">
                <CardHeader
                    title={
                        <div className={'txt-inline'}>
                            <Typography variant='h4' component='h5'>{'S/.'}</Typography>
                            <Typography variant='h3' component='h5'>{amount}</Typography>
                            <Typography variant='h6' component='h5'>{'/AL MES'}</Typography>
                        </div>
                    }
                    titleTypographyProps={{ align: "center" }}
                    subheader={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                />
                <Divider />
                <CardContent>
                    <Grid item xs={12} md={12}>
                        <ListPlan planCheck={planCheck} />
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onPlanCkick}>SUSCRIBIRME</Button>
                </CardActions>
            </Card>
        </Typography>
    );
}
export default PlanDetails;