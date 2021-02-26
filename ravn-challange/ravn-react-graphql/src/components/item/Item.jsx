import React from 'react'

import './Item.css';

const Item = ({name}) => {

    return (
        <div className='card-item d-flex-row'>
            <div className="card-body">
                <h2 className='h2-text-default'>{name}</h2>
                <p className='p-text-low-emphasis'>Human from Tatooine</p> 
            </div>
            <button> x </button>           
        </div>
    )
}

export default Item
