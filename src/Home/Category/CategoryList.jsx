import React, { Component } from 'react';
import CategoryDisplay from '../../PublicComponents/CategoryDisplay/CategroyDisplay';
import style from './CategoryList.module.css';

class CategoryList extends Component {
    state = {
        currentFocusList: [{}],
        currentFocusId: 0,
        rowCount: 4
    };
    componentDidMount() {
        const size = this.props.categoryList;
        const row = this.state.rowCount;
        const endPoint =
            this.state.currentFocusId + row > size
                ? size
                : this.state.currentFocusId + row;
        this.setState({
            categoryList: this.props.categoryList,
            currentFocusId: 0,
            currentFocusList: this.props.categoryList.slice(0, endPoint)
        });
    }
    leftClickEvent = () => {
        if (this.state.currentFocusId === 0) {
            return;
        } else {
            const newFocusId = this.state.currentFocusId - this.state.rowCount;
            const endPoint = this.state.currentFocusId;
            this.setState({
                currentFocusId: newFocusId,
                currentFocusList: this.state.categoryList.slice(
                    newFocusId,
                    endPoint
                )
            });
        }
    };

    rightClickEvent = () => {
        if (
            this.state.currentFocusId + this.state.rowCount >=
            this.state.categoryList.length
        ) {
            return;
        } else {
            const newFocusId = this.state.currentFocusId + this.state.rowCount;
            const endPoint =
                newFocusId + this.state.rowCount >=
                this.state.categoryList.length
                    ? this.state.categoryList.length - 1
                    : newFocusId + this.state.rowCount;
            this.setState({
                currentFocusId: newFocusId,
                currentFocusList: this.state.categoryList.slice(
                    newFocusId,
                    endPoint
                )
            });
        }
    };

    render() {
        return (
            <div className={style.categoryDisplay}>
                <p className={style.title}>Category</p>
                <div className={style.categoryList}>
                    <button key='leftButton' onClick={this.leftClickEvent}>
                        Prev
                    </button>
                    {this.state.currentFocusList.map((category, id) => {
                        return <CategoryDisplay key={id} item={category} />;
                    })}
                    <button
                        key='rightButton'
                        className={style.rightButton}
                        onClick={this.rightClickEvent}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}
export default CategoryList;
