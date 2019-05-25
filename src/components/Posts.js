import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post alt="spider" src="https://images.pexels.com/photos/2317423/pexels-photo-2317423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  />
                <Post alt="city" src="https://images.pexels.com/photos/2338113/pexels-photo-2338113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  />
            </div>
        )
    }
}

