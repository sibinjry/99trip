import React from "react";
import './Utilitycable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import{Link} from 'react-router-dom';
function Cable() {
    return (
        <>
            <div className="Utilitymobile-main-div"> 
                <div className="Utilitymobile-content-div">
                    
                    <label className="Utilitymobile-content-div-recharge-header">
                       Pay Cable TV Bill
                    </label>
                   
                    <div className="Utilitymobile-content-div-input-main-div">
                        <input
                            type="text"
                            placeholder="Operator"
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
                           Operator
                        </div>
                    </div>
                </div>
            {/* content */}
            <div className="Utilitymobile-recharge-operator-sub-div-content">
                {/* individual airtel content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './Asianet Digital.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    Asianet Digital TV Recharge
                    </div>
                </div>

                {/* individual Jio content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './Deetech.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    Deetech Cable Network Recharge
                    </div>
                </div>


                {/* individual BSNL content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './InDigital.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    InDigital Recharge
                    </div>
                </div>

                {/* individual Vodafone content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './CCNDS.jpg'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    CCNDS Cable Recharge
                    </div>
                </div>

                {/* individual idea content */}
                <div className="Utilitymobile-recharge-operator-sub-div-content-individual">
                    <img src={process.env.PUBLIC_URL + './pogo.png'} alt="" className="Utilitymobile-recharge-operator-sub-div-content-individual-image" />
                    <div className="Utilitymobile-recharge-operator-sub-div-content-individual-text">
                    POGO Recharge
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cable