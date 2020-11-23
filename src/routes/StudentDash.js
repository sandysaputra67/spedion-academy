import React, { StrictMode } from 'react';
import { Students } from '../pages';
import { NotifStudent } from "../components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export const StudentDash = () => {
    return (
        <StrictMode>
            <Router>
                <Switch>
                    <Students>
                        <Route path="/student">
                            <NotifStudent />
                        </Route>
                        <Route path="/profile">
                            Nama Saya Alam
                        </Route>
                        <Route path="/chat">
                            Chatting
                        </Route>
                       {/*<Route exact forceRefresh={true} path={"*"}>
                         <h1>404 NOT FOUND</h1>
                       </Route>*/}
                    </Students>
                </Switch>
            </Router>
        </StrictMode>

    )
}