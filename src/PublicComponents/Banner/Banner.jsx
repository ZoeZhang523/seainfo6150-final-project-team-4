import React, { Component } from 'react';
import style from './Banner.module.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [{}],
            currentFocus: 0
        };
    }
    componentDidMount() {
        this.setState({
            imgList: this.props.imgList,
            currentFocus: 0
        });
    }

    leftClickEvent = () => {
        var id = this.state.currentFocus;
        if (id === 0) {
            id = this.state.imgList.length - 1;
        } else {
            id--;
        }
        this.setState({
            currentFocus: id
        });
    };
    rightClickEvent = () => {
        var id = this.state.currentFocus;
        if (id === this.state.imgList.length - 1) {
            id = 0;
        } else {
            id++;
        }
        this.setState({
            currentFocus: id
        });
    };

    render() {
        return (
            <div className={style.banner}>
                <button onClick={this.leftClickEvent}> Prev </button>
                <a
                    href={this.state.imgList[this.state.currentFocus].link}
                    className={style.mainImage}>
                    <img
                        className={style.image}
                        src={this.state.imgList[this.state.currentFocus].img}
                        alt='BannerImg'
                    />
                </a>
                <button onClick={this.rightClickEvent}> Next </button>
            </div>
        );
    }
}

export default Banner;
