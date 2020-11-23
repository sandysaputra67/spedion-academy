import React, { StrictMode } from 'react';
import { Loader, Header, Footer, TaglineComponent } from '../components';
import { Main, SignIn, SignUp, KursusViews, SeminarOnline, Market, Instruktur } from '../pages';
import { BrowserRouter as Router, Switch, Route, /*Redirect*/ } from 'react-router-dom';

const MainApp = (props) => {
  // CHECK USER LOGIN
  let isMasuk = true;
  let checkHandleLogin = isMasuk ?( window.location.href = '/student') : (<Main />);
  return (
    <StrictMode>
        <Router>
          <Switch>
            <Route>
              <Header />
              <Loader />
              <Route exact path={["/"]}>
                {/*{isMasuk ? <Redirect to="/admin"/> : <Main />}*/}
                { checkHandleLogin }
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

              <Route forceRefresh={true} path={"*"}>
                <h1>404 NOT FOUND</h1>
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