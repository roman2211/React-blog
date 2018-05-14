import React from 'react';
import {Link} from 'react-router'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faUser, faAt, faGlobe, faPhoneSquare,faListAlt} from '@fortawesome/fontawesome-free-solid';

export default class User extends React.Component

{
    render()
    {
        const FA = FontAwesomeIcon;
        const link = "/users/" + this.props.id;
        const articles = "/users/" + this.props.id + "/articles";
        if (this.props.single) {
            return (
                <div className="card-body">
                    <h5><FA icon={faUser} /> {this.props.name}</h5>
                    <hr/>
                    <p><FA icon={faAt} /> {this.props.email}</p>
                    <p><FA icon={faGlobe} /> {this.props.website}</p>
                    <p><FA icon={faPhoneSquare} /> {this.props.phone}</p>
                    <Link to={articles}><FA icon={faListAlt} /> Список статей пользователя</Link>
                </div>
            )
        }
        return (
            <span>
                <Link to={link}>{this.props.username} </Link> ({this.props.name}) <br />
            </span>
        )
    }
}