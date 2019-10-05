import React from "react";

const YourData = (props) => {




    return (
        <div className="YourData">
            {props.page === 1 ? "Przegląd" : null}
            {props.page === 2 ? "Podstawowe informacje" : null}
            {props.page === 3 ? "Szczegółowe informacje" : null}
            {props.page === 4 ? "Wykształcenie" : null}
            {props.page === 5 ? "Praca" : null}
            {props.page === 6 ? "Rodzina i związki" : null}
        </div>
    )
}
export default YourData;