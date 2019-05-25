import React, { Component } from 'react'
import User from './User'

export default function Users() {
    return(
        <div className="right">

            <User
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Woman"
                name="Keweegen"
            /> 

            <div className="users__block">
                <User
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Woman"
                    name="Keweegen"
                    min
                /> 
                <User
                    src="https://images.pexels.com/photos/1917785/pexels-photo-1917785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Woman"
                    name="name"
                    min
                /> 
                <User
                    src="https://images.pexels.com/photos/2316911/pexels-photo-2316911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Woman"
                    name="infiniti"
                    min
                /> 
                <User
                    src="https://images.pexels.com/photos/1779536/pexels-photo-1779536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Woman"
                    name="linvitks"
                    min
                /> 
            </div>

        </div>
    )
}