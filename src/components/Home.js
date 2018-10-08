import React, { Component } from 'react';
import{Grid,Col,Row} from 'react-bootstrap'
import './AppFormating.css';

class Home extends Component {

    render() {
    return (
      <div className="Home">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h1>Home</h1>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Row className="show-grid">
            <Col xs={12} md={5}>
              <p className='text-left text-big text-grey'>
                Consultant during the day, I transform into a software developer at night
              </p>
            </Col>
            <Col xs={12} md={7}>      
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="show-grid">
            <Col xs={12} md={5}>
            </Col>
            <Col xs={12} md={7}>      
              <p className='text-left text-normal text-grey'>
                Please explore, get in touch and provide some feedback!
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
