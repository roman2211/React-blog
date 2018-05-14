import React from 'react';
import {Link} from 'react-router'

export default class Article extends React.Component

{
    render()
    {
        let link = "/users/" + this.props.userId + "/articles/" + this.props.id;
            return this.props.single ?
            (
                <div className="card-body">
                    <p>{this.props.body}</p>
                </div>
            ) :
            (
                <p>{this.props.id}. <Link to={link}>{this.props.title}</Link></p>
            );

    }
}