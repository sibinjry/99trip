import React from "react";
import './Laneline.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Laneline() {
    return (
        <>
            <div className="laneline-main-div">
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
                            placeholder="Enter Laneline Number"
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
         
        </>
    );
}

export default Laneline;
