import React, { Component } from 'react'
import User from './User'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Woman"
                    name="Keweegen"
                    min
                />                
                <img src={ this.props.src } alt={ this.props.alt } />
                <div className="post__name">Keweegen</div>
                <div className="post__descr">Если вы ещё не на воркшопе — регистрируйтесь https://wep.wf/w9zzu0 Это бесплатно
С 25 по 28 мая пишем Инстаграм на Реакте и разбираемся, как учить эту библиотеку</div>
            </div>
        )
    }
}