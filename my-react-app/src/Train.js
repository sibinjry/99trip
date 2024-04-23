import React from "react";
import './Train.css';
import { Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Train() {
  return (
    <>
      {/* main div for train page */}
      <div className='Train-page-main-div'>
        {/* main header div */}
        <div className='Train-page-main-first-header'>
          <div className="Train-page-main-first-header-logo">
            <img src={process.env.PUBLIC_URL + './FAV.png'} alt="" className="Train-page-main-header-logo-logoes" />
            {/* transparent div */}
            <div className="Train-page-main-first-transparent-main-div">
              {/* first-section-main */}
              <div className="Train-page-main-first-transparent-main-div-first-section">
                <div className="Train-page-main-first-transparent-main-div-first-section-one-way">
                  <input type="radio" />
                  <label className="Train-page-main-first-transparent-main-div-first-section-one-way-label">One Way</label>
                </div>
                <div className="Train-page-main-first-transparent-main-div-first-section-Round-trip">
                  <input type="radio" />
                  <label className="Train-page-main-first-transparent-main-div-first-section-one-way-label">Round Trip</label>
                </div>
              </div>

              {/* second section main div */}
              <div className="Train-page-main-first-transparent-main-div-second-section">
                {/* first part */}
                <div className="Train-page-main-first-transparent-main-div-second-section-first-part">
                  {/* from */}
                  <div className="Train-page-main-first-transparent-main-div-second-section-first-part-from">
                    <label className="Train-page-main-first-transparent-main-div-second-section-first-part-from-label">From</label>
                    <input
                      type="text"
                      placeholder="DELHI"
                      className="form-control Train-page-main-first-transparent-main-div-second-section-first-part-from-input" />
                  </div>
                  {/* to */}
                  <div className="Train-page-main-first-transparent-main-div-second-section-first-part-from">
                    <label className="Train-page-main-first-transparent-main-div-second-section-first-part-from-label">To</label>
                    <input
                      type="text"
                      placeholder="BENGALORE"
                      className="form-control Train-page-main-first-transparent-main-div-second-section-first-part-from-input" />
                  </div>
                </div>
                {/* second part */}

                <div className="Train-page-main-first-transparent-main-div-second-section-second-part">
                  {/* departure */}
                  <div className="Train-page-main-first-transparent-main-div-second-section-second-part-depature">
                    <label className="Train-page-main-first-transparent-main-div-second-section-second-part-label">Depature</label>
                    <input
                      type="date"
                      className="form-control Train-page-main-first-transparent-main-div-second-section-second-part-input" />
                  </div>

                  <div className="Train-page-main-first-transparent-main-div-second-section-second-part-depature">
                    <label className="Train-page-main-first-transparent-main-div-second-section-second-part-label">Return</label>
                    <input
                      type="date"
                      className="form-control Train-page-main-first-transparent-main-div-second-section-second-part-input" />
                  </div>


                  <div className="Train-page-main-first-transparent-main-div-second-section-second-part-depature">
                    <label className="Train-page-main-first-transparent-main-div-second-section-second-part-label">Passengers</label>
                    {/* dropdown */}
                    <Dropdown>
                      <Dropdown.Toggle className="form-control Train-page-main-first-transparent-main-div-second-section-second-part-input">
                        1 Passengers
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>2 passengers</Dropdown.Item>
                        <Dropdown.Item>3 passengers</Dropdown.Item>
                        <Dropdown.Item>4 passengers</Dropdown.Item>
                        <Dropdown.Item>5 passengers</Dropdown.Item>
                        <Dropdown.Item>More</Dropdown.Item>


                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                </div>

                {/* third part */}
                <div className="Train-page-main-first-transparent-main-div-second-section-third-part">
                  <Button className="Train-page-main-first-transparent-main-div-second-section-third-part-button">
                    Search Train
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* second section main div */}
        <div className="Train-page-main-second-div">
          {/* section one on second div */}
          <div className="Train-page-main-second-div-section-one">
            {/* leftside for section one */}
            <div className="Train-page-main-second-div-section-one-left-side">
              {/* header */}
              <div className="Train-page-main-second-div-section-one-left-side-header">
                Book Train Tickets Without Any Hassle
              </div>

              <div className="Train-page-main-second-div-section-one-left-side-header-footer">
                Traveling by train is a popular choice for short commutes and long journeys, and for a good
                reasons. With over thousand routes connecting India  traveling by train is the most convenient
                mode of travel. The combination of price, convenience, and speed makes train travel a sweet spot
                for discerning travelers. Travelers can now search routes, check fares and book train tickets with
                MakeMyTrip’s train booking system. Moreover, you can also use the MakeMyTrip’s app for easy access ...
              </div>
            </div>

            <div className="Train-page-main-second-div-section-one-Right-side">
              <div className="Train-page-main-second-div-section-one-Right-side-header">
                Easy IRCTC Train Booking
              </div>
              <div className="Train-page-main-second-div-section-one-Right-side-header-footer">
                Indian Railways is among the world’s largest rail networks with an operating route length
                of more than 65,000 km. IRCTC (Indian Railway Catering and Tourism Corporation) is the
                face of India's online train tickets booking system. Our website is the leading portal for
                booking IRCTC train tickets online which is offering the most convenient ways to book
                train tickets, check train schedule, train availability, and view live train status.
                IRCTC has been the most used website for train tickets booking.
              </div>
            </div>
          </div>

          {/* section two on second div */}
          <div className="Train-page-main-second-div-section-two">
            {/* leftside for second div second section */}
            <div className="Train-page-main-second-div-section-two-left-side">
              {/* header for leftside second section */}
              <div className="Train-page-main-second-div-section-two-left-side-header">
                How Book Train Tickets Online with 99trip
              </div>
              {/* header-footer for leftside second section */}
              <div className="Train-page-main-second-div-section-two-left-side-footer">
                Having confusion on how to book your train tickets online? process of booking your tickets
                in simple easy steps.
                Step 1: Log in to our website and select the train icon. Under the ‘book train tickets’
                section, choose your city and its station where you will depart from and arrive at.

                Step 2: Then select the date of departure and choose from the preferred class of train
                travel. You can choose between Sleeper Class, Third Class, First AC, Second AC, Third AC.

              </div>
            </div>
            {/* Right side for second div second section */}
            <div className="Train-page-main-second-div-section-two-Right-side">
              {/* header for right side */}
              <div className="Train-page-main-second-div-section-two-left-side-header">
                Check Your PNR Status
              </div>

              <div className="Train-page-main-second-div-section-two-Right-side-footer">
                Apart from providing e-tickets by mail, MakeMyTrip also sends you the relevant updates
                on your registered number over text and WhatsApp. When you book train tickets each ticket
                holder gets a unique PNR, an acronym for Passenger Name Record, to check the status of the
                train and booking details. With the help of PNR enquiry, you can check live train status
                from the comfort of your home. With PNR enquiry, you will get to know whether your ticket
                is confirmed or if will you get a seat only if someone else cancels their ticket.


              </div>
            </div>
          </div>

          {/* section three on second div */}
          <div className="Train-page-main-second-div-third-three">
            {/* header for third section in second main div */}
            <div className="Train-page-main-second-div-third-three-leftside">
              {/* header */}
              <div className="Train-page-main-second-div-third-three-header">
                Why should you book Train Tickets with 99Trip
              </div>
              {/* footer */}
              <div className="Train-page-main-second-div-third-three-header-footer">
                99Trip can provide you the most reliable and secure way of train booking and all you
                need to do is plan your itinerary. The portal provides a user-friendly experience to our
                customers. Instead of waiting or queueing up in lines for hours to book a train ticket,
                you can visit the website. The train tickets online booking system of MakeMyTrip allow
                you to book your travel package from anywhere. All you need to do is enter your IRCTC
                login detail and you have all the information you need.
              </div>

            </div>
            {/* rightside for third section */}
            <div className="Train-page-main-second-div-third-three-rightside">
              {/* header for third section right side */}
              <div className="Train-page-main-second-div-third-three-rightside-header">
                Hassle-free Train Ticket Booking on 99Trip
              </div>
              <div className="Train-page-main-second-div-third-three-rightside-header-footer">
                Counted among the world’s largest rail networks, Indian Railways is the most popular mode
                of transport for passengers. MakeMyTrip is the leading portal for making your IRCTC ticket
                booking within a few minutes. All you have to do is enter your source and destination and
                look at all the trains available on the selected route. In order to confirm your tickets,
                enter your IRCTC login ID and be ready to embark on a journey of a lifetime. You can also
                book your train tickets...
              </div>
            </div>
          </div>
        </div>


        {/* Third section Main div */}

        <div className="Train-page-main-third-section-div">
          <div className="Train-page-main-third-section-div-small-main-div">
            {/* header  */}
            <div className="Train-page-main-third-section-div-small-main-div-header">
              {/* offer name */}
              <div className="Train-page-main-third-section-div-small-main-div-header-offer">
                Offers
              </div>
            </div>

            {/* section    */}
            <div className="Train-page-main-third-section-offer-content">
              {/* first section for offer content */}
              <div className="Train-page-main-third-section-offer-content-first-section">
                {/* first offer content */}
                <div className="Train-page-main-third-section-offer-content-first-section-offer">
                  {/* leftside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-leftside">
                    <img src={process.env.PUBLIC_URL + './trainoffer1.jpg'} alt="" className="trainofferimage" />
                  </div>
                  {/* rightside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside">
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-header">
                      FOR COLORFUL LONG WEEKAND TRIPS
                    </div>
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer">
                      Grab Delightful Geals On Trains this weekends
                    </div>
                    <Button className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer-button">Book Now</Button>
                  </div>
                </div>

                {/* second offer content */}
                <div className="Train-page-main-third-section-offer-content-first-section-offer">
                  {/* leftside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-leftside">
                    <img src={process.env.PUBLIC_URL + './trainoffer2.jpg'} alt="" className="trainofferimage" />
                  </div>
                  {/* rightside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside">
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-header">
                      OPEN NOW : Train Booking For Festivals 2024
                    </div>
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer">
                      Plan your train journey in advance
                    </div>
                    <Button className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer-button">Book Now</Button>
                  </div>
                </div>



              </div>

              {/* second section for offer content */}

              <div className="Train-page-main-third-section-offer-content-first-section">
                {/* first offer content */}
                <div className="Train-page-main-third-section-offer-content-first-section-offer">
                  {/* leftside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-leftside">
                    <img src={process.env.PUBLIC_URL + './trainoffer3.jpg'} alt="" className="trainofferimage" />
                  </div>
                  {/* rightside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside">
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-header">
                      Bookings are open now
                    </div>
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer">
                      plan your next trip for the upcomming weekends
                    </div>
                    <Button className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer-button">Book Now</Button>
                  </div>
                </div>

                {/* second offer content */}
                <div className="Train-page-main-third-section-offer-content-first-section-offer">
                  {/* leftside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-leftside">
                    <img src={process.env.PUBLIC_URL + './trainoffer4.jpg'} alt="" className="trainofferimage" />
                  </div>
                  {/* rightside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside">
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-header">
                      Trip Guarentee On Train
                    </div>
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer">
                      Waitlisted tickets no more, Get a confirmed ticket.
                    </div>
                    <Button className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer-button">Book Now</Button>
                  </div>
                </div>



              </div>

              {/* third section for offer content */}


              <div className="Train-page-main-third-section-offer-content-first-section">
                {/* first offer content */}
                <div className="Train-page-main-third-section-offer-content-first-section-offer">
                  {/* leftside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-leftside">
                    <img src={process.env.PUBLIC_URL + './trainoffer5.jpg'} alt="" className="trainofferimage" />
                  </div>
                  {/* rightside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside">
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-header">
                      Welcome the summer of 2024
                    </div>
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer">
                      Free cancellation starts Rs 1 for each booking.
                    </div>
                    <Button className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer-button">Book Now</Button>
                  </div>
                </div>

                {/* second offer content */}
                <div className="Train-page-main-third-section-offer-content-first-section-offer">
                  {/* leftside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-leftside">
                    <img src={process.env.PUBLIC_URL + './trainoffer6.jpg'} alt="" className="trainofferimage" />
                  </div>
                  {/* rightside */}
                  <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside">
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-header">
                      Deals on Wheels on train
                    </div>
                    <div className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer">
                      Get upto Rs 50 discount for each booking.
                    </div>
                    <Button className="Train-page-main-third-section-offer-content-first-section-offer-rightside-footer-button">Book Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
        {/* footer */}

        {/* train from and to */}
        <div className="train-page-train-from-main-div">
          {/* first section main div for from-to-content */}
          <div className="train-page-train-from-first-section-main-div">

            {/* first div BENGALURE*/}
            <div className="train-page-from-to-div">
              {/* first row logo and from content */}
              <div className="train-page-from-to-div-logo-from-content-main-div">
                {/* logo */}
                <div className="train-page-from-to-div-logo">
                  <img src={process.env.PUBLIC_URL + './fromcontentbangalore.jpg'} alt="" className="train-page-from-to-div-logo-image" />
                </div>
                {/* from content */}
                <div className="train-page-from-to-div-from-content">
                  Train from <span className="train-page-from-to-div-from-content-color-change">BENGALORE</span>
                </div>
              </div>

              {/* To content for from-to content */}
              <div className="train-page-from-to-div-To-content-main-div">
                <span className="train-page-from-to-div-from-content-color-change"> To</span>
                Chennai, Mumbai, Kerala, Pune, Goa, Hyderabad, Delhi.
              </div>
            </div>

            {/* second div CHENNAI*/}

            <div className="train-page-from-to-div">
              {/* first row logo and from content */}
              <div className="train-page-from-to-div-logo-from-content-main-div">
                {/* logo */}
                <div className="train-page-from-to-div-logo">
                  <img src={process.env.PUBLIC_URL + './fromcontentchennai.jpg'} alt="" className="train-page-from-to-div-logo-image" />
                </div>
                {/* from content */}
                <div className="train-page-from-to-div-from-content">
                  Train from <span className="train-page-from-to-div-from-content-color-change">CHENNAI</span>
                </div>
              </div>

              {/* To content for from-to content */}
              <div className="train-page-from-to-div-To-content-main-div">
                <span className="train-page-from-to-div-from-content-color-change"> To</span>
                Bengalore, Mumbai, Kerala, Pune, Goa, Hyderabad, Delhi.
              </div>
            </div>

            {/* Third div MUMBAI */}

            <div className="train-page-from-to-div">
              {/* first row logo and from content */}
              <div className="train-page-from-to-div-logo-from-content-main-div">
                {/* logo */}
                <div className="train-page-from-to-div-logo">
                  <img src={process.env.PUBLIC_URL + './fromcontentmumbai.jpg'} alt="" className="train-page-from-to-div-logo-image" />
                </div>
                {/* from content */}
                <div className="train-page-from-to-div-from-content">
                  Train from <span className="train-page-from-to-div-from-content-color-change">MUMBAI</span>
                </div>
              </div>

              {/* To content for from-to content */}
              <div className="train-page-from-to-div-To-content-main-div">
                <span className="train-page-from-to-div-from-content-color-change"> To</span>
                Bengalore, Chennai, Kerala, Pune, Goa, Hyderabad, Delhi.
              </div>
            </div>
          </div>

          {/* second section main div for from-to-content */}
          <div className="train-page-train-from-first-section-main-div">

            {/* first div KERALA*/}
            <div className="train-page-from-to-div">
              {/* first row logo and from content */}
              <div className="train-page-from-to-div-logo-from-content-main-div">
                {/* logo */}
                <div className="train-page-from-to-div-logo">
                  <img src={process.env.PUBLIC_URL + './fromcontentkerala.jpg'} alt="" className="train-page-from-to-div-logo-image" />
                </div>
                {/* from content */}
                <div className="train-page-from-to-div-from-content">
                  Train from <span className="train-page-from-to-div-from-content-color-change">KERALA</span>
                </div>
              </div>

              {/* To content for from-to content */}
              <div className="train-page-from-to-div-To-content-main-div">
                <span className="train-page-from-to-div-from-content-color-change"> To</span>
                Chennai, Mumbai, Bengalure, Pune, Goa, Hyderabad, Delhi.
              </div>
            </div>

            {/* first div PUNE*/}
            <div className="train-page-from-to-div">
              {/* first row logo and from content */}
              <div className="train-page-from-to-div-logo-from-content-main-div">
                {/* logo */}
                <div className="train-page-from-to-div-logo">
                  <img src={process.env.PUBLIC_URL + './fromcontentpune.jpg'} alt="" className="train-page-from-to-div-logo-image" />
                </div>
                {/* from content */}
                <div className="train-page-from-to-div-from-content">
                  Train from <span className="train-page-from-to-div-from-content-color-change">PUNE</span>
                </div>
              </div>

              {/* To content for from-to content */}
              <div className="train-page-from-to-div-To-content-main-div">
                <span className="train-page-from-to-div-from-content-color-change"> To</span>
                Chennai, Mumbai, Bengalure, Kerala, Goa, Hyderabad, Delhi.
              </div>
            </div>

            {/* first div HYDERABAD */}

            <div className="train-page-from-to-div">
              {/* first row logo and from content */}
              <div className="train-page-from-to-div-logo-from-content-main-div">
                {/* logo */}
                <div className="train-page-from-to-div-logo">
                  <img src={process.env.PUBLIC_URL + './fromcontenthyderabad.jpg'} alt="" className="train-page-from-to-div-logo-image" />
                </div>
                {/* from content */}
                <div className="train-page-from-to-div-from-content">
                  Train from <span className="train-page-from-to-div-from-content-color-change">HYDERABAD</span>
                </div>
              </div>

              {/* To content for from-to content */}
              <div className="train-page-from-to-div-To-content-main-div">
                <span className="train-page-from-to-div-from-content-color-change"> To</span>
                Chennai, Mumbai, Bengalure, Kerala, Goa, Pune, Delhi.
              </div>
            </div>



          </div>
        </div>

        {/* moving train */}
        <div className="train-page-moving-train">
          <marquee direction='right' >
            <img src={process.env.PUBLIC_URL + './trainmoving.png'} alt="" className="train-page-moving-train-image" />
          </marquee>
        </div>

        {/* railways inquiry main div */}

        <div className="train-page-railways-inquiry-main-div">
          <div className="train-page-railways-inquiry-main-div-header">
            For Railway Inquiry Just A Click
          </div>
          <div className="train-page-railways-inquiry-main-div-footer-main">
            {/* sub divs */}
            {/* sub div 1 */}
            <div className="train-page-railways-inquiry-main-div-footer-div">
              {/* header */}
              <div className="train-page-railways-inquiry-main-div-footer-div-header">
                Live Train Status
              </div>
              {/* main */}
              <div className="train-page-railways-inquiry-main-div-footer-div-main">
                Know about the exact location of your train
              </div>
              {/* button */}
              <div className="train-page-railways-inquiry-main-div-footer-div-button">
                <Button className="train-page-railways-inquiry-main-div-footer-div-button-btn">
                  <FaArrowRight />
                </Button>
              </div>
            </div>
            {/* sub div 2 */}
            <div className="train-page-railways-inquiry-main-div-footer-div">
              {/* header */}
              <div className="train-page-railways-inquiry-main-div-footer-div-header">
                Coach & Seat Position
              </div>
              {/* main */}
              <div className="train-page-railways-inquiry-main-div-footer-div-main">
                Know about your coach and seat position
              </div>
              {/* button */}
              <div className="train-page-railways-inquiry-main-div-footer-div-button">
                <Button className="train-page-railways-inquiry-main-div-footer-div-button-btn">
                  <FaArrowRight />
                </Button>
              </div>
            </div>
            {/* sub div 3 */}
            <div className="train-page-railways-inquiry-main-div-footer-div">
              {/* header */}
              <div className="train-page-railways-inquiry-main-div-footer-div-header">
                PNR Status
              </div>
              {/* main */}
              <div className="train-page-railways-inquiry-main-div-footer-div-main">
                You can Check PNR status effortlessly
              </div>
              {/* button */}
              <div className="train-page-railways-inquiry-main-div-footer-div-button">
                <Button className="train-page-railways-inquiry-main-div-footer-div-button-btn">
                  <FaArrowRight />
                </Button>
              </div>
            </div>
            {/* sub div 4 */}
            <div className="train-page-railways-inquiry-main-div-footer-div">
              {/* header */}
              <div className="train-page-railways-inquiry-main-div-footer-div-header">
                Platform Locator
              </div>
              {/* main */}
              <div className="train-page-railways-inquiry-main-div-footer-div-main">
                know your platform for your train
              </div>
              {/* button */}
              <div className="train-page-railways-inquiry-main-div-footer-div-button">
                <Button className="train-page-railways-inquiry-main-div-footer-div-button-btn">
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* footer for train page */}
        <div className="train-page-footer-main">
          {/* Invenu name for footer train page */}
          <div className="train-page-footer-main-Invenu-name">
            Invenu Global Gateway LLP
          </div>
          {/* footer nav section main */}
          <div className="train-page-footer-main-Invenu-nav-main">
            {/* nav list */}
            <div className="train-page-footer-main-Invenu-nav-list-about">
              About us
            </div>
            <div className="train-page-footer-main-Invenu-nav-list">
              Terms and Conditions
            </div>
            <div className="train-page-footer-main-Invenu-nav-list">
              Privacy Policy
            </div>
            <div className="train-page-footer-main-Invenu-nav-list">
              Disclaimer
            </div>
            <div className="train-page-footer-main-Invenu-nav-list">
              Contact Us
            </div>
            <div className="train-page-footer-main-Invenu-nav-list">
              Refer a Customer
            </div>
            <div className="train-page-footer-main-Invenu-nav-list">
              Blog
            </div>
          </div>
          {/* main div for copyright content */}
          <div className="train-page-footer-copyright-content">
            copyright @ 2008-2024
            <Link to='/Home'>
            <Button className="train-page-footer-copyright-content-button">
              Back to home
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Train