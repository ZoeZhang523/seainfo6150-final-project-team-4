import React from 'react';
import ItemDetailPage from './ItemDetailPage';
import item from '../data/item.json'
import user from "../data/user";

function ItemDetailIndex() {
    return (
        <div>
            <ItemDetailPage items={Object.values(item)} users={Object.values(user)}/>
        </div>
    );
}

export default ItemDetailIndex;
