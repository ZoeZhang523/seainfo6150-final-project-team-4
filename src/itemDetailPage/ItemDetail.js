import React from "react";
import PropTypes from 'prop-types';
import ItemDetailImage from './ItemDetailImage';
import QuantityForm from './QuantityForm'
import ItemDetailPage from "./ItemDetailPage";
import styles from "./ItemDetail.module.css";

const ItemDetail = props => {
    return (
        <section className={styles.itemdetailcontainer}>
            <div>
                <ItemDetailImage title={props.item.name} detailImages={props.item.detailImages}/>
            </div>
            <div>
            <p className={styles.name}>{props.item.name}</p>
            <p className={styles.price}>{props.item.price}</p>
            <QuantityForm inventory={props.item.inventory}/>
            <form className={styles.addtocartform} action={"/Cart"}>
                <input className={styles.addtocart} type="submit" value={"add to cart"} />
            </form>
            </div>

        </section>
    )
};
ItemDetail.propTypes = {
    item: PropTypes.array.isRequired,
};
export default ItemDetail;
