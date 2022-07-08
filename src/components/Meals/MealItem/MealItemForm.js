import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from './../../UI/Input';

const MealItemForm = ({ id, onAddToCart }) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = +amountInputRef.current.value.trim();

        if (!enteredAmount || enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmount);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: `amount_${id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button type="submit">+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}

export default MealItemForm;