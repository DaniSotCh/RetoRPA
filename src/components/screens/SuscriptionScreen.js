import React from 'react';
import HeaderChange from '../shared/HeaderChange';
import PlanDetails from '../forms/PlanDetails';
import PayDetails from '../forms/PayDetails';
import { Button, Drawer } from '@material-ui/core';

export default class SuscriptionScreen extends React.Component {
    state = {
        onClick: false,
        planType: 'standar',
        amount: 29
    }

    onPlanCkick = (type) => {
        this.setState({ planType: type, onClick: true });
    }
    onChangeAmount = (value) => {
        this.setState({ amount: value })
    }

    render() {
        return (
            <div>
                <HeaderChange />
                {!this.state.onClick && <PlanDetails onPlanClick={this.onPlanCkick} onChangeAmount={this.onChangeAmount}/>}
                {this.state.onClick && <PayDetails planType={this.state.planType} amount={this.state.amount} />}
            </div>
        );
    }
}