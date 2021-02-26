import React from 'react';
import * as IconName from "react-icons/md";

import './Item.css';

const Item = ({name, item}) => {
    
    return (
        <div className='card-item d-flex-row'>
            <div className="card-body">
                <h2 className='h2-text-default'>{name}</h2>
                <p className='p-text-low-emphasis'>Human from Tatooine</p> 
            </div>
            <button className='btn-detail-card'><IconName.MdKeyboardArrowRight/></button>           
        </div>
    )
}

export default Item
