import React from "react";
import PropTypes from 'prop-types';
import ItemDetailImage from './ItemDetailImage';
import QuantityForm from './QuantityForm'
import styles from "./ItemDetail.module.css";

const ItemDetail = props => {
    return (
        <section className={styles.itemdetailcontainer}>
            <div>
                <ItemDetailImage title={props.item.name} detailImages={props.item.detailImages}/>
            </div>
            <div>
            <p className={styles.name}>{props.item.name}</p>
            <p className={styles.price}>{"$" + props.item.price}</p>
            <QuantityForm inventory={props.item.inventory}/>
            <form className={styles.addToCartForm} action={"/Cart"}>
                <input className={styles.addToCart} type="submit" value={"add to cart"} />
            </form>
            </div>
            <div className={styles.description}>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <p className={styles.descriptionText}>{props.item.Description.replace("\n"," ")}</p>
            </div>

        </section>
    )
};
ItemDetail.propTypes = {
    item: PropTypes.array.isRequired,
};
export default ItemDetail;
