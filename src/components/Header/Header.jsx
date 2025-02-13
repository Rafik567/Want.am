import React from 'react'
import './header.css'
import HeaderBody from './HeaderBody'
import HeaderBottom from './HeaderBottom'

const Header = () => {
    return (
        <>
            <div className="main">
                <div>
                    <img
                        src="https://want.am/wp-content/uploads/2024/11/logo.png"
                        className="img-want"
                        alt="Want.am Logo"
                    />
                </div>
                <div>
                    <button className="katalog">Կատալոգ</button>
                </div>
                <div>
                    <input type="text" placeholder="Փնտրել նվեր" className="inp" />
                </div>
                <div>
                    <i className="fa fa-heart icon-heart" style={{ fontSize: "36px" }}></i>
                    <i class="fa fa-briefcase icon-case" style={{ fontSize: "36px" }} ></i>

                </div>
                <div>
                    <button className='mutq'>Մուտք</button>
                </div>
            </div>
            <HeaderBody/>
            <HeaderBottom/>
        </>
    )
}

export default Header
