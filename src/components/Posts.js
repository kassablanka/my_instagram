import React, { Component } from 'react'
import User from './User'
import InstaService from '../services/instaservice'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

export default class Posts extends Component {

    InstaService = new InstaService()

    state = {
        posts: [],
        error: false,
        loader: true
    }

    componentDidMount() {
        this.updatePosts()
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false,
            loader: false,
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
            const { name, altname, photo, src, alt, descr, id } = item

            return (
                <div className="post" key={ id }>
                    <User
                        src={ photo }
                        alt={ altname }
                        name={ name }
                        min
                    />                
                    <img src={ src } alt={ alt } />
                    <div className="post__name">{ name}</div>
                    <div className="post__descr">{ descr }</div>
                </div>
            )
        })
    }

    render() {

        const { error, posts, loader } = this.state

        if(error) {
            return <ErrorMessage />
        } else if (!error && loader) {
            return <Loader />
        }

        const items = this.renderItems(posts)

        return(
            <div className="left">{ items }</div>
        )
    }
}

