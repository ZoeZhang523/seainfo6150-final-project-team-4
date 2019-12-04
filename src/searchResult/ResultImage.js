import React from 'react';
import PropTypes from 'prop-types';
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
