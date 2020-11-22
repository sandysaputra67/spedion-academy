import React, { StrictMode } from 'react';
import { Loader, Header, Footer, TaglineComponent } from '../components';
import { Main, SignIn, SignUp, KursusViews, SeminarOnline, Market, Instruktur } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainApp = (props) => {

  return (

    <StrictMode>
        <Router>
          <Switch>
            <Route>
              <Header />
              <Loader />
              <Route exact path={["/", "/home"]}>
                <Main />
              </Route>
              <Route exact path="/masuk">
                <SignIn />
              </Route>
              <Route exact path='/daftar'>
                <SignUp />
              </Route>
              <Route exact path='/kursus'>
                <KursusViews />
              </Route>
              <Route exact path='/seminar'>
                <SeminarOnline />
              </Route>
              <Route exact path='/market' >
                <Market />
              </Route>
              <Route exact path='/instruktur'>
                <Instruktur />
              </Route>
              <TaglineComponent />
              <Footer />
            </Route>
          </Switch>

        </Router>
  </StrictMode>


  )
}

export default MainApp;