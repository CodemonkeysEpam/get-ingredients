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
                    <div className="add-partner">
                        <div className="label">
                            <div className="title">Name:</div>
                            <input type="text"  placeholder="Enter name"/>
                        </div>
                        <div className="label">
                            <div className="title">Address:</div>
                            <input type="text"  placeholder="Enter name"/>
                        </div>
                        <div className="label">
                            <div className="title">Phone number:</div>
                            <input type="text" placeholder="Enter phone number"  />
                        </div>
                        <div className="label">
                            <div className="title">Photo:</div>
                            <label htmlFor="file-add-partner">
                                    <div className="file">
                                        <span>
                                        Choose a file...
                                        {/* {this.state.file === null ? 
                                        "Choose a file..." : 
                                        this.state.file.name} */}

                                        </span>
                                    </div>
                            </label>
                            <input type="file" id="file-add-partner" accept="image/*" />
                        </div>
                        
                        <div className="label">
                            <div className="title">Description:</div>
                            <textarea placeholder="Enter description" ></textarea>
                        </div>
                    </div>
                </div>                            
            </div>
        );
    }
}