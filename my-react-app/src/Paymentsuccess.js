import React from "react";
import './Paymentsuccess.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Paymentsucess(){
    return(
        <>
        <div className="Paymentsuccess-main-div">
            <div className="Paymentsuccess-condent-div">
                <div className="Paymentsuccess-condent-div-image">
                    <img src={process.env.PUBLIC_URL +'./paymentsuccess.png'} alt="" className=""/>
                </div>
                <div className="Paymentsuccess-condent-div-text">
                    Payment Successfully 

                </div>
            </div>
            </div>
        </>
    )
}
export default Paymentsucess