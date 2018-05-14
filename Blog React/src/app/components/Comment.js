import React from 'react';
import {Link} from 'react-router'

export default class Comment extends React.Component

{
    render()
    {
            return (
                <div className="card-body">
                    <p className='comment-author'>{this.props.name} (#{this.props.id})</p>
                    <p>{this.props.body}</p>
                </div>
            )
    }
}