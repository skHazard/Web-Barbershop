import React from 'react'
import { Link } from 'react-router'
import NavLink from '../src/components/NavLink'
import { IndexLink } from 'react-router'
import Home from '../src/components/Home'

export default React.createClass({
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><NavLink to="/for-men">Men</NavLink></li>
                    <li><NavLink to="/for-women">Women</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/masters">Masters</NavLink></li>
                    <li><NavLink to="/works">Our Works</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    </ul>
                {this.props.children || <Home/>}
            </div>
        )
    }
})