import React, { StrictMode } from 'react';
import { Loader, Header, Footer} from '../components';
import { Teachers, Students, Login, Main, KursusViews, SeminarOnline, Market, Instruktur } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Routes = (props) => {

  return (
    <>

    <StrictMode>
    	<Router>
        <Header/>
            <Loader/>
            <div style={{ height : '100vh'}}>
        		<Route exact path='/' component={Main}/>
                <Route exact path='/masuk' component={Login}/>
                <Route exact path='/daftar' component={Login}/>
                <Route exact path='/students' component={Students}/>
                <Route exact path='/teachers' component={Teachers}/>
                <Route exact path='/kursus' component={KursusViews}/>
                <Route exact path='/seminar' component={SeminarOnline}/>
                <Route exact path='/market' component={Market}/>
                <Route exact path='/instruktur' component={Instruktur}/>
            </div>
        <Footer/>
    	</Router>
    </StrictMode>
    </>
  )
}

export default Routes;