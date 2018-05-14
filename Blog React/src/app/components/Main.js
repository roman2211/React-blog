import React from 'react'

export default class Main extends React.Component
{
    render()
    {
        return (
            <div className="col-md-8 blog-main">

                {this.props.children}

            </div>
        )
    }
}

