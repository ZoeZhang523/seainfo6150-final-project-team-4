import React, { Component } from 'react';
import items from '../data/item.json';
import styles from './Category.module.css';
import CategoryList from './CategoryList';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petCategory: '',
            usage: '',
            detailUsage: ''
        };
    }

    componentDidMount() {
        this.setState({
            petCategory: this.props.match.params.petCategory,
            usage: this.props.match.params.usage,
            detailUsage: this.props.match.params.detailUsage
        });
    }

    render() {
        let petCategory = this.props.match.params.petCategory;
        let usage = this.props.match.params.usage;
        let detailUsage = this.props.match.params.detailUsage;
        let category_dict = {};
        Object.values(items).map((item) => {
            if (item.detailUsage.toLowerCase() === detailUsage) {
                if (
                    item.usage.toLowerCase() === usage &&
                    item.petCategory.toLowerCase() === petCategory
                ) {
                    if (
                        typeof category_dict[item.detailUsage] === 'undefined'
                    ) {
                        category_dict[item.detailUsage] = [];
                    }
                    category_dict[item.detailUsage].push(item);
                }
            } else if (
                item.usage.toLowerCase() === usage &&
                typeof detailUsage === 'undefined'
            ) {
                if (item.petCategory.toLowerCase() === petCategory) {
                    if (
                        typeof category_dict[item.detailUsage] === 'undefined'
                    ) {
                        category_dict[item.detailUsage] = [];
                    }
                    category_dict[item.detailUsage].push(item);
                }
            } else if (
                item.petCategory.toLowerCase() === petCategory &&
                typeof detailUsage === 'undefined' &&
                typeof usage === 'undefined'
            ) {
                if (typeof category_dict[item.detailUsage] === 'undefined') {
                    category_dict[item.detailUsage] = [];
                }
                category_dict[item.detailUsage].push(item);
            }
        });
        return (
            <div className={styles.container}>
                <h1 className={styles.petCategory}>
                    {petCategory.replace('_', ' ')}
                </h1>
                {Object.entries(category_dict).map(
                    ([keys, search_result_item_list]) => (
                        <CategoryList
                            key={keys}
                            search_result_item_list={search_result_item_list}
                            keys={keys}
                        />
                    )
                )}
            </div>
        );
    }
}

export default Category;
