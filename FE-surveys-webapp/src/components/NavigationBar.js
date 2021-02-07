import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavigationLink from "./NavigationLink";

export default function NavigationBar(router) {
  const HOME_LABEL = "Home";
  const HOME_PATHNAME = "/";
  const SURVEYS_LABEL = "Surveys";
  const SURVEYS_PATHNAME = "/surveys";
  const ABOUT_LABEL = "About";
  const ABOUT_PATHNAME = "/about";

  const isActive = (pathname) => router.pathname === pathname && "active";

  return (
    <header>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Bjj Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className={isActive(HOME_PATHNAME)}>
              <NavigationLink href={HOME_PATHNAME} label={HOME_LABEL} />
            </Nav.Item>

            <Nav.Item className={isActive(SURVEYS_PATHNAME)}>
              <NavigationLink href={SURVEYS_PATHNAME} label={SURVEYS_LABEL} />
            </Nav.Item>

            <Nav.Item className={isActive(ABOUT_PATHNAME)}>
              <NavigationLink href={ABOUT_PATHNAME} label={ABOUT_LABEL} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}