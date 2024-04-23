import React from "react";
import './Datacard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {Link } from 'react-router-dom';

function Datacard() {
    return (
        <>
            <div className="Utilitymobile-main-div">
                <div className="Utilitymobile-content-div">
                    <label className="Utilitymobile-content-div-recharge-header">
                        Recharge or Pay Mobile Bill
                    </label>
                    <div className="Utilitymobile-content-div-radio-main-div">
                        <input type="radio" />
                        <label className="Utilitymobile-content-div-radio">Prepaid</label>

                        <input type="radio" />
                        <label className="Utilitymobile-content-div-radio"> Postpaid</label>
                    </div>
                    <div className="Utilitymobile-content-div-input-main-div">
                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="form-control Utilitymobile-content-div-input" />
                        <input
                            type="text"
                            placeholder="Operator"
                            className="form-control Utilitymobile-content-div-input" />
                        <input
                            type="text"
                            placeholder="Amount"
                            className="form-control Utilitymobile-content-div-input" />
                    </div>
                    <div className="Utilitymobile-content-div-button-div">
                        <Link to='/Paymentsuccess'>
                        <Button className="Utilitymobile-content-div-button">Proceed to Recharge</Button>
                        </Link>
                    </div>
                </div>
              

            </div>
              {/* recharge operator */}
              <div className="Utilitymobile-recharge-operator-main-div">
                    <div className="Utilitymobile-recharge-operator-sub-div">
                        {/* header */}
                        <div className="Utilitymobile-recharge-operator-sub-div-header">
                            Select an Operator
                        </div>

                    </div>

                </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual airtel content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './Airtel.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Airtel Recharge
                    </div>
                </div>

                {/* individual Jio content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './jio.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Jio Recharge
                    </div>
                </div>


                {/* individual BSNL content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './bsnl.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        BSNL Recharge
                    </div>
                </div>

                {/* individual Vodafone content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './vodafone.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Vodafone Recharge
                    </div>
                </div>

                {/* individual idea content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './idea.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Idea Recharge
                    </div>
                </div>
            </div>
        </>
    );
}

export default Datacard