import React from 'react';
import './Flight.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Flight(){

    return(
        <>
          <div className='Flight-page-main-div'>
            {/* first-section */}
            {/* full icons */}
            <div className='Flight-page-first-div-header-icons-main-div'>
            <div className='Flight-page-first-div-header-icons'>
                     {/* one one icons */}
                     <div className='Flight-page-first-div-header-icon'>
                    <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>
                         
                     </div>

                     {/* <div className='Flight-page-first-div-header-icon'>
                     <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>
                        
                    </div>

                    <div className='Flight-page-first-div-header-icon'>
                    <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>
                        
                    </div>

                    <div className='Flight-page-first-div-header-icon'>
                    <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>

                    </div>

                    <div className='Flight-page-first-div-header-icon'>
                    <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>

                    </div>

                    <div className='Flight-page-first-div-header-icon'>
                    <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>

                    </div>

                    <div className='Flight-page-first-div-header-icon'>
                    <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>
 
                    </div>

                    <div className='Flight-page-first-div-header-icon'>
                    <img src={process.env.PUBLIC_URL+'/FAV.png'} alt='' className='flight-page-logoes'/>
 
                    </div> */}
                </div>
                </div>
            <div className='Flight-page-first-div'>
                
                 {/* second main div */}
                <div className='Flight-page-second-main-div'>
                    {/* second radio button div */}
                    <div className='Flight-page-second-div-radio-button'>
                       {/* one radio button */}
                       <div className='Flight-page-second-div-radio-button-one'>
                        <input type='radio'/>
                        <label className='Flight-page-second-div-radio-button-one-label'>One way</label>
                        </div>
                        <div className='Flight-page-second-div-radio-button-two'>
                        <input type='radio'/>
                        <label className='Flight-page-second-div-radio-button-one-label'>Round trip</label>
                        </div>
                    </div>
                </div>

                {/* third main div */}

                <div className='Flight-page-third-main-div'>
                    {/* third first section */}
                    <div className='Flight-page-third-div-first-section'>
                        {/* first section from div */}
                        
                        <div className='Flight-page-third-div-first-section-from-labels'>
                           {/* from */}
                           <div className='Flight-page-third-div-first-section-from-labels-from-for-display'>
                           <div className='Flight-page-third-div-first-section-from-labels-from'>
                            FROM
                           </div>
                           </div>
                            {/* delhi */}
                            <div className='Flight-page-third-div-first-section-from-labels-from-for-display-flex'>

                            <div className='Flight-page-third-div-first-section-from-labels-delhi'>
                            <input type='text' placeholder='Delhi' className='Input-for-Flight-Page'/>
                           </div>
                            {/* from */}
                            <div className='Flight-page-third-div-first-section-from-labels-airport'>
                            <input type='text' placeholder='DEL,Delhi Airport India'  className='Input-for-Flight-Page' />
                           </div>
                          </div>
                        </div>

                         {/* right section from div */}
                        
                         <div className='Flight-page-third-div-first-section-from-labels'>
                           {/* from */}
                           <div className='Flight-page-third-div-first-section-from-labels-from-for-display'>
                           <div className='Flight-page-third-div-first-section-from-labels-from'>
                            To
                           </div>
                           </div>
                            {/* delhi */}
                            <div className='Flight-page-third-div-first-section-from-labels-from-for-display-flex'>

                            <div className='Flight-page-third-div-first-section-from-labels-delhi'>
                              <input type='text' placeholder='Bengaluru' className='Input-for-Flight-Page'/>

                           </div>
                            {/* from */}
                            <div className='Flight-page-third-div-first-section-from-labels-airport'>
                               <input type='text' placeholder='BLR,Bengaluru Intl India' className='Input-for-Flight-Page'/>
                           </div>
                          </div>
                        </div>
                    </div>


                    {/* third second section */}
                    <div className='Flight-page-third-div-second-main-section'>
                        {/* creating four divs */}
                        <div className='Flight-page-third-div-second-main-section-leftside'>
                       <div className='Flight-page-third-div-second-main-section-name'>
                          Depart
                       </div>
                       <input type='date' className='form-control dateinputbutton'/>
                       </div>
                       <div className='Flight-page-third-div-second-main-section-leftside'>

                       <div className='Flight-page-third-div-second-main-section-name'>
                          Return
                       </div>
                       <input type='date' className='form-control dateinputbutton'/>
                       </div>

                       <div className='Flight-page-third-div-second-main-section-leftside'>
                        <div className='Flight-page-third-div-second-main-section-name'>
                           Travellers
                          </div>
                           <Dropdown>
                            <Dropdown.Toggle id='dropdown-main' className='Dropdown-for-flight-page-fourth-section '>
                              1 passenger
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item id='dropdown-list'>2 passengers</Dropdown.Item>
                              <Dropdown.Item>3 passengers</Dropdown.Item>
                              <Dropdown.Item>4 passengers</Dropdown.Item>
                              <Dropdown.Item>5 passengers</Dropdown.Item>
                              <Dropdown.Item>More</Dropdown.Item>  
                            </Dropdown.Menu>
                           </Dropdown>
                          </div>

                          <div className='Flight-page-third-div-second-main-section-leftside'>

                            <div className='Flight-page-third-div-second-main-section-name'>
                             Class
                            </div>

                            <Dropdown  >
                            <Dropdown.Toggle className='Dropdown-for-flight-page-fourth-section ' >
                              All
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>All</Dropdown.Item>
                              <Dropdown.Item>Economy</Dropdown.Item>
                              <Dropdown.Item>Premium Economy</Dropdown.Item>
                              <Dropdown.Item>Business</Dropdown.Item>
                              <Dropdown.Item>First Class</Dropdown.Item>
                              
                            </Dropdown.Menu>
                           </Dropdown>
                            {/* </div> */}
                        </div>
                    </div>

                    
                </div>


                 {/* fourt main div select fair */}
                 <div className='Flight-page-fourth-main-div'>
                  <div className='Flight-page-fourth-main-div-left-side'>
                    {/* first header */}
                    <div className='Flight-page-fourth-main-div-select-name'>
                        Select Fair Type:
                    </div>

                    {/* div for radio button */}

                    <div className='Flight-page-fourth-main-div-select-name-footer-radio-main'>
                         <div className='Flight-page-fourth-main-div-select-name-footer-radio'>
                         <input type='radio'/>
                        <label className='Flight-page-fourth-main-div-select-name-footer-radio-text'>Regular</label>

                          </div>
                          <div className='Flight-page-fourth-main-div-select-name-footer-radio'>
                         <input type='radio'/>
                        <label className='Flight-page-fourth-main-div-select-name-footer-radio-text'>Student</label>

                          </div>
                          <div className='Flight-page-fourth-main-div-select-name-footer-radio'>
                         <input type='radio'/>
                        <label className='Flight-page-fourth-main-div-select-name-footer-radio-text'>Senior ctz</label>

                          </div>
                          <div className='Flight-page-fourth-main-div-select-name-footer-radio'>
                         <input type='radio'/>
                        <label className='Flight-page-fourth-main-div-select-name-footer-radio-text'>Army</label>

                          </div>
                    </div>
                    </div>
                    <div className='Flight-page-fourth-main-div-right-side'>
                    <div className='Flight-page-search-button-main-div'>
                      <div className='Flight-page-search-button-main-div-search-button'>
                        <Button className='Flight-page-search-button'>Search</Button>
                        </div>
                        <div className='Flight-page-check-box-main-div'>
                          <div className='Flight-page-check-box-div'>
                            <input type='checkbox'/>
                          </div>
                          <div className='Flight-page-check-box-div-direct-name'>
                            <label className='Flight-page-check-box-div-direct-name-label'>Direct</label>
                          </div>
                          </div>
                        
                    
                    </div>
                    </div>
                 </div>
                  

            </div>
          </div>
          {/* second main section */}
          <div className='Flight-page-second-section-main-div'>
             <div className='Flight-page-second-section-main-div-for-exclusive-offers'>
                Exclusive Offers
             </div>
             <div className='Flight-page-second-section-top-flight-routes'>
              <div className='Flight-page-second-section-top-flight-routes-header'>
                Top <span className='Flight-page-second-section-top-flight-routes-header-flight'> Flight</span> Routes 
              </div>

              <div className='Flight-page-second-section-top-flight-routes-section'>
                {/* left side main */}
                  <div className='Flight-page-second-section-top-flight-routes-section-Left-side'>
                      {/* sub div for left side main div top flight routes */}
                      <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-label'>
                          <label>Delhi to Mumbai (DEl-BOM)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>

                      <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-label'>
                          <label>Mumbai to Delhi (BOM-DEl)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>

                      <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-label'>
                          <label> Delhi To Goa (BOM-DEl)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>

                      <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-label'>
                          <label> Delhi to Bengaluru(DEl-BLR)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>

                      <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-label'>
                          <label>Mumbai to Goa (BOM-GOL)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Left-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>
                  </div>
                  {/* right side main */}
                  <div className='Flight-page-second-section-top-flight-routes-section-Right-side'>
                       <div className='Flight-page-second-section-top-flight-routes-section-Right-side-left-side'>
                       <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-label'>
                          <label>Delhi to Patna (DEl-PAT)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>

                      <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-label'>
                          <label>Delhi to Kolkata (DEl-CCU)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>

                      <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-label'>
                          <label>Delhi to Pune (DEl-PNQ)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                      </div>

                      <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-label'>
                          <label>Kolkata to Delhi (CCU-DEL)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button-btn'>Search Flight</Button> 
                        </div> 
                      </div>
                       </div>

                       <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div'>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-label'>
                          <label>Mumbai to Bengalore (BOM-BLR)</label>
                        </div>
                        <div className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button'>
                          <Button className='Flight-page-second-section-top-flight-routes-section-Right-side-sub-div-button-btn'>Search Flight</Button>
                        </div>
                       </div>
                  </div>

              </div>
             </div>
          </div>

          {/* third main div */}
          <div className='Flight-page-third-section-main-div'>
           
            <div className='Flight-page-third-section-main-div-Best-Price-Guarentee'>
            <div className='Flight-page-third-section-main-div-logo'>
              <img src={process.env.PUBLIC_URL+'./bestprice.jpg'} alt='' className='Flight-page-third-section-main-div-logos'/>
            </div>
            <div className='Flight-page-third-section-main-div-logo-footer'>
              Best Price Guarentee
              </div>
            </div>

            <div className='Flight-page-third-section-main-div-Best-Price-Guarentee'>
            <div className='Flight-page-third-section-main-div-logo'>
              <img src={process.env.PUBLIC_URL+'./easybooking.jpg'} alt='' className='Flight-page-third-section-main-div-logos'/>
            </div>
            <div className='Flight-page-third-section-main-div-logo-footer'>

             Easy Booking
             </div>
            </div>

            <div className='Flight-page-third-section-main-div-Best-Price-Guarentee'>
            <div className='Flight-page-third-section-main-div-logo'>
              <img src={process.env.PUBLIC_URL+'./nohiddenprice.jpg'} alt='' className='Flight-page-third-section-main-div-logos'/>
            </div>
            <div className='Flight-page-third-section-main-div-logo-footer'>
            No Hidden Charges
            </div>
            </div>

            <div className='Flight-page-third-section-main-div-Best-Price-Guarentee'>
            <div className='Flight-page-third-section-main-div-logo'>
              <img src={process.env.PUBLIC_URL+'./worldwide.jpg'} alt='' className='Flight-page-third-section-main-div-logos'/>
            </div>
            <div className='Flight-page-third-section-main-div-logo-footer'>
            World Wide Connectivity
            </div>
            </div>

            <div className='Flight-page-third-section-main-div-Best-Price-Guarentee'>
              <div className='Flight-page-third-section-main-div-logo'>
                <img src={process.env.PUBLIC_URL+'./awardwinning.jpg'} alt='' className='Flight-page-third-section-main-div-logos'/>
              </div>
              <div className='Flight-page-third-section-main-div-logo-footer'>
             Awarded as Top Tour operated as several Tourism Board's
             </div>
            </div>
          </div>

          <div className='Flight-page-fourth-section-main-div'>
            <div className='Flight-page-fourth-section-main-div-header'>
              <p>
                Book Online <span className='Flight-page-fourth-section-main-div-header-color-chnage'>Flights, Hotels, Buses</span> 
                  and <span className='Flight-page-fourth-section-main-div-header-color-chnage'>Holiday Packages </span>
              </p>
              </div>
              <div className='Flight-page-fourth-section-main-div-header-footer'>
                <p>
                  Flybook was incorporated in <span className='fourth-clr-chge'> June 2015 </span>at
                  <span className='fourth-clr-chge'>Bangalore India</span> , as a Technology developer known as
                  <span className='fourth-clr-chge'>Flybook IT SOLUTIONS</span> later in 2017  Flybook entered travel industry signing an agreement
                   with <span className='fourth-clr-chge'>IBIBO Group</span> and started serving its agents, now in <span className='fourth-clr-chge'>2019</span>.
                    Flybook has developed its <span className='fourth-clr-chge'>own
                   technology </span>and serving its<span className='fourth-clr-chge'> B2B agents as Flybook TRAVEL SOLUTIONS.</span>
                </p>
                <p>
                  The Company is one of the fast growing & profitable travel company in Karnataka and expanding
                  its services across PAN India online space driven by technology, better buying due to demand
                  aggregation & forward cash flows. The company is one of the leading technology service provider
                  for transportation ticketing, accommodation reservation, corporate travel management, travel 
                  ancillaries, retail and financial services
                </p>
              </div>
            
          </div>

          {/* fifth main div */}
          <div className='Flight-page-fifth-section-main-div'>
            {/* fifth main div 1 div */}
            <div className='Flight-page-fifth-section-main-first-div'>
              <div className='Flight-page-fifth-section-main-first-div-header'>
                Get exclusive deals on our product
              </div>
              <div className='Flight-page-fifth-section-main-first-div-header-footer'>
                Book Flights, Flight Status, Search Hotels, Domestic Flights, International Flights, 
                Holiday Packages, Visa Assistance, Travel Card, Travel Sim, Pay Small
              </div>
            </div>

            <div className='Flight-page-fifth-section-main-first-div'>
              <div className='Flight-page-fifth-section-main-first-div-header'>
                Follow us !
              </div>
              <div className='Flight-page-fifth-section-main-first-div-header-footer'>
               Stay tuned and access the latest deals and discount with:
              </div>
              <div className='Flight-page-fifth-section-main-first-div-header-footer-icons'>
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagramSquare />
              </div>
            </div>

            <div className='Flight-page-fifth-section-main-first-div'>
              <div className='Flight-page-fifth-section-main-first-div-header'>
                Get Inspired for your next trip !
              </div>
              <div className='Flight-page-fifth-section-main-first-div-header-footer'>
               Find information about the best travel destinations and events in our Dreamguides.
               Discover our travel guide.
              </div>
            </div>
          </div>

          {/* footer main div */}

          <div className='Flight-page-footer-main-div'>
            <div className='Flight-page-footer-main-div-first-name'>
              Invenu Global Gateway LLP
            </div>
            <div className='Flight-page-footer-main-div-second-nav-main'>
              <div className='Flight-page-footer-main-div-second-navs'>
                About us
              </div>
              <div className='Flight-page-footer-main-div-second-nav'>
                Terms and Conditions
              </div>
              <div className='Flight-page-footer-main-div-second-nav'>
                Privacy Policy
              </div>
              <div className='Flight-page-footer-main-div-second-nav'>
                Disclaimer
              </div>
              <div className='Flight-page-footer-main-div-second-nav'>
                Contact Us
              </div>
              <div className='Flight-page-footer-main-div-second-nav'>
                Refer a Customer
              </div>
              <div className='Flight-page-footer-main-div-second-nav'>
                Blog
              </div>
            </div>

            <div className='Flight-page-footer-main-div-copyright-content '>
              Copyright @ 2008-2024 
              <Link to='/Home'>
              <Button className='Flight-page-footer-main-div-copyright-content-button'>
                   Back to home
              </Button>
              </Link>
            </div>

          </div>
        </>
    )
}
export default Flight