import React from 'react';
import { Main, Auth, Students, Teachers } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Routes = (props) => {
  return (
    <div>
    	<Router>
    		<Route exact path='/' component={Main}/>
            <Route exact path='/auth' component={Auth}/>
            <Route exact path='/students' component={Students}/>
            <Route exact path='/teachers' component={Teachers}/>
    	</Router>
    </div>
  )
}

export default Routes;