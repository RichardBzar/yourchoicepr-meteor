import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import CenterImg from '../components/CenterImg';

const MWR = () => (
  <Container fluid className="px-0">
    <Logo />
    <Navigation />
    <CenterImg />
  </Container>
);

export default MWR;
