import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngrediant/BurgerIngridient';

const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            <BurgerIngridient type="cheese" />
            <BurgerIngridient type="meat" />
            <BurgerIngridient type="bread-bottom" />
        </div> 
    )
}

export default Burger;