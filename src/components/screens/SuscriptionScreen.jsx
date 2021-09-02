import React, { useState } from 'react';
import HeaderChange from '../shared/HeaderChange';
import PlanDetails from '../forms/PlanDetails';
import PayDetails from '../forms/PayDetails';
import SuccessPlan from './SuccessPlan';
import { Router } from "@reach/router"

function SuscriptionScreen() {
    const [onClick, setOnClick] = useState(false);
    const [planType, setPlanType] = useState('standar');
    const [amount, setAmount] = useState(29);
    const [successPlan, setSuccessPlan] = useState(false);

    const onPlanCkick = (type) => {
        setOnClick(type);
        setPlanType(true);
    }
    const onChangeAmount = (value) => {
        setAmount(value);
    }
    const onChangePlan = (amount, planType) => {
        setAmount(amount);
        setPlanType(planType);
    }
    const onPayCkick = () => {
        setSuccessPlan(true);
    }
    const goHome = () => {
        setOnClick(false);
        setPlanType('standar');
        setAmount(29);
        setSuccessPlan(false);
    }
    return (
        <div>
            <HeaderChange suscriptionPlan={!(onClick && !successPlan)} goHome={goHome} />
            <Router>
                <PlanDetails path="/" onPlanClick={onPlanCkick} onChangeAmount={onChangeAmount} />
                <PayDetails path="/datos" planType={planType} amount={amount} onChangePlan={onChangePlan} onPayCkick={onPayCkick} />
                <SuccessPlan path="/confirmacion" goHome={goHome} planType={planType} amount={amount} />
            </Router>
        </div>
    );
}

export default SuscriptionScreen;