import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import styles from "./QuantityForm.module.css"

const QuantityForm = props => {

    return (
        <div>
        <label className={styles.label}> Quantity:</label>
        <input type="number" name="quantity" min="1" max={props.inventory} step="1" />
        </div>
    );
};

QuantityForm.propTypes = {
    inventory: PropTypes.string.isRequired
};

export default QuantityForm;
