import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Switch, Typography } from '@material-ui/core';
import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ListPlan from '../shared/ListPlan';

export default class PlanDetails extends React.Component {
    state = {
        planCheck: false,
        amount: 29
    }

    handleChange = (event) => {
        let value = event.target.checked ? 59 : 29;
        this.setState({
            planCheck: event.target.checked,
            amount: value
        }, () => this.props.onChangeAmount(value));
    };

    onPlanCkick = (event) => {
        let type = !this.state.planCheck ? 'standar' : 'premium';
        this.props.onPlanClick(type);
    }

    render() {
        return (
            <Typography component="div">
                <Grid component="label" container justifyContent='center' alignItems="center">
                    <Grid item><Typography variant='h6' component='h1' className={this.state.planCheck ? 'txt-disabled' : ''}>Plan Standar</Typography></Grid>
                    <Grid item>
                        <Switch checked={this.state.planCheck} onChange={this.handleChange} name="checkedA" size='medium' color='default' />
                    </Grid>
                    <Grid item><Typography variant='h6' component='h1' className={!this.state.planCheck ? 'txt-disabled' : ''}>Plan Premium</Typography></Grid>
                </Grid>
                {/*-------------- SUSCRIPTIONS ---------------- */}
                <Card className={''} variant="outlined">
                    <CardHeader
                        title={
                            <div className={'txt-inline'}>
                                <Typography variant='h4' component='h5'>{'S/.'}</Typography>
                                <Typography variant='h3' component='h5'>{this.state.amount}</Typography>
                                <Typography variant='h6' component='h5'>{'/AL MES'}</Typography>
                            </div>
                        }
                        titleTypographyProps={{ align: "center" }}
                        subheader={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                    />
                    <Divider />
                    <CardContent>
                        <Grid item xs={12} md={12}>
                            <ListPlan planCheck={this.state.planCheck} />
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.onPlanCkick}>SUSCRIBIRME</Button>
                    </CardActions>
                </Card>
            </Typography>
        );
    }
}