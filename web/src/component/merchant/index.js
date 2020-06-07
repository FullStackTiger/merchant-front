import React, { Component } from 'react';
import Form from '../forms';
class Merchant extends Component {
    render() {
        return (
            <div className="main-intro">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div><h2>Start parsing Orders</h2></div>
                        <div> <h4>This is Version 1.00</h4></div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="col-sm-5"><Form /></div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        )
    }
}

export default Merchant;