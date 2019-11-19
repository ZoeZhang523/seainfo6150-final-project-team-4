import React from 'react';
import ResultList from './ResultList';
import item from "../data/item.json"

function SearchResultIndex() {
    return (
        <div>
            <ResultList items={Object.values(item)} />
        </div>
    );
}

export default SearchResultIndex;
