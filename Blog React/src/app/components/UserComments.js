import React from 'react';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faListAlt,faFileAlt} from '@fortawesome/fontawesome-free-solid'
import Comment from "./Comment";
import {browserHistory} from "react-router";

export default class UserComments extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            comments: []
        };

        //Получение пользователей
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                let { data } = response;

                this.setState({
                    comments: data
                });
            })
    }

    render()
    {
        const FA = FontAwesomeIcon;
        if(!this.state.comments.length) {
            return null;
        }

       // const comment = this.state.comments[this.props.params.id - 1];
       let comments = this.state.comments.map((comment, index) => {
                                    if (comment.postId === +this.props.postId ) {
                                        return <Comment key={index} {...comment}/>
                                    }
                                });

        return (
        // (
        //     <div>
        //         <div className="card">
        //             <div className="card-header">
        //                 <h4 className="card-title">
        //                     <FA icon={faFileAlt} /> {article.title}
        //                 </h4>
        //             </div>
        //                 {comments}
        //         </div>
        //         <button className='btn btn-info float-right mt-2' onClick={browserHistory.goBack}>Вернуться</button>
        //     </div>
        //         ) :

                <div className="card comments mt-2">
                    <div className="card-header">
                        <h6 className="card-title">
                            <FA icon={faListAlt} /> Список комментариев
                        </h6>
                    </div>
                    <div className="card-body">
                    {comments}
                    </div>
                </div>
        ) ;

    }
}