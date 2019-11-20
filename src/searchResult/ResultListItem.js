import React from "react";
import ResultImage from "./ResultImage";
import SlugButton from "./SlugButton";
import styles from "./ResultListItem.module.css";

const ResultListItem = props => {
    return (
        <section className={styles.itemContainer}>
            <div>
                <ResultImage title={props.item.name} url={props.item.mainImage._url}/>
                <p>
                    <a href="/Item-Detail-Page">{props.item.name}</a>
                </p>
            </div>
            <SlugButton buttonText={props.item.price} > </SlugButton>
        </section>
    )
}
export default ResultListItem;
