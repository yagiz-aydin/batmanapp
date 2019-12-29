import React from "react";
import { Link } from "react-router-dom";
import { Home, BatLogo, Text } from "../layouts/css";

export default ( ) => (
        <Home>
            <Text>Batman</Text>
            <Link to="/shows">
                <BatLogo />
            </Link>
        </Home>
);
