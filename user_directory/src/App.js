import React  from 'react';
import Container from './components/Container.js';
import Tables from './components/Table.js';
import Jumbotrons from './components/Jumbotrons.js';
import './index.css';

function App() {

  return (
    <Container fluid={true}>
      <div className='App'>
        <Jumbotrons />
        <Tables  dark={true} />
      </div>
    </Container>
  );
}

export default App;
