import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className='row'>
                    <div className='col-sm-2'><Link to='/'><div className="main-title">Swift Ordering</div></Link></div>
                    <div className='col-sm-2'><Link to='/dashboard'><div className="main-title">Dashboard</div></Link></div>
                    <div className='col-sm-8'></div>
                </div>
            </header>
        )
    }
}

export default Header;