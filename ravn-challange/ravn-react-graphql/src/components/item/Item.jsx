import React from 'react';
import {Link} from 'react-router-dom';

import * as IconName from "react-icons/md";

import './Item.css';

const Item = ({ id, name, item}) => {
    
    return (
        <section className='card-item d-flex-row'>
            
            <div className="card-body">
                <h2 className='h2-text-default'>{name}</h2>
                <p className='p-text-low-emphasis'>Human from Tatooine</p> 
            </div>
            <button className='btn-detail-card'><Link to={`/${id}`}><IconName.MdKeyboardArrowRight/></Link></button> 
                    
        </section>
    )
}

export default Item
