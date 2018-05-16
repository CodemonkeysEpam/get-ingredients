import React from 'react';

export default class Dashboard extends React.Component{
    render() {
        return (
            <div>
                <div className="dashboard">
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
                <div className="partners-dash-info">
                    Info
                </div>
            </div>
        );
    }
}