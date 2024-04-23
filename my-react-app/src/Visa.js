import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Visa.css';
// import { Button } from "bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Dropdown } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import {Link} from 'react-router-dom';

function Visa() {
    return (
        <>
            <div className="Visa-page-main-div">
                {/* main-div first-section */}
                <div className="Visa-page-first-section-main-div">
                    {/* transparent div */}
                    <div className="Visa-page-transparent-div">
                        <div className="Visa-page-first-section-main-div-header">
                            {/* <marquee direction='right'> */}
                            Visa Process Made Easy
                            {/* </marquee> */}
                        </div>
                        <div className="Visa-page-first-section-main-div-footer-main">
                            <div className="Visa-page-first-section-main-div-footer-input">
                                <input type="text"
                                    className="form-control Visa-page-first-section-main-div-footer-input-inp"
                                    placeholder="Search Country" />
                            </div>
                            <div className="Visa-page-first-section-main-div-footer-search">
                                <button className="btn btn-primary form-control Visa-page-first-section-main-div-footer-search-button ">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* main-div second section */}
                <div className="Visa-page-second-section-main-div">
                    {/* flag main div */}
                    <div className="Visa-page-second-section-main-div-header">
                        <div className="Visa-page-second-section-main-div-headers">
                            E - Visa Countries
                        </div>
                        <div className="Visa-page-icon-location-div">
                            <FaLocationDot className="Visa-page-second-section-main-div-header-icon" />
                        </div>
                    </div>
                    {/* flag section main */}
                    <div className="Visa-page-second-main-flag-section-main">
                        {/* flag section individual div */}
                        {/* Australia */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './Australiaflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                Australia
                            </div>
                        </div>

                        {/* Singapore */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './singaporeflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                Singapore
                            </div>
                        </div>

                        {/* Thailand */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './thailandflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                Thailand
                            </div>
                        </div>

                        {/* Malaysia */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './malaysiaflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                Malaysia
                            </div>
                        </div>

                        {/* Turkey */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './turkeyflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                Turkey
                            </div>
                        </div>

                        {/* United Arab Emirates */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './unitedarabflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                United Arab Emirates
                            </div>
                        </div>

                        {/* United kingdom */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './Unitedkingdomflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                United Kingdom
                            </div>
                        </div>

                        {/* European Monetary Union */}
                        <div className="Visa-page-second-main-flag-section-individual-div">
                            {/* flag individual div header part */}
                            <div className="Visa-page-second-main-flag-section-individual-div-header">
                                <img src={process.env.PUBLIC_URL + './Europeanflag.jpg'} alt="" className="Visa-page-second-main-flag-section-individual-div-header-image" />
                            </div>
                            <div className="Visa-page-second-main-flag-section-individual-div-footer">
                                European Monetary Union
                            </div>
                        </div>

                    </div>
                </div>

                {/* main-div third section */}
                <div className="Visa-page-third-section-main-div">
                    {/* main div third section header */}
                    <div className="Visa-page-third-section-main-div-header">
                        Popular <span className="color-change-for-visapage">Visa Destinations</span>
                    </div>
                    {/* main div third section footer */}
                    <div className="Visa-page-third-section-main-div-footer">

                        {/* section 1 */}
                        <div className="Visa-page-third-section-main-div-footer-section-one">
                            {/* Turkey div */}
                            <div className="Visa-page-third-section-main-div-footer-div-one" >
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    Turkey e-Visa
                                </div>
                                <div className="Visa page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './turkeyimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>

                            {/* Malaysia div */}
                            <div className="Visa-page-third-section-main-div-footer-div-one">
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    Malaysia Visa
                                </div>
                                <div className="Visa page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './Malaysiaimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>

                            {/* Thailand div */}
                            <div className="Visa-page-third-section-main-div-footer-div-one">
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    Thailand Visa
                                </div>
                                <div className="Visa page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './Thailandimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>

                            {/* USA div */}
                            <div className="Visa-page-third-section-main-div-footer-div-one">
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    USA Visa
                                </div>
                                <div className="Visa page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './USAimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* section 2 */}
                        <div className="Visa-page-third-section-main-div-footer-section-two">
                            {/* Dubai div */}

                            <div className="Visa-page-third-section-main-div-footer-div-one">
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    Dubai Visa
                                </div>
                                <div className="Visa page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './Dubaiimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>

                            {/* Singapore */}
                            <div className="Visa-page-third-section-main-div-footer-div-one" >
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    Singapore Visa
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './Singaporeimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>

                            {/* Uk */}
                            <div className="Visa-page-third-section-main-div-footer-div-one">
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    UK Visa
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './Ukimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>

                            {/* Australia */}
                            <div className="Visa-page-third-section-main-div-footer-div-one" >
                                <div className="Visa-page-third-section-main-div-footer-div-one-header">
                                    Australia Visa
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content">
                                    <img src={process.env.PUBLIC_URL + './Australiaimage.jpg'} alt=""
                                        className="Visa-page-third-section-main-div-footer-div-one-image-content-image" />
                                </div>
                                <div className="Visa-page-third-section-main-div-footer-div-one-image-content-footer">
                                    <button className="Visa-page-third-section-main-div-footer-div-one-image-content-footer-button">
                                        Get complete info.
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* main div for application for visa application Centre */}
                    <div className="Visa-page-visa-application-center-main-div">
                        {/* header for visa application center */}
                        <div className="Visa-page-visa-application-center-header">
                            Appoinment for the
                            <span className="color-change-for-visapage">
                                Visa Application Center
                            </span>
                        </div>

                        {/* main application form div */}
                        <div className="Visa-page-appoinment-form-main-div">
                            <div className="Visa-page-appoinment-form-sub-div">
                                {/* header row * mandatory */}
                                <div className="Visa-appoinment-mandatory-main-row">
                                    <div className="Visa-appoinment-field-mandatory-name">
                                        Fields marked with
                                        <span className="color-change-for-visapages">* are mandatory</span>
                                    </div>
                                    <div className="Visa-appoinment-fill-in english">
                                        Kindly Fill the Form in
                                        <span className="color-change-for-visapages"> English Only</span>
                                    </div>
                                </div>
                                {/* form input main div */}
                                <div className="Visa-appoinment-form-main-div">
                                    {/* Appoinment booking for */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Appoinment Booking for
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <input
                                                type='radio'
                                                className="form-group Visa-appoinment-form-right-side-radio-button" />
                                            <label className="form-group Visa-appoinment-form-right-side-label">Individual</label>
                                            <input
                                                type='radio'
                                                className="form-group Visa-appoinment-form-right-side-radio-button" />
                                            <label className="form-group Visa-appoinment-form-right-side-label">Family</label>
                                        </div>
                                    </div>


                                    {/* Select passport issue place */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Select passport Issue Place <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <Dropdown >
                                                <Dropdown.Toggle className="Visa-appoinment-form-right-side-dropdown">
                                                    Issue Place
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Select</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    {/* select current residence */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Select Current Residence <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <Dropdown >
                                                <Dropdown.Toggle className="Visa-appoinment-form-right-side-dropdown">
                                                    Current Residence
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Select</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    {/* Duration of stay at current residence */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Duration of Stay (at current residence) <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <Dropdown >
                                                <Dropdown.Toggle className="Visa-appoinment-form-right-side-dropdown">
                                                    Select Duration
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>1 day</Dropdown.Item>
                                                    <Dropdown.Item>2 day</Dropdown.Item>
                                                    <Dropdown.Item>3 day</Dropdown.Item>
                                                    <Dropdown.Item>4 day</Dropdown.Item>
                                                    <Dropdown.Item>5 day</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    {/* Select your center */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Select your Center <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <Dropdown >
                                                <Dropdown.Toggle className="Visa-appoinment-form-right-side-dropdown">
                                                    Select Center
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Select</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    {/* Appoinment Category */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Select Appoinment Category <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <Dropdown >
                                                <Dropdown.Toggle className="Visa-appoinment-form-right-side-dropdown">
                                                    Select Category
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Applying for new Visa</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    {/* phone number */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Enter Phone Number <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <input
                                                type="text"
                                                className="Visa-appoinment-form-right-side-dropdown"
                                                placeholder="XXXXXXXXXX" />
                                        </div>
                                    </div>

                                    {/* Registered Email Id  */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Enter Registered Email Id <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <input
                                                type="email"
                                                className="Visa-appoinment-form-right-side-dropdown"
                                                placeholder="Enter Registered Email Id" />
                                        </div>
                                    </div>

                                    {/* Request Verification Code */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side">
                                            <Button className="Visa-appoinment-form-right-side-button">Request Verification Code</Button>
                                        </div>
                                    </div>

                                    {/* Verification Code */}
                                    <div className="Visa-appoinment-form-individual-div">
                                        {/* leftside form   */}
                                        <div className="Visa-appoinment-form-left-side">
                                            <label className="form-group">
                                                Enter Verification Code <span className="star-color-change">*</span>
                                            </label>
                                        </div>
                                        {/* Rightside form */}
                                        <div className="Visa-appoinment-form-right-side-last">
                                            <input
                                                type="text"
                                                className="Visa-appoinment-form-right-side-dropdown-last"
                                                placeholder="Enter Verfication Code" />
                                            <Button className="Visa-appoinment-form-right-side-dropdown-last-button">Continue</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* important notice main div */}
                        <div className="Visa-page-important-notice-main-div">
                            {/* header for importtant notice */}
                            <div className="Visa-page-important-notice-header">
                                Important Notice
                            </div>
                            <div className="Visa-page-important-notice-footer">
                                <ul className="Visa-page-important-notice-footer-ul">
                                    <li className="Visa-page-important-notice-footer-li">
                                        Applicants are required to recheck all the details of the passport (
                                        Name, passport number, passport issue date, Date of Birth, passport expiry date)
                                        before confirming appoinment. The details cannot be modify once it saved to our
                                        database and you cannot cancel the appoinment once it is confirmed.
                                    </li>
                                    <li className="Visa-page-important-notice-footer-li">
                                        processing time for the application will start from the day when it reach to the center.
                                        It may take 3 or 4 days for the process.
                                    </li>
                                    <li className="Visa-page-important-notice-footer-li">
                                        Notice: Payments made during an appoinment may not be refunded.
                                    </li>
                                    <li className="Visa-page-important-notice-footer-li">
                                        This is the information for the applicants to carefully read above who are applying / submitting
                                        for Visa .
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* footer for the Visa page */}
                <div className="footer-main-div-for-visa-page">
                    {/* header for footer main div in visa page */}
                    <div className="footer-main-div-for-visa-page-header">
                        Invenu Global Gateway LLP
                    </div>
                    {/* main content for footer in visa page */}
                    <div className="footer-main-div-for-visa-page-main-content-main-div">
                        {/* individual About usin main content */}
                        <div className="footer-main-div-for-visa-page-main-content-main-div-contents">
                            About Us
                        </div>
                        {/* individual Term and Conditions main content */}
                        <div className="footer-main-div-for-visa-page-main-content-main-div-content">
                            Terms and Conditions
                        </div>
                        {/* individual Privacy policy main content */}
                        <div className="footer-main-div-for-visa-page-main-content-main-div-content">
                            Privacy Policy
                        </div>
                        {/* individual Disclaimer main content */}
                        <div className="footer-main-div-for-visa-page-main-content-main-div-content">
                            Disclaimer
                        </div>
                        {/* individual Contact Us main content*/}
                        <div className="footer-main-div-for-visa-page-main-content-main-div-content">
                            Contact Us
                        </div>
                        {/* individual Refer a customer main content */}
                        <div className="footer-main-div-for-visa-page-main-content-main-div-content">
                            Refer a Customer
                        </div>
                        {/* individual Blog main content */}
                        <div className="footer-main-div-for-visa-page-main-content-main-div-content">
                            Blog
                        </div>
                        <div className="visa-page-footer-icon">
                            <div className="footer-section-visa-instgram-icon">
                                <FaInstagram />
                            </div>
                            <div className="footer-section-visa-facebook-icon">
                                <CiFacebook />
                            </div>
                            <div className="footer-section-visa-twitter-icon">
                                <CiTwitter />
                            </div>
                        </div>
                    </div>
                    <div className="Visa-page-footer-main-copyright-content">
                        copyright @ 2008-2024
                        <Link to='/Home'>
                        <Button className="Visa-page-footer-main-copyright-content-button">
                            Go to Home
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Visa