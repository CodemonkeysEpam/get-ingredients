import React from 'react';
import './Dashboard.scss';


export default class MyInfo extends React.Component {
    render() {
        return (
            <div className="dashboard">
               {/* All orders: 5, Waiting shipment: 0, Received: 5
               <br/>
               Recomended: */}
               <div className="dashboard-item">
                <div>All orders:</div>
                <div>5</div>
               </div>
               <div className="dashboard-item">
                <div>Waiting shipment:</div>
                <div>0</div>
               </div>
               <div className="dashboard-item">
                <div>Received:</div>
                <div>5</div>
               </div>

            </div>
        )
    }
}