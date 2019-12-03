import React,{Component} from "react";
import ItemDetail from './ItemDetail';
import styles from './ItemDetailPage.module.css';
import items from '../data/item.json'


class ItemDetailPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            Id:''
        };
    };

    componentDidMount(){
        console.log(this.props);
        this.setState({
            Id:this.props.match.params.Id
        })
    }

    render() {
        return(
            <section className={styles.itemdetailcontainer}>
                {Object.values(items).map(item => {
                    if (item.id === this.state.Id){
                        return <ItemDetail item={item} />
                    }
                    return
                })}
            </section>
        )
    }
}

export default ItemDetailPage;
