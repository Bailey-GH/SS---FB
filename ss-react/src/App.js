import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Crypto from './components/Pages/Crypto'
import Stocks from './components/Pages/Stocks';
import CryptoChart from './components/Pages/CryptoChart';
import News from './components/Pages/News_Page';
import Tech from './components/tech';
import { Provider } from 'react-redux';
import Store from './components/Store/store';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Login from '../src/components/Login';
import Profile from './components/Pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Favourites from './components/Favourites';

const App = () => {

    return (
            <Provider store={Store}>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route path='/Signup' exact component={Signup} />
                        <Route path='/Login' exact component={Login} />
                        <Route path='/Forgot-Password' exact component={ForgotPassword} />
                        <PrivateRoute path='/' exact component={Home} />
                        <PrivateRoute path='/Crypto' exact component={Crypto} />
                        <PrivateRoute path='/Stocks' exact component={Stocks} />
                        <PrivateRoute path='/CryptoChart' exact component={CryptoChart} />
                        <PrivateRoute path='/News_Page' exact component={News} />
                        <PrivateRoute path='/Tech_News' exact component={Tech} />
                        <PrivateRoute path='/Favourites' exact component={Favourites} />
                        <PrivateRoute path='/Profile' exact component={Profile} />
                        <PrivateRoute path='/Update-Profile' exact component={UpdateProfile} />
                    </Switch>
                </AuthProvider>
            </Router>
            </Provider>
    );
};


export default App;