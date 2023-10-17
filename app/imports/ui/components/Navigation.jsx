import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';

const Navigation = () => (
  <Container className="d-flex justify-content-center py-3">
    <Stack direction="horizontal" className="font-size" gap={3}>
      <div className="p-2">MW 10TH ANNIVERSARY EVENT</div>
      <div className="p-2">MENU</div>
      <div className="p-2">RESERVATIONS</div>
      <div className="p-2">CATERING</div>
      <div className="p-2">ORDER & SHOP</div>
      <div className="p-2">ABOUT</div>
    </Stack>
  </Container>
);

export default Navigation;
