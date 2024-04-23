import React from "react";
import './Utilitygas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Utilitygas() {
    return (
        <>
            <div className="Utilitymobile-main-div">
                <div className="Utilitymobile-content-div">
                    <label className="Utilitymobile-content-div-recharge-header">
                        Book LPG Gas Cylinder
                    </label>
                  
                    <div className="Utilitymobile-content-div-input-main-div">
                    <div className="Utilitymobile-content-div-radio-main-div">
                        <input type="radio" />
                        <label className="Utilitymobile-content-div-radio">Pay Gas Bill</label>

                        <input type="radio" />
                        <label className="Utilitymobile-content-div-radio"> Book a Cylinder</label>
                    </div>
                        <input
                            type="text"
                            placeholder="Gas Provider"
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
                           Gas Provider
                        </div>
                    </div>
                </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual airtel content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilityhpgas.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Hp gas bill payment
                    </div>
                </div>

                  {/* individual BSNL content */}
                  <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitybharatgas.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Bharatgas bill payment
                    </div>
                </div>


                {/* individual BSNL content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilitybharatcommercialgas.gif'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    Bharatgas commercial<br></br> bill payment
                    </div>
                </div>

                {/* individual Linkio Bill Payment content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './utilityindane.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Indane bill Payment
                    </div>
                </div>

               
            </div>
        </>
    );
}

export default Utilitygas