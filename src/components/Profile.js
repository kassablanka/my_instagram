import React from 'react'
import User from './User'
import Palette from './Palette'

const Profile = () => {
    return (
        <div className="container profile" >
            <User
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Woman"
                name="Keweegen"
            /> 

            <Palette />
        </div>
    )
}

export default Profile
