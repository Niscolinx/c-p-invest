/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './containers/App'
import burgerBuilder from './store/reducers/burgerBuilder'
import orderReducer from './store/reducers/order'
import authReducer from './store/reducers/auth'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
import './assets/css/demo.css'
import './assets/css/pe-icon-7-stroke.css'

import './sass/main.scss'

const rootReducer = {
    order: orderReducer,
    burger: burgerBuilder,
    auth: authReducer,
}

const store = createStore(
    combineReducers(rootReducer),
    composeWithDevTools(applyMiddleware(thunk))
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

//import AdminLayout from "layouts/Admin.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/admin" render={props => <AdminLayout {...props} />} />
//       <Route path="/main">
//         <h1>Hello my man, keep working hard... your reward is not far-fetched</h1>
//       </Route>
//       <Redirect from="/" to="/main" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(app, document.getElementById('root'))
