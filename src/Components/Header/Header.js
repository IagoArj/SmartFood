import React, { Component } from 'react';
import "./Header.css"
import Logo from '../../Assets/logo.svg'
class Header extends Component {

    render() {
        return (
            <div className='header-box'>
                <div className='logo-box'>
                    <img className='logo-icon' src={Logo}></img>
                    <div className='break-bar' />
                    <div className='logo-text'>FOOD</div>
                </div>
                <ul className='links-page-box'>
                    <li className='list-link'><a className='links-page' href='/'>Home</a></li>
                    <li className='list-link'><a className='links-page' href='/dessert'>Dessert</a></li>
                    <li className='list-link'><a className='links-page' href='/appetizer'>Appetizer</a></li>
                    <li className='list-link'><a className='links-page' href='/meal'>Meal</a></li>
                    <li className='list-link'><a className='links-page' href='/world-cuisine'>World Cuisine</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;