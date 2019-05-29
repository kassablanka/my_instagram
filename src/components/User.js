import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    render () {
        return (
            <Link to="/profile" className={ this.props.min ? "user min" : "user" }>
                <img src={this.props.src} alt={this.props.alt} ></img>
                <div>{this.props.name}</div>
            </Link>
        )
    }
}