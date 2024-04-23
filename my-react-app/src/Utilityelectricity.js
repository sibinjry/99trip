import React from "react";
import './Utilityelectricity.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
function Utilityelectricity() {
    return (
        <>
            <div className="Utilitymobile-main-electricity-div">
                <div className="Utilitymobile-content-div">
                    <label className="Utilitymobile-content-div-recharge-header">
                        Pay Electricity Bill
                    </label>

                    <div className="Utilitymobile-content-div-input-main-div">
                        <div className="Utilitymobile-content-div-radio-main-div">
                            <input type="radio" />
                            <label className="Utilitymobile-content-div-radio">Electricity Boards</label>

                            <input type="radio" />
                            <label className="Utilitymobile-content-div-radio">Appartments</label>
                        </div>
                        <input
                            type="text"
                            placeholder="State"
                            className="form-control Utilitymobile-content-div-input" />
                           
                        <input
                            type="text"
                            placeholder="Electricity"
                            className="form-control Utilitymobile-content-div-input" />

                    </div>
                    <div className="Utilitymobile-content-div-button-div">
                        <Link to='/Paymentsuccess'>
                        <Button className="Utilitymobile-content-div-button">Proceed </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Utilityelectricity