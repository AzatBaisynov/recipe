import React from 'react'
import Logo from '../images/Rectangle.png'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="header__right">
                    <nav className="header__nav">
                        <a href="#" className="header__link">Главная</a>
                        <a href="#" className="header__link">Recipes</a>
                        <a href="#" className="header__link">Meat</a>
                        <a href="#" className="header__link">About</a>
                        <a href="#" className="header__link">Blog</a>
                        <a href="#" className="header__link">Support</a>
                    </nav>
                    <button className="header__left_btn btn">Sign in</button>
                    <button className="header__right_btn btn">Request demo</button>
                </div>
            </div>
        </header>
    )
}