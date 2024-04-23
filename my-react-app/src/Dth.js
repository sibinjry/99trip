import React from "react";
import './Dth.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Dth() {
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
                            placeholder="DTH Operator"
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
                           DTH Operator
                        </div>

                    </div>

                </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual airtel content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './tatasky.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        TATA Play
                    </div>
                </div>

                {/* individual Jio content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './aitaldigital.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                       Airtal digital tv
                    </div>
                </div>


                {/* individual BSNL content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './sundirect.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                       Sun Direct Recharge
                    </div>
                </div>

                {/* individual Vodafone content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './dishtv.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        Dish TV Recharge
                    </div>
                </div>

                {/* individual idea content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './d2h.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                        d2h Recharge
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dth