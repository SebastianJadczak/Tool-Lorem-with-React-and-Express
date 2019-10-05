import React from 'react';
import '../styles/NextStep.css'
const NextStep = (props) => {
    return (
        <div className="nextShoppingStep">
            <div className="stepDetail">
                <div className="extitTheCart" onClick={props.nextStep}><span>X</span></div>
                <h2>Twój koszyk:</h2>


            </div>


        </div>
    )
}
export default NextStep;