import React from "react";
import ResultImage from "./ResultImage";
import SlugButton from "./SlugButton";
import styles from "./ResultListItem.module.css";

const ResultListItem = props => {
    return (
        <section className={styles.itemContainer}>
            <div>
                <ResultImage title={props.item.name} url={props.item.mainImage._url} id={props.item.id}/>
                <p>
                    <a href={"/Item-Detail-Page/" + props.item.id}>{props.item.name}</a>
                </p>
            </div>
            <SlugButton buttonText={props.item.price} id={props.item.id} > </SlugButton>
        </section>
    )
}
export default ResultListItem;
