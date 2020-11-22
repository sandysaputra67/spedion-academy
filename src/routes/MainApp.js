import React, { StrictMode } from 'react';
import { Loader, Header, Footer, TaglineComponent } from '../components';
import { Teachers, Students, SignUp, SignIn, Main, KursusViews, SeminarOnline, Market, Instruktur } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const MainApp = (props) => {

  return (
    <>

      <StrictMode>
        <Router>
          <Header />
          <Loader />
          <>
            <Route exact path='/' component={Main} />
            <Route exact path='/masuk' component={SignIn} />
            <Route exact path='/daftar' component={SignUp} />
            <Route exact path='/teachers' component={Teachers} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/kursus' component={KursusViews} />
            <Route exact path='/seminar' component={SeminarOnline} />
            <Route exact path='/market' component={Market} />
            <Route exact path='/instruktur' component={Instruktur} />
          </>
          <TaglineComponent />
          <Footer />


        </Router>
      </StrictMode>
    </>
  )
}

export default MainApp;