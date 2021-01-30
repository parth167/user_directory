import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';


const Jumbotrons = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h1 className='display-3 text-warning'>Employee Directory</h1>
              <h5 className='text-warning'>Click on arrows to filter by ascending order or descending order</h5>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbotrons;
