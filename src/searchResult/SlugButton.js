import React from "react";
import styles from "./SlugButton.module.css";


class SlugButton extends React.Component {

    buttonOnClick = (e)=>{
        window.location.href = "/Item-Detail-Page/" + this.props.id;
    };

    render() {
        return (
            <button className={styles.button} onClick={this.buttonOnClick}>{this.props.buttonText}</button>
        );
    }
}

export default SlugButton;
