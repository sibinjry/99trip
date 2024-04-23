import React from "react";
import './Utilityloan.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import{Link} from 'react-router-dom';

function Loan() {
    return (
        <>
            <div className="Utilitymobile-main-div">
                <div className="Utilitymobile-content-div">
                    <label className="Utilitymobile-content-div-recharge-header">
                       Pay Loan EMI
                    </label>
                    {/* <div className="Utilitymobile-content-div-radio-main-div">
                        <input type="radio" />
                        <label className="Utilitymobile-content-div-radio">Prepaid</label>

                        <input type="radio" />
                        <label className="Utilitymobile-content-div-radio"> Postpaid</label>
                    </div> */}
                    <div className="Utilitymobile-content-div-input-main-div">
                        <input
                            type="text"
                            placeholder="Lender"
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
                           Lender
                        </div>

                    </div>

                </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual airtel content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './IDFC FIRST Bank.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    IDFC FIRST Bank Limited EMI payment
                    </div>
                </div>

                {/* individual Jio content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './HDB Financial.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    HDB Financial Services EMI payment
                    </div>
                </div>


                {/* individual BSNL content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './Bajaj Finance.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    Bajaj Finance Limited EMI payment
                    </div>
                </div>

                {/* individual Vodafone content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './Aditya Birla Finance.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    Aditya Birla Finance Limited EMI payment
                    </div>
                </div>

                {/* individual idea content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './Axis Finance Limited.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    Axis Finance Limited EMI payment
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loan