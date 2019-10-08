import React from "react";
import Review from './Profile/Review'
import BasicInformation from "./Profile/BasicInformation"
import DetailedInformation from "./Profile/DetailedInformation"
import Education from "./Profile/Education"
import Job from "./Profile/Job"
import Family from "./Profile/Family"

const YourData = (props) => {




    return (
        <div className="YourData">
            {props.page === 1 ? <Review /> : null}
            {props.page === 2 ? <BasicInformation /> : null}
            {props.page === 3 ? <DetailedInformation /> : null}
            {props.page === 4 ? <Education /> : null}
            {props.page === 5 ? <Job /> : null}
            {props.page === 6 ? <Family /> : null}
        </div>
    )
}
export default YourData;