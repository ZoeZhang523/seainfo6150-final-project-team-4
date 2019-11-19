import React from "react";
import PropTypes from 'prop-types';
import ItemDetail from './ItemDetail';
import ItemDetailSlide from './ItemDetailSlide';
import styles from './ItemDetailPage.module.css'


const ItemDetailPage = props => {
    return(
        <section className={styles.itemdetailcontainer}>
            <div >
                {props.items.map(item => {
                    if (item.name === "WholeHearted Grain Free All Life Stages Beef & Pea Formula Dry Dog Food"){
                        return <ItemDetail item={item} />
                    }
                    return
                })}
            </div>

            <div>
                 <p>Deliver It To Me</p>
                {props.users.map(user => {
                    if (user.name === "user1"){
                        return <ItemDetailSlide user={user}/>
                     }
                    return
                 })}
            </div>
        </section>
    )
}
ItemDetailPage.propTypes = {
    items: PropTypes.array.isRequired,
    user: PropTypes.array.isRequired
};
export default ItemDetailPage;
