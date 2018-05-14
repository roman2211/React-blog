import React from 'react'
import {Link} from 'react-router'

export default class Menu extends React.Component
{
    render()
    {
        return (
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex">
                    <Link className="p-2 text-muted" to="/">Главная</Link>
                    <Link className="p-2 text-muted" to="/users">Пользователи</Link>
                </nav>
            </div>
        )
    }
}
