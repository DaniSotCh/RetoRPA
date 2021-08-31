import React from 'react';
import HeaderChange from '../shared/HeaderChange';
import PlanDetails from '../forms/PlanDetails';
import PayDetails from '../forms/PayDetails';
import { Button, Drawer } from '@material-ui/core';
import SuccessPlan from './SuccessPlan';

export default class SuscriptionScreen extends React.Component {
    state = {
        onClick: false,
        planType: 'standar',
        amount: 29,
        successPlan: false,
    }

    onPlanCkick = (type) => {
        this.setState({ planType: type, onClick: true });
    }
    onChangeAmount = (value) => {
        this.setState({ amount: value })
    }
    onChangePlan = (amount, planType) => {
        this.setState({ amount, planType })
    }
    onPayCkick = () => {
        this.setState({ successPlan: true });
    }
    goHome = () => {
        this.setState({
            onClick: false,
            planType: 'standar',
            amount: 29,
            successPlan: false,
        });
    }

    render() {
        return (
            <div>
                <HeaderChange />
                {(!this.state.onClick && !this.state.successPlan) && <PlanDetails onPlanClick={this.onPlanCkick} onChangeAmount={this.onChangeAmount} />}
                {(this.state.onClick && !this.state.successPlan) && <PayDetails planType={this.state.planType} amount={this.state.amount} onChangePlan={this.onChangePlan} onPayCkick={this.onPayCkick} />}
                {this.state.successPlan && <SuccessPlan goHome={this.goHome} planType={this.state.planType} amount={this.state.amount}/>}
            </div>
        );
    }
}