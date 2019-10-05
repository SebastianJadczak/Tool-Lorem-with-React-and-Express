import React from 'react'
import { Switch, Route } from "react-router-dom";
import Lorem from '../subpages/Lorem'
import Ipsum from '../subpages/Ipsum'
import Dolor from '../subpages/Dolor'
import SitAmet from "../subpages/SitAmet"
import Aliquip from "../subpages/Aliquip"
const Main = () => {
    return (
        <div className="main">


            <Switch>
                <Route path="/" exact component={Lorem} />
                <Route path="/ipsum" component={Ipsum} />
                <Route path="/dolor" component={Dolor} />
                <Route path="/sitAmet" component={SitAmet} />
                <Route path="/aliquip" component={Aliquip} />
                {/* <Route component={ErrorPage} />  */}
            </Switch>
        </div>
    )
}
export default Main;