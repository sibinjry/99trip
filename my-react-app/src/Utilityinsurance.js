import React from "react";
import './Utilityinsurance.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {Link } from 'react-router-dom';

function Utilityinsurance() {
    return (
        <>
            <div className="Utilitymobile-main-div">
                <div className="Utilitymobile-content-div">
                    <label className="Utilitymobile-content-div-recharge-header">
                        Pay Insurance
                    </label>
                  
                    <div className="Utilitymobile-content-div-input-main-div">
                        <input
                            type="text"
                            placeholder="DLR034XXXX"
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
                            Insurance Type
                        </div>

                    </div>

                </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual airtel content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitycarinsurances.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Car Insurance
                    </div>
                </div>

                  {/* individual BSNL content */}
                  <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitybikeinsurance.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Bike Insurance
                    </div>
                </div>


                {/* individual BSNL content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitytaxiinsurances.webp'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                   Taxi Insurance
                    </div>
                </div>

                {/* individual Linkio Bill Payment content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilityhealthinsurance.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Health Insurance
                    </div>
                </div>

               
            </div>
        </>
    );
}

export default Utilityinsurance