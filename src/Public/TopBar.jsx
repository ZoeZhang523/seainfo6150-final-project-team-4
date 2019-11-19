import React, {Component} from 'react';
import './TopBar.css';
import { BrowserRouter as Link } from "react-router-dom";

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: '',
        }
    }
    handleChange(event){
        this.setState({
            searchResult: event.target.value
        })
    }
    render() {
        return (
            <div className='topBar'>
                <div className='logo'>
                    <Link to='/' onlyActiveOnIndex={true}><img id='logo' src='https://img.icons8.com/cotton/64/000000/cat--v3.png' alt='' /></Link>
                </div>
                <div className='search_box'>
                    <input className='search_text' />
                    <button 
                    className='search_btn' 
                    onClick={() => this.props.history.push('/searchresult')}>
                    Search
                    </button>
                </div>
                <div className='cart'>
                    <Link to='/cart'><img id='cart' src='https://raw.githubusercontent.com/baizn/shop-website/master/resource/img/shopcar.png' alt='cart'/></Link>
                </div> 
                <div className='account'>
                    <Link to='/Login'><img id='account' src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg' alt='account'/></Link>
                </div>
            </div>
        );
    }
}

export default TopBar;