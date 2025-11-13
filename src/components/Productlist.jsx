import React from 'react';
import { products } from './products';
import Productitem from './Productitem';

function Productlist(props) {

    let productitems=products.map(
        (item)=><Productitem p_item={item} key={item.id}/>
    )

    return (
        <div>
            {productitems}
        </div>
    );
}

export default Productlist;