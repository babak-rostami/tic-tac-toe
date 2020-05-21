import React, { Component } from 'react';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles.css'
import { Container } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <Container style={{'backgroundColor':'rgb(216, 214, 214)'}}>
          <h1 className="mb-4">tic tac toe</h1>
        </Container>
        <Container mt={2} style={{'backgroundColor':'rgb(243, 243, 243)'}}>
          <Game />
        </Container>
        
      </div>

    );
  }
}

export default App;
