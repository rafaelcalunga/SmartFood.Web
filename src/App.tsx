import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/categories/Categories';
import Recipes from './components/recipes/Recipes';

function App() {
  return (
    <>
      <header>
        <Navbar bg="white" fixed="top" expand="md" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/">SmartFood</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/categories">
                  <Nav.Link>Categories</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
