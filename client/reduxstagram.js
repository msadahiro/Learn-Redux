// let's go!
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react-router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store, { history } from './store';

// ERROR/ISSUES TRACKING
// import Raven from 'raven-js'
// import {sentry_url, logException} from './data/config';

// Raven.config(sentry_url,{
//     tags:{
//         git_commit:'asdfas9d08f',
//         userLevel:'editor'
//     }
// }).install();

// console.log(window.doesNotExist.nope);
// custom error messages
// logException(new Error('download failed!'),{
//     email:'michaelsadahiro@gmail.com'
// })

// Raven.captureMessage('something bad happened')
// Raven.showReportDialog();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)
render(router, document.getElementById('root'))