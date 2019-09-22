import React from "react";
import LoremLeft from "./LoremLeft";
import LoremRight from "./LoremRight";
import "../styles/Lorem.css"
const Lorem = () => {

    return (
        <div className="lorem">
            <div className="loremLeft">  <LoremLeft /></div>
            <div className="loremRight">   <LoremRight /></div>
        </div>
    )
}
export default Lorem;