import React from "react";
import './Utilitywater.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Utilitywater() {
    return (
        <>
            <div className="Utilitymobile-main-electricity-div">
                <div className="Utilitymobile-content-div">
                    <label className="Utilitymobile-content-div-recharge-header">
                        Pay Water Bill
                    </label>
                    <div className="Utilitymobile-content-div-input-main-div">
                        <input
                            type="text"
                            placeholder="Water Board"
                            className="form-control Utilitymobile-content-div-input" />
                    </div>
                    <div className="Utilitymobile-content-div-button-div">
                        <Link to='/Paymentsuccess'>
                            <Button className="Utilitymobile-content-div-button">Proceed </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* recharge operator */}
            <div className="Utilitymobile-recharge-operator-main-div">
                <div className="Utilitymobile-recharge-operator-sub-div">
                    {/* header */}
                    <div className="Utilitymobile-recharge-operator-sub-div-header">
                        Water Board
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual bangalore content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitybangalorewater.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Bangalore Water Supply and Sewerage Board (BWSSB) Bill Payment
                    </div>
                </div>
                {/* individual chennai content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitychennaiwater.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Chennai Metropolitan Water Supply And Sewerage Board Bill Payment
                    </div>
                </div>
                {/* individual Delhi content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitydelhiwater.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Delhi Jal Board (DJB) Bill Payment
                    </div>
                </div>
                {/* individual Kerala content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitykeralawater.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Kerala Water Authority (KWA) - Water Bill Payment
                    </div>
                </div>
                {/* individual Port Blair content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilityportwater.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Port Blair Municipal Council - Water Bill Payment
                    </div>
                </div>
            </div>
        </>
    );
}

export default Utilitywater;