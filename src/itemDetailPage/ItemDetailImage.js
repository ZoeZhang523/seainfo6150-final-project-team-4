import React from 'react';
import PropTypes from 'prop-types'

const ItemDetailImage = props => {
    return (
            <img src={props.url} alt={props.title}/>
            /*<img src={props.detailImage._url} alt={props.detailImage.alt}/>*/
    );
};

ItemDetailImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ItemDetailImage;
