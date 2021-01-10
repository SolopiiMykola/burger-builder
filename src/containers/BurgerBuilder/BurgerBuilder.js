import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon: 0.8
};

class BurgerBuilder extends Component {

    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingridients) {
        const sum = Object.keys(ingridients)
            .map(igKey => {
                return ingridients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            })
            this.setState({purchasable: sum > 0})
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const pricedAdition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + pricedAdition;
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const pricedDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - pricedDeduction;
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert("You continue!");
    }

    render() {
        const disableInfo = {
            ...this.state.ingridients
        };

        for (let key in disableInfo) {
            disableInfo[key]  = disableInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingridients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice}></OrderSummary>
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                ingridientAdded={this.addIngridientHandler}
                ingridientRemoved={this.removeIngridientHandler}
                disabled={disableInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;