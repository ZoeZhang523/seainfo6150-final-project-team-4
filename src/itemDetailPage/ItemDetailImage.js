import React, { Component } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import styles from './ItemDetailImage.module.css';
=======
import styles from "./ItemDetailImage.module.css"
>>>>>>> 2b67c6a59c648557328dde2162caa208af022b8d

class ItemDetailImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.detailImages[0]
        };
    }

    render() {
        const clickImage = (detailImageSrc) => {
            this.setState({
                url: detailImageSrc
            });
        };
        return (
            <div className={styles.imageContainer}>
<<<<<<< HEAD
                <img
                    className={styles.imageState}
                    src={this.state.url}
                    alt='alt'
                />
                {this.props.detailImages.map((detailImageSrc) => (
                    <img
                        className={styles.imageButton}
                        src={detailImageSrc}
                        onClick={() => clickImage(detailImageSrc)}
                        alt='alt'
                    />
=======
            <img className={styles.imageState} src={this.state.url} alt={this.state.url}/>
                {this.props.detailImages.map((detailImageSrc)=>(
                <img className={styles.imageButton}
                     key={detailImageSrc}
                     alt={detailImageSrc}
                     src={detailImageSrc} onClick={() => clickImage(detailImageSrc)} />
>>>>>>> 2b67c6a59c648557328dde2162caa208af022b8d
                ))}
            </div>
        );
    }
}

export default ItemDetailImage;
