import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import User from './User'
import InstaService from '../services/instaservice'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'


export default class Users extends Component {

    InstaService = new InstaService()

    state = {
        users: [],
        error: false,
        loader: true,
    }

    componentDidMount() {
        this.updateUsers()
    }

    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false,
            loader: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loader: false
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const { name, altname, photo, id } = item

            return (
                <Link to="/profile" className="user min" key={id}>
                    <img src={photo} altname={altname} />
                    <div>{name}</div>
                </Link>
            )
        })
    }

    render() {

        const {error, users, loader} = this.state

        if(error) {
            return <ErrorMessage/>
        } else if(!error && loader) {
            return <Loader />
        }

        const items = this.renderItems(users)
        
        return(
            <div className="right">

                <User
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Woman"
                    name="Keweegen"
                /> 

                <div className="users__block">
                    { items }
                </div>

            </div>
        )

    }
}