import React from 'react';
import PropTypes from 'prop-types';
import styles from "./QuantityForm.module.css"

const QuantityForm = props => {
    return (
        <form className={styles.form}>
            <label className={styles.label}> Quantity:</label>
            <input type="number" name="quantity" min="1" max={props.inventory} step="1" />
            <input className={styles.addtocart} type="submit" value={"add to cart"} />
        </form>

    );
};

QuantityForm.propTypes = {
    inventory: PropTypes.string.isRequired
};

export default QuantityForm;
