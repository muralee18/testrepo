import React from 'react';
import Rating from './Rating';

function Productitem({p_item}) {
    return (
        <div
        style={{backgroundColor:"cadetblue",
            width:"200px",
            margin:"10px"
        }}
        >
            <h2>{p_item.name}</h2>
            <h4>{p_item.price}</h4>
            <Rating value={p_item.rating}/>
            {   p_item.instock?<button>Buy now</button>:<p style={{color:"red"}}>Outoff stock</p>
                }
            <button>add to cart</button>
        </div>
    );
}

export default Productitem;
//cond?true statement:false statement