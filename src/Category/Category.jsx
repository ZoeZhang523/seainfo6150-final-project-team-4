import React,{Component} from 'react';
import items from "../data/item.json";
import styles from "./Category.module.css";
import ResultListItem from "../searchResult/ResultListItem";
import CategoryList from "./CategoryList";


class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            petCategory:'',
            usage:'',
            detailUsage:''
        };
    };

    componentDidMount(){
        console.log(this.props);
        this.setState({
            petCategory:this.props.match.params.petCategory,
            usage:this.props.match.params.usage,
            detailUsage:this.props.match.params.detailUsage,
        })
    }
    render() {
        let category_dict = {};
        {Object.values(items).map((item, key) => {
            if(item.detailUsage.toLowerCase()===(this.state.detailUsage) ){
                if(item.usage.toLowerCase()===(this.state.usage) && item.petCategory.toLowerCase()===(this.state.petCategory)){
                    if(typeof category_dict[item.detailUsage] === 'undefined'){
                        category_dict[item.detailUsage] = [];
                    }
                    category_dict[item.detailUsage].push(item);
                    }
            }else if(item.usage.toLowerCase()===(this.state.usage) && typeof(this.state.detailUsage) === 'undefined'){
                if(item.petCategory.toLowerCase()===(this.state.petCategory)){
                    if(typeof category_dict[item.detailUsage] === 'undefined'){
                        category_dict[item.detailUsage] = [];
                    }
                    category_dict[item.detailUsage].push(item);
                }
            }else if(item.petCategory.toLowerCase()===(this.state.petCategory) && typeof(this.state.detailUsage) === 'undefined' && typeof(this.state.usage) === 'undefined'){
                if(typeof category_dict[item.detailUsage] === 'undefined'){
                    category_dict[item.detailUsage] = [];
                }
                category_dict[item.detailUsage].push(item);
            }
        }
        )}
        console.log(category_dict);
        return (
            <div className={styles.container}>
                <h1 className={styles.petCategory}>{this.state.petCategory}</h1>
                {
                    Object.entries(category_dict).map(([keys, search_result_item_list]) => (
                            <CategoryList search_result_item_list={search_result_item_list} keys={keys}/>
                        ))
                }
            </div>)
    }
}

export default Category;
