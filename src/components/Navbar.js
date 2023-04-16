import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick ={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked='false'/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'?'Dark':'Light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// We set the prop types so that there is no error of datatypes while sending the props
// We use .isRequired so that our props don't go undefined
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// We set the default props so that they will be passed when we do not specify them
Navbar.defaultProps = {
    title: 'My-App',
    aboutText: 'About'
}