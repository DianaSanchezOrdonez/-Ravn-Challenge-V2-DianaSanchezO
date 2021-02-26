import React from 'react';

import './Detail.css'

const Detail = ({detail}) => {
   
    return (
        <section className='section-detail d-flex-column'>

            <h2 className='h2-text-default margin-2'>General Information</h2>
            <div className='detail d-flex-row '>
                <p className='text-light'>Eye Color</p>
                <h2 className='h2-text-default'>{detail.eyeColor}</h2>
            </div>
            <div className='detail d-flex-row '>
                <p className='text-light'>Hair Color</p>
                <h2 className='h2-text-default'>{detail.hairColor}</h2>
            </div>
            <div className='detail d-flex-row '>
                <p className='text-light'>Skin Color</p>
                <h2 className='h2-text-default'>{detail.skinColor}</h2>
            </div>
            <div className='detail d-flex-row '>
                <p className='text-light'>Birth Year</p>
                <h2 className='h2-text-default'>{detail.birthYear}</h2>
            </div>
            <h2 className='h2-text-default  margin-2'>Vehicles</h2>
            {
                (detail.starshipConnection.starships) ? detail.starshipConnection.starships.map((starship, index) => { return ( <div key={index} className='detail'><p  className='text-light'>{starship.name}</p></div>) }) : null
            }
        
        </section>
    )
}

export default Detail;
