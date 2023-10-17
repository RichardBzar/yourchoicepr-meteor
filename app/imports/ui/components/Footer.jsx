import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const Footer = () => (
  <Container fluid className="px-0 bg-color my-4 py-3 mb-0">
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-end text-two pt-lg-3">
            <div>
              <header>OUR HOURS</header>
              <p><br />Lunch (To-Go Only):<br />
                Tuesday – Friday<br />
                11 am – 2 pm
              </p>
              <p>Dinner:<br />
                Monday – Saturday<br />
                5 pm – 9 pm<br />
              </p>
              <p>Please note,<br />
                We are closed on Sundays
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-center text-two pt-lg-3">
            <div>
              <header>DINING WITH US<br /></header>
              <p>
                {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
                Located on the 2nd Floor in Velocity Honolulu<br />Building. Use "Velocity Honolulu" or enter in<br />"888 Kapiolani Blvd" as destination location for<br />Uber or Lyft. DO NOT enter MW Restaurant<br />in Uber or Lyft, because we have been having<br />issues with guests being dropped at our old<br />location. Enter through "Velocity Entrance" on<br />the ground floor through the double sliding<br />door, make a left turn from "61 Barbershop",<br />and use the elevator to go to the 2nd floor to<br />"MW Restaurant"<br />Valet is located on the 2nd Floor through<br />Velocity Service Center. Sharp right off of<br />Kapiolani Blvd. Straight down to the end of the<br />lane by the wired fence. Right turn up the ramp<br />and follow the round about.<br />Casual dining with a Hawaii Regional Cuisine<br />flair accompanied by exquisite desserts.<br />We are now located in the Velocity Honolulu<br />building, across the street from the Blaisdell<br />Center.<br /><strong><i>We welcome Resort Casual attire.</i></strong><br /><strong><i>Please no tank tops.</i></strong><br />888 Kapi‘olani Blvd.<br />Commercial Unit, Suite 201<br />Honolulu, HI 96813<br />(808) 955-6505<br />info@mwrestaurant.com
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-center text-two pt-lg-3">
            <div>
              <header>OUR COMPANY<br /></header>
              <p>
                <span className="underline"><br />Careers<br /></span>
                <span className="underline">Artizen by MW</span><br /><img width="91px" height="102px" src="https://mwrestaurant.com/wp-content/uploads/2021/08/Artizen_Logo_offwhite.svg" alt="" />
              </p>
            </div>
          </div>

        </Col>
        <Col>
          <div className="pt-lg-3 text-two">
            <div>
              <header>FOLLOW US</header>

            </div>
            <div className="py-1">
              <Stack direction="horizontal" gap={3}>
                <div><Instagram /></div>
                <div><Facebook /></div>
                <div><Twitter /></div>
              </Stack>
              <br />
            </div>
            <div>
              <button type="button" className="btn btn-secondary btn-lg bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope" viewBox="0 2 16 16">
                  {/* eslint-disable-next-line max-len */}
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg> Join mailing list
              </button>
              <div className="line" />
              <br />
              <p className="underline">Online Gift Card Purchase Policy</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Footer;
