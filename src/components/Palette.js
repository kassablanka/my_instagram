import React, { Component } from 'react'
import InstaService from '../services/instaservice'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

export default class Photos extends Component {

    InstaService = new InstaService()

    state = {
        photos: [],
        error: false,
        loader: true
    }

    componentDidMount() {
        this.updatePhotos()
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
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
            const { src, alt, id } = item

            return (
                <img src={ src } alt={ alt } key={ id } />
            )
        })
    }

    render() {

        const { error, photos, loader } = this.state

        if(error) {
            return <ErrorMessage />
        } else if(!error && loader) {
            return <Loader />
        }

        const items = this.renderItems(photos)

        return(
            <div className="palette">{ items }</div>
        )
    }
}

