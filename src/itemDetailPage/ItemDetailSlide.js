import React from "react";
import PropTypes from 'prop-types';


const ItemDetailSlide = props => {
    return(

        <p>
            {props.user.address}
        </p>
    )
}

ItemDetailSlide.propTypes = {
    user: PropTypes.array.isRequired
};

export default ItemDetailSlide;
