import React from 'react';
import User from './User';
import axios from 'axios';
import UserList from './UserList'

export default class ShortUserList extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            users: []
        };

        //Получение пользователей
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let { data } = response;

                this.setState({
                    users: data
                });
            })
    }

    render()
    {
        if(!this.state.users.length) {
            return null;
        }

        let users = this.state.users.map((user, index) => {
            return <User key={index} {user}>user.username</User>
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        );
    }
}