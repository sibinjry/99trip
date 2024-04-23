import React from "react";
import './Fastag.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Fastag() {
    return (
        <>
            <div className="Utilitymobile-main-electricity-div">
                <div className="Utilitymobile-content-div">
                    <label className="Utilitymobile-content-div-recharge-header">
                        Toll Tag Recharge
                    </label>
                    <div className="Utilitymobile-content-div-input-main-div">
                        <input
                            type="text"
                            placeholder="Toll Operator"
                            className="form-control Utilitymobile-content-div-input" />

                        <input
                            type="text"
                            placeholder="VRN Number"
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
                        Toll Board
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual bangalore content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './tollimage.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    Bangalore Elevated Tollway Private Limited Recharge
                    </div>
                </div>
             
            </div>
        </>
    );
}

export default Fastag;