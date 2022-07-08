import React, { Fragment } from 'react';
import headerImg from "../../assets/reactmeals-header.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onOpenCart }) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onOpenCart={onOpenCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImg} alt='A table foull of delicious food!' />
            </div>
        </Fragment>
    );
}

export default Header;