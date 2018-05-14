import React from 'react'
import ReactDOM from 'react-dom'
import Page from './app/layouts/Page'
import Index from './app/components/route/Index'
import About from './app/components/route/About'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import MainContent from "./app/layouts/MainContent";
import Main from "./app/components/Main";
import UserList from "./app/components/UserList";
import Sidebar from "./app/components/Sidebar";
import UserArticles from "./app/components/UserArticles";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Page}>
            <Route component={MainContent}>
                <Route component={Main}>
                    <IndexRoute component={Index} />
                    <Route path='users' component={UserList}/>
                    <Route path='users/:userId' component={UserList}/>
                    <Route path='users/:userId/articles' component={UserArticles} />
                    <Route path='users/:userId/articles/:id' component={UserArticles} />
                </Route>
                <Route component={Sidebar}>
                    <IndexRoute component={UserList} />
                </Route>
            </Route>
        </Route>
    </Router>,
        document.getElementById('thePage')
);