import React from "react";
import PropTypes from 'prop-types';
import ResultListItem from "./ResultListItem";
import styles from "./ResultList.module.css";


const ResultList = props => {
    return (
        <ul className={styles.container}>
            {props.items.map(item => (
            <li className={styles.item}>
                <ResultListItem item={item}/>
            </li>
            ))}
        </ul>
        )
};

ResultList.propTypes = {
    items: PropTypes.array.isRequired
};
export default ResultList;
