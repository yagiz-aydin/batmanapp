import React from "react";
import { Route } from "react-router-dom";
import routes from "../../routes";
import {Background} from "./css";

const App = ( ) => (
    <Background>
        { routes.map( route => (
            <Route key={ route.path } { ...route } />
        ) ) }
    </Background>
);

export default App;
