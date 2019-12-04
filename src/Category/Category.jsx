import React, { Component } from 'react';
import items from '../data/item.json';
import styles from './Category.module.css';
import CategoryList from './CategoryList';

class Category extends Component {
    render() {
        let petCategory = this.props.match.params.petCategory;
        let usage = this.props.match.params.usage;
        let detailUsage = this.props.match.params.detailUsage;

        var category_dict = {};
        Object.values(items)
            .filter((item) => {
                return item.petCategory.toLowerCase() === petCategory
                    ? true
                    : false;
            })
            .filter((item) => {
                return typeof usage === 'undefined' || usage === item.usage
                    ? true
                    : false;
            })
            .filter((item) => {
                return typeof detailUsage === 'undefined' ||
                    detailUsage === item.detailUsage
                    ? true
                    : false;
            })
            .forEach((item) => {
                if (typeof category_dict[item.detailUsage] === 'undefined') {
                    category_dict[item.detailUsage] = [];
                }
                category_dict[item.detailUsage].push(item);
            });
        return (
            <div className={styles.container}>
                <h1 className={styles.petCategory}>
                    {petCategory.replace('_', ' ')}
                </h1>
                {Object.entries(category_dict).map(
                    ([keys, search_result_item_list]) => (
                        <CategoryList
                            key={petCategory + keys}
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
