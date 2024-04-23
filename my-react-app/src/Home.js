import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="Home-page-main-div">

                {/* header for main div */}
                <div className="Home-page-header-div">

                    {/* logo main div */}
                    <div className="Home-page-logo-main-div">

                        {/* logo div */}
                        <div className="Home-page-logo-div">
                            <img src={process.env.PUBLIC_URL + './FAV.png'} alt="" className="" />
                        </div>

                        {/* 99trip text div */}
                        <div className="Home-page-logo-text-div">
                            <span className="Home-page-logo-text-div-span">99</span>Trip
                        </div>
                    </div>

                    {/* navbar main div */}
                    <div className="Home-page-nav-main-div">

                        {/* individual nav items */}
                        <div className="Home-page-nav-individual-div">
                            About us
                        </div>

                        {/* individual nav items */}
                        <div className="Home-page-nav-individual-div">
                            Contact
                        </div>

                        {/* individual nav items */}
                        <div className="Home-page-nav-individual-div">
                            Dashboard
                        </div>

                        {/* individual nav items */}
                        <div className="Home-page-nav-individual-div">
                            Utility
                        </div>

                        {/* individual nav items */}
                        <div className="Home-page-nav-individual-div">
                            Settings
                        </div>

                        {/* individual nav items */}
                        <div className="Home-page-nav-individual-div">
                            Logout
                        </div>
                    </div>
                </div>

                {/* main section */}
                <div className="Home-page-main-section-div">
                    {/* journey div */}
                    <div className="Home-page-main-section-journey-div">
                        Journey Beyond Elegance
                    </div>
                    {/* Discover div */}
                    <div className="Home-page-main-section-Discover-div">
                        Discover Luxury Destinations
                    </div>
                </div>

                {/* home page footer */}
                <div className="Home-page-footer-main-div">
                    {/* footer icon main div */}
                    <div className="Home-page-footer-icon-main-div">
                        {/* individual flight icon for footer */}
                        <Link to='/Flight'>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './homeflight.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                        {/* individual hotel icon for footer */}
                        <Link to=''>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './homehotel.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                        {/* individual bus icon for footer */}
                        <Link to=''>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './homebus.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                        {/* individual train icon for footer */}
                        <Link to='/Train'>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './hometrain.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                        {/* individual tour icon for footer */}
                        <Link to='/Tour'>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './hometour.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                        {/* individual visa icon for footer */}
                        <Link to='/Visa'>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './homevisa.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                        {/* individual insurance icon for footer */}
                        <Link to=''>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './homeinsurance.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                        {/* individual utility icon for footer */}
                        <Link to='/Utility'>
                            <div className="Home-page-footer-icon-individual-div">
                                <img src={process.env.PUBLIC_URL + './homeutility.png'} alt="" className="Home-page-footer-icon-individual-div-logo" />
                            </div>
                        </Link>

                    </div>
                    {/* footer input main div */}
                    <div className="Home-page-footer-input-main-div">
                        <input
                            type="text"
                            className="form-control" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home