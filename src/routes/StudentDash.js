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
                        <Route path="/admin">
                            <NotifStudent />
                        </Route>
                        <Route path="/profile">
                            Nama Saya Alam
                        </Route>
                    </Students>
                </Switch>
            </Router>
        </StrictMode>

    )
}