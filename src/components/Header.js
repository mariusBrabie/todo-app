import React from 'react'
import '../styles/header.css'

const Header = () => {
    return <div className="header">
        <div className="container">
            <h1 className="header__title">Todo App</h1>
            <h4 className="header__subtitle">What do you need to do ?</h4>
        </div>
    </div>
}

export default Header