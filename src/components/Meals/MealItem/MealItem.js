import { useContext } from 'react';
import CartContext from './../../../store/cart-context';
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm';

const MealItem = ({ meal }) => {

    const cartCtx = useContext(CartContext);

    const { id, name, description, price } = meal;

    const formatedPrice = `$${price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({ ...meal, amount });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formatedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default MealItem;