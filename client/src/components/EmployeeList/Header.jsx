import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="content-header">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                <h1 className="main-title">Employee List</h1>
                </div>
                <div className="d-flex flex-wrap">
                <div className="search-group-field mb-2 mb-md-0 mr-2" style={{width:' 230px'}}>
                </div>	
                <button type="button" onClick={this.props.handleClick} className="btn btn-primary" data-toggle="modal" data-target="#RandomSelectEmployee">Employee Draw</button>
                </div>
            </div>
            </div>
        )
    }
}
