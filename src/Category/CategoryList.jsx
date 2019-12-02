import React,{Component} from 'react';
import PropTypes from 'prop-types'
import ResultListItem from "../searchResult/ResultListItem";

class CategoryList extends Component {
    constructor(props){
        super(props);
        this.state = {
            keys:this.props.keys,
            search_result_item_list:this.props.search_result_item_list
        };
    };

    render() {
        return (
            <div>
                <div>{this.state.keys.replace("_", " ")}</div>
                {
                    Object.values(this.state.search_result_item_list).map((item) =>(
                        <ResultListItem item={item}/>
                    ))

                }

            </div>
    )
    }
}

CategoryList.propTypes = {
    keys: PropTypes.string.isRequired,
    search_result_item_list: PropTypes.array.isRequired
};
export default CategoryList;
