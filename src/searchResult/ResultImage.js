import React from 'react';
import styles from './ResultImage.module.css';

const ResultImage = (props) => {
    return (
        <a href={'/Item-Detail-Page/' + props.id}>
            <img
            className={styles.mainimage}
            src={props.url}
            alt={props.name}
            />
        </a>
    );
};

export default ResultImage;
