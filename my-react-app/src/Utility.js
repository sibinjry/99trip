import React from "react";
import './Utility.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Utility() {
    return (
        <>
            {/* Utility page main div */}
            <div className="Utility-page-main-div">
                {/* header div in utility page */}
                <div className="Utility-page-header-section">
                    {/* transparent Black div */}
                    <div className="Utility-page-header-section-transparent-div">
                        {/* recharge header div */}
                        <div className="Utility-page-recharge-header">
                            Recharge / Utility Bill Payments
                        </div>
                    </div>
                </div>

                {/* main content in utility page */}
                <div className="Utility-page-main-section-main-div">
                    {/* main content section one in utility page */}
                    <div className="Utility-page-section-one-main">
                        {/* individual prepaid mobile div in section one main utility page */}
                        <Link to='/Utilitymobile'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitymobile.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Prepaid Mobile</div>
                            </div>
                        </Link>

                        {/* individual DTH div in section one main utility page */}
                        <Link to='/Dth'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitydth.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">DTH</div>
                            </div>
                        </Link>

                        {/* individual Postpaid Mobile div in section one main utility page */}
                        <Link to='/Utilitymobile'>

                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitypostpaid.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Postpaid Mobile</div>
                            </div>
                        </Link>

                        {/* individual Landline div in section one main utility page */}
                        <Link to='/Laneline'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitylandline.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Land Line</div>
                            </div>
                        </Link>

                        {/* individual Data Card div in section one main utility page */}
                        <Link to='/Datacard'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitydatacard.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Data Card</div>
                            </div>
                        </Link>

                        {/* individual Broad Band div in section one main utility page */}
                        <Link to='/Broadband'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitybroadband (2).png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Broad Band</div>
                            </div>
                        </Link>

                        {/* individual Insurance div in section one main utility page */}
                        <Link to='/Utilityinsurance'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilityinsurance.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Insurance</div>
                            </div>
                        </Link>

                        {/* individual Gas div in section one main utility page */}
                        <Link to='/Utilitygas'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitygas.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Gas</div>
                            </div>
                        </Link>

                        {/* individual ELectricity div in section one main utility page */}
                        <Link to='/Electricity'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilityelectricity.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Electricity</div>
                            </div>
                        </Link>
                    </div>

                    {/* main content section two in utility page */}
                    <div className="Utility-page-section-two-main">

                        {/* individual Water div in section one main utility page */}
                        <Link to='/Water'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitywater.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Water</div>
                            </div>
                        </Link>

                        {/* individual Fasteg div in section one main utility page */}
                        <Link to='/Fastag'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilityfasteg.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Fasteg</div>
                            </div>
                        </Link>

                        {/* individual Municipal Taxes div in section one main utility page */}
                        <Link to='/Municipal'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitymunicipaltaxes.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Municipal Taxes</div>
                            </div>
                        </Link>


                        {/* individual Education Fee div in section one main utility page */}
                        <Link to='/Education'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilityeducationfee.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">Education Fee</div>
                            </div>
                        </Link>

                        {/* individual Loan Repayment div in section one main utility page */}
                        <Link to='/Loan'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilityloanreplacement.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name"> Loan Repayment</div>
                            </div>
                        </Link>

                        {/* individual Housing Society div in section one main utility page */}
                        <Link to='/Utilityhouse'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilityhome.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name"> Housing Society</div>
                            </div>
                        </Link>

                        {/* individual Cable TV div in section one main utility page */}
                        <Link to='/Cable'>
                            <div className="Utility-page-section-one-individual">
                                <img src={process.env.PUBLIC_URL + './Utilitytv.png'} alt="" className="Utility-page-section-one-individual-image" />
                                <div className="Utility-page-section-one-individual-name">  Cable TV</div>
                            </div>
                        </Link>

                    </div>
                </div>

                {/* footer content for utility page */}
                <div className="Utility-page-footer-section-main-div">
                    {/* footer content for utility page header section*/}
                    <div className="Utility-page-footer-section-main-div-header">
                        Invenu Global Gateway LLP
                    </div>
                    {/* footer for utility page main section */}
                    <div className="Utility-page-footer-section-main-div-main">
                        {/* footer for utility page main section individual*/}
                        <div className="Utility-page-footer-section-main-div-individuals">
                            About us
                        </div>
                        <div className="Utility-page-footer-section-main-div-individual">
                            Terms and Conditions
                        </div>
                        <div className="Utility-page-footer-section-main-div-individual">
                            Privacy Policy
                        </div>
                        <div className="Utility-page-footer-section-main-div-individual">
                            Disclaimer
                        </div>
                        <div className="Utility-page-footer-section-main-div-individual">
                            Contact us
                        </div>
                        <div className="Utility-page-footer-section-main-div-individual">
                            Refer a Customer
                        </div>
                        <div className="Utility-page-footer-section-main-div-individual">
                            Blog
                        </div>
                        {/* main icon div */}
                        <div className="Utility-page-footer-section-main-div-individual-icon-main">
                            {/* individual icon div */}
                            <div className="Utility-page-footer-section-main-div-individual-icon-individual">
                                <CiInstagram className="Utility-page-footer-section-main-div-individual-icon-individual-icon" />
                            </div>

                            {/* individual icon div */}
                            <div className="Utility-page-footer-section-main-div-individual-icon-individual">
                                <CiFacebook className="Utility-page-footer-section-main-div-individual-icon-individual-icon" />
                            </div>

                            {/* individual icon div */}
                            <div className="Utility-page-footer-section-main-div-individual-icon-individual">
                                <CiTwitter className="Utility-page-footer-section-main-div-individual-icon-individual-icon" />
                            </div>

                        </div>
                    </div>
                    {/* footer for utility page copyright section */}
                    <div className="footer-for-utility-page-copyright-section">
                        copyright @ 2008 - 2024
                        <Link to='/Home'>
                            <Button className="footer-for-utility-page-copyright-section-button">
                                Go to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Utility