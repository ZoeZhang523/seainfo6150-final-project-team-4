import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from "./QuantityForm.module.css"


class QuantityForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 1
        };
    }

    leftClickEvent = () => {
        let num = this.state.currentNumber;
        if (num !== 1) {
            this.setState({
                currentNumber: this.state.currentNumber-1
            });
        }

    };
    rightClickEvent = () => {
        let num = this.state.currentNumber;
        if (num < this.props.inventory) {
            this.setState({
                currentNumber: this.state.currentNumber+1
            });
        }
    };

    render() {
        return (
            <div className={styles.quantityForm}>
                <p className={styles.quantity}>Qty</p>
                <button className={styles.changeButton} onClick={this.leftClickEvent}> - </button>
                <p className={styles.quantity}>{this.state.currentNumber}</p>
                <button className={styles.changeButton} onClick={this.rightClickEvent}> + </button>
            </div>
        );
    }
}


QuantityForm.propTypes = {
    inventory: PropTypes.string.isRequired
};

export default QuantityForm;
