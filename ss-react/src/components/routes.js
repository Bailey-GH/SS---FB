import React from 'react'
import { Switch, Route }  from 'react-router-dom';

import Main from './main';
import Tech from './tech';

const  Routes = () => {
    return (
        <Switch>
            <Route exact path='/News_Page' component={Main}></Route>
            <Route exact path='/Tech_News' component={Tech}></Route>
        </Switch>
    )
}

export default Routes;


