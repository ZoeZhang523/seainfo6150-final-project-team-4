import React from "react";
import ResultImage from "./ResultImage";
import styles from "./ResultListItem.module.css";

const ResultListItem = props => {
    return (
        <section >
            <div className={styles.itemContainer}>
                <ResultImage title={props.item.name} url={props.item.mainImage._url} id={props.item.id}/>
                <p>
                    <a href={"/Item-Detail-Page/" + props.item.id}>{props.item.name}</a>
                </p>
            </div>
            <div>
                <p className={styles.price}>
                    {"$ "+props.item.price}
                </p>
            </div>
        </section>

    )
}
export default ResultListItem;
