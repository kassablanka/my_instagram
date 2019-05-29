import { async } from "q";

export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3001/'
    }

    getResouce = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json()
    }

    getAllPosts = async () => {
        const res = await this.getResouce('posts/')
        
        return res
    }

    getAllUsers = async () => {
        const res = await this.getResouce('posts/')

        return res.map(this._transformUsersPosts)
    }

    getAllPhotos = async () => {
        const res = await this.getResouce('posts/')

        return res.map(this._transformPhotosPosts)
    }

    _transformPhotosPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }

    _transformUsersPosts = (post) => {
        return {
            name: post.name,
            altname: post.altname,
            photo: post.photo,
            id: post.id
        }
    }
}