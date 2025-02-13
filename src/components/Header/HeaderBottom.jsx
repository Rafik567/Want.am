import React from 'react'
import './header.css'
import { tesak } from '../../DataBase'
const HeaderBottom = () => {
    return (
        <>
            <div className="header-bottom ">
                {tesak.map((item) => (
                    <div key={item.id} className="tesak-item">
                        <img src={item.image} alt={item.text} className="tesak-image" />
                        <p className="tesak-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HeaderBottom