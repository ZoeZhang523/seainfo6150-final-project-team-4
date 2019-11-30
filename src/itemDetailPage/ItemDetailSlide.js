import React from "react";
import PropTypes from 'prop-types';
import styles from "./ItemDetailSlide.module.css";


const ItemDetailSlide = props => {
    return(
        <div>
            <p>
                {props.user.address}
            </p>
            <form className={styles.addtocartform} action={"/Cart"}>
                <input className={styles.addtocart} type="submit" value={"add to cart"} />
            </form>
        </div>

    )
}

ItemDetailSlide.propTypes = {
    user: PropTypes.array.isRequired
};

export default ItemDetailSlide;
