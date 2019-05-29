import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import feedImg from '../feed.svg'
import profileImg from '../profile.svg'
import settingsImg from '../settings.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img alt="logo" src={ logo } />
                        <div>Zero</div>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links"><img src={ feedImg } alt="Feed" width="30px" /></Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu__links"><img src={ profileImg } alt="Profile" width="30px" /></Link>
                            </li>
                            <li>
                                <Link to="/settings" className="menu__links"><img src={ settingsImg } alt="Settings" width="30px" /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
