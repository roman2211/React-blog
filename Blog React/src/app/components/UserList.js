import React from 'react';
import User from './User';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faInfoCircle,faListAlt} from '@fortawesome/fontawesome-free-solid'
import {browserHistory} from "react-router";

export default class UserList extends React.Component
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
        const FA = FontAwesomeIcon;
        if(!this.state.users.length) {
            return null;
        }
            const user = this.state.users[this.props.params.userId - 1];
            let users = this.props.params.userId ? <User single {...user} /> :
                                this.state.users.map((user, index) => {
                                    return <User key={index} {...user}/>
                                });

        return this.props.params.userId ?
        (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">
                            <FA icon={faInfoCircle} /> Информация о пользователе <span style={{'color':'#007bff'}}>{user.username}</span>
                        </h4>
                    </div>
                    {users}
                </div>
                <button className='btn btn-info float-right mt-2' onClick={browserHistory.goBack}>Вернуться</button>
            </div>
        ) :
        (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">
                            <FA icon={faListAlt} /> Список пользователей
                        </h4>
                    </div>
                    <div className="card-body">
                    {users}
                    </div>
                </div>
            <button className='btn btn-info float-right mt-2' onClick={browserHistory.goBack}>Вернуться</button>
        </div>
    ) ;

    }
}