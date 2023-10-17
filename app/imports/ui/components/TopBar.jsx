import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import '../../../client/style.css';

const styles = `
  #top-bar {
    background-color: black!important;
    color: white !important;
  }
`;

const TopBar = () => (
  <div>
    <style>{styles}</style>
    <Navbar className="bg-body-tertiary" id="top-bar">
      <Container className="d-flex justify-content-center pad-bot">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="pad-bot">MW'S 10TH ANNIVERSARY - SUNDAY, AUGUST 23 - TICKETS ON SALE</p>
      </Container>
    </Navbar>
  </div>
);

export default TopBar;
