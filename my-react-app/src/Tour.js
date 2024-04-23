import React from "react";
import './Tour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { MdNoMeals } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
function Tour() {
    return (
        <>
            <div className="Tour-page-main-div">
                {/* header main div */}
                <div className="Tour-header-main-div">
                    {/* header div main content */}
                    {/* Transparent div */}
                    <div className="Tour-header-transparent-div">
                        {/* Holiday Package div */}
                        <div className="Tour-header-transparent-div-Holiday-packages">
                            Holiday Packages
                        </div>
                        {/* search your destination main div */}
                        <div className="Tour-header-search-main-div">
                            {/* Search input div */}
                            <div className="Tour-header-search-input-div">
                                <input
                                    type="text"
                                    placeholder="Search Your Dream Destination !"
                                    className="form-control Tour-header-search-input" />
                            </div>
                            {/* search button */}
                            <div className="Tour-header-search-button-div">
                                <Button className="Tour-header-search-button">Search <FaSearch className="Tour-header-search-button-icon" /></Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section one main div make your trip */}
                <div className="Tour-section-one-main-div">
                    {/* plan your trip main div */}
                    <div className="Tour-section-one-trip-main-div">
                        <div className="Tour-section-one-trip-div">
                            Let us plan you  <br></br> for a
                            <span className="Tour-section-one-trip-div-different">perfect Holiday</span>
                        </div>
                        {/* browse category */}
                        <div className="Tour-section-one-browse-category">
                            <Button className="Tour-section-one-browse-category-button">
                                Browse Categories
                            </Button>
                        </div>
                    </div>
                </div>

                {/* section two main div Category */}
                <div className="Tour-section-two-main-div">
                    {/* indivudal etravangence category */}
                    <div className="Tour-section-two-individual-main-div">
                        {/* individual image div */}
                        <div className="Tour-section-two-individual-div">
                            <div className="Tour-section-two-individual-div-white-div">
                                <img src={process.env.PUBLIC_URL + './extravagencelogo.png'} alt="" className="Tour-section-two-individual-div-white-div-logo" />
                            </div>
                        </div>
                        {/* individual div name  */}
                        <div className="Tour-section-two-individual-div-name">
                            Extravagence
                        </div>
                    </div>
                    {/* indivudal Fixed Depature category */}
                    <div className="Tour-section-two-individual-main-div">
                        {/* individual image div */}
                        <div className="Tour-section-two-individual-for-fixed-depature-div">
                            <div className="Tour-section-two-individual-div-white-div">
                                <img src={process.env.PUBLIC_URL + './fixeddepature.png'} alt="" className="Tour-section-two-individual-div-white-div-logo" />
                            </div>
                        </div>
                        {/* individual div name  */}
                        <div className="Tour-section-two-individual-div-name">
                            Fixed Depatures
                        </div>
                    </div>
                    {/* indivudal Islands category */}
                    <div className="Tour-section-two-individual-main-div">
                        {/* individual image div */}
                        <div className="Tour-section-two-individual-for-islands-div">
                            <div className="Tour-section-two-individual-div-white-div">
                                <img src={process.env.PUBLIC_URL + './islandlogo.png'} alt="" className="Tour-section-two-individual-div-white-div-logo" />
                            </div>
                        </div>
                        {/* individual div name  */}
                        <div className="Tour-section-two-individual-div-name">
                            Islands
                        </div>
                    </div>
                    {/* indivudal Historical Places category */}
                    <div className="Tour-section-two-individual-main-div">
                        {/* individual image div */}
                        <div className="Tour-section-two-individual-for-Historical-places-div">
                            <div className="Tour-section-two-individual-div-white-div">
                                <img src={process.env.PUBLIC_URL + './historicalplaces.png'} alt="" className="Tour-section-two-individual-div-white-div-logo" />
                            </div>
                        </div>
                        {/* individual div name  */}
                        <div className="Tour-section-two-individual-div-name">
                            Historical Places
                        </div>
                    </div>
                    {/* indivudal Hill Stations category */}
                    <div className="Tour-section-two-individual-main-div">
                        {/* individual image div */}
                        <div className="Tour-section-two-individual-for-Hill-stations-div">
                            <div className="Tour-section-two-individual-div-white-div">
                                <img src={process.env.PUBLIC_URL + './hillstationlogo.png'} alt="" className="Tour-section-two-individual-div-white-div-logo" />
                            </div>
                        </div>
                        {/* individual div name  */}
                        <div className="Tour-section-two-individual-div-name">
                            Hill Stations
                        </div>
                    </div>
                    {/* indivudal Religious category */}
                    <div className="Tour-section-two-individual-main-div">
                        {/* individual image div */}
                        <div className="Tour-section-two-individual-for-Religious-Places-div">
                            <div className="Tour-section-two-individual-div-white-div">
                                <img src={process.env.PUBLIC_URL + './religiousplacelogo.png'} alt="" className="Tour-section-two-individual-div-white-div-logo" />
                            </div>
                        </div>
                        {/* individual div name  */}
                        <div className="Tour-section-two-individual-div-name">
                            Religious Places
                        </div>
                    </div>
                </div>
                {/* section three main div best selling packages */}
                <div className="Tour-section-three-main-div">
                    {/* header for section three  */}
                    <div className="Tour-section-three-header-div">
                        Best Selling Packages
                    </div>
                    {/* content for section three */}
                    <div className="Tour-section-three-content-main-div">
                        {/* content section one in section three */}
                        <div className="Tour-section-three-content-section-one">
                            {/*Macau individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './Macau.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        6 Nights 7 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 750
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" />  Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" />  Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" /> Meals
                                    </div>
                                    {/* individual Permit div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                            {/*Phuket individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './Phuket.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        5 Nights 6 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 850
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" /> Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" />   Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" />  Meals
                                    </div>

                                    {/* individual Permit div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                            {/*Leh individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './leh.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        4 Nights 5 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 550
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" /> Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" /> Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" />  Meals
                                    </div>
                                    {/* individual Permit div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                            {/*Ho chi minh city individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './hochiminhcity.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        6 Nights 7 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 750
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" /> Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" />  Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" />  Meals
                                    </div>
                                    {/* individual Sight seeing div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* content section one in section three */}
                        <div className="Tour-section-three-content-section-two">
                            {/*USA individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './USA.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        4 Nights 5 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 950
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" />  Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" />  Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" /> Meals
                                    </div>
                                    {/* individual Sight seeing div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                            {/*Shimla individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './shimla.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        5 Nights 6 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 650
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" />  Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" />  Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" /> Meals
                                    </div>
                                    {/* individual Sight seeing div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                            {/* Munnar individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './Munnar.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        4 Nights 5 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 850
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" />  Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" />  Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" /> Meals
                                    </div>
                                    {/* individual Sight seeing div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                            {/* Malaysia individual content for section one in section three */}
                            <div className="Tour-section-three-individual-content">
                                <img src={process.env.PUBLIC_URL + './Malaysia.jpg'} alt="" className="Tour-section-three-individual-content-image" />
                                {/* header */}
                                <div className="Tour-section-three-individual-content-header">
                                    <div className="Tour-section-three-individual-content-header-nights">
                                        5 Nights 6 days
                                    </div>
                                    <div className="Tour-section-three-individual-content-header-prices">
                                        $ 1050
                                    </div>
                                </div>
                                {/* main */}
                                <div className="Tour-section-three-individual-content-main">
                                    {/* individual flight div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdFlight className="Tour-section-three-individual-content-main-individual-icon" />  Flights
                                    </div>
                                    {/* individual hotel div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaHotel className="Tour-section-three-individual-content-main-individual-icon" />  Hotels
                                    </div>
                                    {/* individual meals div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <MdNoMeals className="Tour-section-three-individual-content-main-individual-icon" /> Meals
                                    </div>
                                    {/* individual Sight seeing div for main */}
                                    <div className="Tour-section-three-individual-content-main-individual">
                                        <FaCameraRetro className="Tour-section-three-individual-content-main-individual-icon" /> Sight Seeing
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="Tour-section-three-individual-content-footer">
                                    <Button className="Tour-section-three-individual-content-footer-button">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section four Extravagence main div */}
                <div className="Tour-section-four-main-div">
                    {/* header Extravagence div */}
                    <div className="Tour-section-four-header-div">
                        Extravagence
                    </div>
                    {/* main content in Extravagence div */}
                    <div className="Tour-section-four-main-content-div">
                        {/* individual USA div for main content in Extravagence div */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                USA | East & West coast
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './Usaextravangeimage.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 2 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 8 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">13 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">11 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>New york |
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N </span>Washington |
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N</span> Harrisburg |
                                <span className="Tour-section-four-individual-logo-footer-color-change"> +5 </span>More
                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $6789
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>

                        {/* individual Japan div for main content in Extravagence div */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Japan 4 Star
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './japanextravagence.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 3 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 12 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">20 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">16 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>Osaka |
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N </span>Hiroshima |
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N</span> Nagoya |
                                <span className="Tour-section-four-individual-logo-footer-color-change"> +4 </span>More
                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $8764
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>

                        {/* individual colombo div for main content in Extravagence div */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Colombo | Bentota 4 Star
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './Colomboextravagence.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 1 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 15 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">18 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">12 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>Bentato |
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>Colombo |
                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $6784
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>


                    </div>
                    {/* view more button for Tour section Extravagence Section */}
                    <div className="Tour-section-four-view-more-button-div">
                        <Button className="Tour-section-four-view-more-button">
                            View More<FaArrowRightLong className="Tour-section-four-view-more-button-icon" />
                        </Button>
                    </div>
                </div>

                {/* section five Fixed Depature main div */}
                <div className="Tour-section-four-main-div">
                    {/* header Extravagence div */}
                    <div className="Tour-section-four-header-div">
                        Fixed Depature
                    </div>
                    {/* main content in Fixed Depature div */}
                    <div className="Tour-section-four-main-content-div">
                        {/* individual Dubai div for main content in Fixed Depature div */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Dubai
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './Dubaifixed.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 2 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 1 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">7 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">8 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">4N </span>Dubai
                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $8789
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>

                        {/* individual Vietnum with Cruise | FD for main content in Fixed Depature div */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Vietnum with Cruise | FD
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './Vietnumfixed.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 1 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 3 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">6 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">11 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>Ho chi minh city|
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>Da nang|
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N </span>Ha long bay|
                                <span className="Tour-section-four-individual-logo-footer-color-change">+1 </span>More

                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $9789
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>

                        {/* individual Europe | Fixed Dept. for main content in Fixed Depature div  */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Europe | Fixed Dept.
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './Europefixed.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 2 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 4 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">8 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">12 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">3N </span>Paris|
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>Eindhoven|
                                <span className="Tour-section-four-individual-logo-footer-color-change">3N </span>Olten|
                                <span className="Tour-section-four-individual-logo-footer-color-change">+3 </span>More

                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $9789
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* View more button in fixed depature */}
                <div className="Tour-section-five-view-more-button-div">
                    <Button className="tour-section-five-view-more-button">View More
                        <FaArrowRightLong className="tour-section-five-view-more-button-icon" />
                    </Button>
                </div>

                {/* section six Islands main div */}
                <div className="Tour-section-six-main-div">
                    {/* header for section six islands */}
                    <div className="Tour-section-four-header-div">
                        Islands
                    </div>
                    {/* main content for section six main div */}
                    <div className="Tour-section-four-main-content-div">
                        {/* individual Mauritius Bliss for main content in Islands div  */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Mauritius Bliss
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './Mauritiusisland.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 2 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 1 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">5 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">3 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">4N </span>Mauritius

                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $12765
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>

                        {/* individual Fascinating Seychelles */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Fascinating Seychelles
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './Fascinatingseychellesisland.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 2 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 3 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">5 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">4 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N </span>Praslin island |
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N</span> La digue |
                                <span className="Tour-section-four-individual-logo-footer-color-change">2N</span> Mahe island

                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $10245
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>

                        {/* individual Port Blair | Havelock island */}
                        <div className="Tour-section-four-individual-div">
                            {/* header for individual div */}
                            <div className="Tour-section-four-individual-div-header">
                                Port Blair | Havelock island
                            </div>
                            {/* image for individual div */}
                            <div className="Tour-section-four-individual-div-image">
                                <img src={process.env.PUBLIC_URL + './PortBlairisland.jpg'} alt="" className="Tour-section-four-individual-div-image-style" />
                            </div>
                            {/* logo div for individual div */}
                            <div className="Tour-section-four-individual-div-logo">
                                {/* individual logo transfer for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './trnasferlogoextravange.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 3 Transfer</div>
                                </div>

                                {/* individual logo hotel for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './Hotellogoextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text"> 4 Hotels</div>
                                </div>

                                {/* individual logo Meal for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './mealextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individual-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">5 Meals</div>
                                </div>

                                {/* individual logo Sightseeing for logo div for individual div */}
                                <div className="Tour-section-four-individual-div-logo-individual">
                                    <img src={process.env.PUBLIC_URL + './sightseeingextravagence.png'} alt="" className="Tour-section-four-individual-div-logo-individuals-style" />
                                    <div className="Tour-section-four-individual-div-logo-individual-text">3 Sightseeing</div>
                                </div>

                            </div>

                            {/* logo footer div  */}
                            <div className="Tour-section-four-individual-logo-footer">
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N </span>Port Blair |
                                <span className="Tour-section-four-individual-logo-footer-color-change">3N</span> Havelock Island |
                                <span className="Tour-section-four-individual-logo-footer-color-change">1N</span> Port Blair

                            </div>

                            {/* price star main div */}
                            <div className="Tour-section-four-price-star-main-div">
                                <div className="Tour-section-four-price-div">
                                    $13723
                                </div>
                                <div className="Tour-section-four-star-div">
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />
                                    <img src={process.env.PUBLIC_URL + './reviewstarlogo.png'} alt="" className="Tour-section-four-star-div-logo" />

                                </div>
                            </div>
                        </div>


                    </div>
                    {/* Tour Page Section Six view more Button */}
                    <div className="Tour-page-section-six-view-more-div">
                        <Button className="Tour-page-section-six-view-more-div-button"
                            id='tour-page-section-six-view-more-div-button'>
                            View More
                            <FaArrowRightLong className="tour-section-five-view-more-button-icon"
                                id='tour-section-five-view-more-button-icon' />
                        </Button>
                    </div>
                </div>

                {/* footer main div for Tour page */}
                <div className="Tour-page-footer-section-main-div">
                    {/* header for footer div for Tour Page */}
                    <div className="Tour-page-footer-section-global-div">
                        Invenu Global Gateway LLP
                    </div>
                    {/* main in footer div for Tour page */}
                    <div className="Tour-page-footer-section-main-content">
                        {/* individual footer main content in tour page */}
                        <div className="Tour-page-footer-section-individuals-content">
                            About us
                        </div>
                        {/* individual footer main content in tour page */}
                        <div className="Tour-page-footer-section-individual-content">
                            Terms and Conditions
                        </div>
                        {/* individual footer main content in tour page */}
                        <div className="Tour-page-footer-section-individual-content">
                            Privacy Policy
                        </div>
                        {/* individual footer main concept in tour page */}
                        <div className="Tour-page-footer-section-individual-content">
                            Disclaimer
                        </div>
                        {/* individual footer main concept in tour page */}
                        <div className="Tour-page-footer-section-individual-content">
                            Contact Us
                        </div>
                        {/* individual footer main concept in tour page */}
                        <div className="Tour-page-footer-section-individual-content">
                            Refer a Customer
                        </div>
                        {/* individual footer main concept in tour page */}
                        <div className="Tour-page-footer-section-individual-content">
                            Blog
                        </div>
                        {/* icon main div */}
                        <div className="Tour-page-icon-main-div">
                            {/* individual divs */}
                            <div className="Tour-page-icon-individual-div">
                                <FaInstagram />
                            </div>
                            {/* individual divs */}
                            <div className="Tour-page-icon-individual-div">
                                <CiFacebook />
                            </div>
                            {/* individual divs */}
                            <div className="Tour-page-icon-individual-div">
                                <CiTwitter />
                            </div>
                        </div>
                    </div>
                    {/* copyright content for tour page */}
                    <div className="Tour-page-footer-copyright-content">
                        copyright @ 2008 - 2024
                        <Link to='/Home'>
                            <Button className="Tour-page-footer-copyright-content-button">
                                Go to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tour