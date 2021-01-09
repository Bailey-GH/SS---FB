import React from 'react'
import Store from '../Store/store';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import Routes from '../routes';
import Navbar from '../Navbar';

function News() {
    return (
            <Provider store={Store}>
                <div>
                    <Navbar />
                    <nav>
                        <ul>
                            <li><Link to='/News_Page'>Search</Link></li>
                            <li><Link to='/Tech_News'>Tech</Link></li>
                        </ul>
                    </nav>

                    <main>
                        <Routes />
                    </main>

                </div>
            </Provider>
        
    )
}

export default News;
