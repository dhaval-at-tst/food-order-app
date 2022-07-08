import classes from "./Card.module.css";
const Card = ({ className, children }) => {
    const classList = `${classes.card} ${className}`
    return (
        <div className={classList}>{children}</div>
    );
}

export default Card;
