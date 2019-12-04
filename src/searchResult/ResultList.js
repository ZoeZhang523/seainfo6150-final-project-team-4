import React, { Component } from 'react';
import items from '../data/item.json';
import ResultListItem from './ResultListItem';
import styles from './ResultList.module.css';

class ResultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    }

    componentDidMount() {
        this.setState({
            keyword: this.props.match.params.keyword
        });
    }

    render() {
        let search_result_dict = {};
        Object.values(items).forEach((item, key) => {
            if (item.name.toLowerCase().includes(this.state.keyword)) {
                search_result_dict[key] = item;
            }
        });
        return (
            <div className={styles.container}>
                {Object.values(search_result_dict).map((search_result_item) => (
                    <ResultListItem
                        item={search_result_item}
                        key={search_result_item.id}
                    />
                ))}
            </div>
        );
    }
}

export default ResultList;
