import React from "react";

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <p className='title'>{title.toUpperCase()}</p>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;