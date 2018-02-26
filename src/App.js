// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Navbar, Jumbotron } from 'react-bootstrap'
import StuffList from './components/StuffList.container'
import './styles/app.css'

class App extends Component<void> {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Hi</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="banner">
          <Grid>
            <h1>Hola</h1>
            <Link to="/colors">Colors</Link>
            <StuffList />
          </Grid>
        </Jumbotron>
      </div>
    )
  }
}

export default App
