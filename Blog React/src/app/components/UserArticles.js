import React from 'react';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faListAlt,faFileAlt} from '@fortawesome/fontawesome-free-solid'
import Article from "./Article";
import {browserHistory} from "react-router";
import UserComments from "./UserComments";

export default class UserArticles extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            articles: []
        };

        //Получение пользователей
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let { data } = response;

                this.setState({
                    articles: data
                });
            })
    }

    render()
    {
        const FA = FontAwesomeIcon;
        if(!this.state.articles.length) {
            return null;
        }

       const article = this.state.articles[this.props.params.id - 1];
       let articles =   this.props.params.id ? <Article single {...article} /> :
                                this.state.articles.map((article, index) => {
                                    if (article.userId === +this.props.params.userId ) {
                                        return <Article key={index} {...article}/>
                                    }
                                });

        return this.props.params.id ?
        (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">
                            <FA icon={faFileAlt} /> {article.title}
                        </h4>
                    </div>
                        {articles}
                </div>
                <UserComments postId = {this.props.params.id} />
                <button className='btn btn-info float-right mt-2' onClick={browserHistory.goBack}>Вернуться</button>
            </div>
                ) :
        (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">
                            <FA icon={faListAlt} /> Список статей
                        </h4>
                    </div>
                    <div className="card-body">
                    {articles}
                    </div>
                </div>
                <button className='btn btn-info float-right mt-2' onClick={browserHistory.goBack}>Вернуться</button>
            </div>
        ) ;

    }
}