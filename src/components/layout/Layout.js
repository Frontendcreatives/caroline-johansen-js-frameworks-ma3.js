import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../sass/style.scss";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import News from "../news/News";
import Login from "../login/Login";

function Layout() {
    return (
        
        <Router>
        <Navbar bg="transparent" variant="dark" expand="lg">
        <NavLink to="/" exact>
            <Navbar.Brand>REACT-MA3</Navbar.Brand>
        </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" exact className="nav-link">HOME</NavLink>
                    <NavLink to="/news" className="nav-link">NEWS</NavLink>
                     <NavLink to="/login" className="nav-link">LOGIN</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/login" component={Login} />
                </Switch>
        </Container>
        </Router>
    );
}

export default Layout;