import React from 'react';

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
            inputs: {}
        }
    }

    showEditMode = () => {
        var newInputs = {...this.state.inputs};
        newInputs[0] = "Test name";
        newInputs[1] = "Test address";
        newInputs[2] = "Test number";
        newInputs[3] = "Test number";
        newInputs[4] = "Test number";
        this.setState({
            inputs: newInputs
        })
    }

    closeEditMode = () => {
        var newInputs = {...this.state.inputs};
        delete newInputs[0];
        delete newInputs[1];
        delete newInputs[2];
        delete newInputs[3];
        delete newInputs[4];
        this.setState({
            inputs: newInputs
        })
    }

    saveEditMode = (item) => {
        // base.update(`meals/menus/${item.id}`, {
        //     data: {
        //         id: item.id,
        //         placeId: item.placeId,
        //         mealId: item.mealId,
        //         price: Number(this.state.inputs[item.id]),
        //     }
        // }).
        // then((err) => {
        //     this.closeEditMode();
        // })
        this.closeEditMode();
    }

    deleteItem = (item) => {
        // base.remove(`meals/menus/${item.id}`).
        // then((err) => {
            
        // })
        alert("deleted")
    }

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
                            {/* <p>Test name</p> */}
                            {/* <input type="text"  placeholder="Enter name"/> */}
                            {this.state.inputs[0] ? 
                                <input type="text"  placeholder="Enter name"/>
                                :
                                <p className="result">Test name</p>
                            }
                            {this.state.inputs[0] ?
                            <div className="actions">
                                <i className="fa fa-check" onClick={() => this.saveEditMode()}></i>
                                <i className="fa fa-times" onClick={() => this.closeEditMode()}></i>
                            </div>
                            :
                            <div className="actions">
                                <i className="fa fa-pencil" onClick={() => this.showEditMode()}></i>
                                <i className="fa fa-trash" onClick={() => this.deleteItem()}></i>
                            </div>
                            }
                        </div>


                        <div className="label">
                            <div className="title">Address:</div>
                            {/* <p>Test Address</p>
                            <input type="text"  placeholder="Enter name"/> */}
                            {this.state.inputs[1] ? 
                                <input type="text"  placeholder="Enter address"/>
                                :
                                <p className="result">Test address</p>
                            }
                            {this.state.inputs[1] ?
                            <div className="actions">
                                <i className="fa fa-check" onClick={() => this.saveEditMode()}></i>
                                <i className="fa fa-times" onClick={() => this.closeEditMode()}></i>
                            </div>
                            :
                            <div className="actions">
                                <i className="fa fa-pencil" onClick={() => this.showEditMode()}></i>
                                <i className="fa fa-trash" onClick={() => this.deleteItem()}></i>
                            </div>
                            }
                        </div>


                        <div className="label">
                            <div className="title">Phone number:</div>
                            {/* <p>Test number</p>
                            <input type="text" placeholder="Enter phone number"  /> */}
                            {this.state.inputs[2] ? 
                                <input type="text"  placeholder="Enter number"/>
                                :
                                <p className="result">Test number</p>
                            }
                            {this.state.inputs[2] ?
                            <div className="actions">
                                <i className="fa fa-check" onClick={() => this.saveEditMode()}></i>
                                <i className="fa fa-times" onClick={() => this.closeEditMode()}></i>
                            </div>
                            :
                            <div className="actions">
                                <i className="fa fa-pencil" onClick={() => this.showEditMode()}></i>
                                <i className="fa fa-trash" onClick={() => this.deleteItem()}></i>
                            </div>
                        }
                        </div>


                        <div className="label">
                            <div className="title">Photo:</div>
       
                            {/* <input type="file" id="file-add-partner" accept="image/*" /> */}
                            {this.state.inputs[3] ? 
                                <label htmlFor="file-add-partner">
                                    <div className="file">
                                        <span>
                                        "Choose a file...
                                        {/* "Choose a file..."
                                        {this.state.file === null ? 
                                        "Choose a file..." : 
                                        this.state.file.name} */}

                                        </span>
                                    </div>
                                </label> 
                                :
                                <p className="result">Test photo</p>
                            }
                            {this.state.inputs[3] ?
                            <div className="actions">
                                <i className="fa fa-check" onClick={() => this.saveEditMode()}></i>
                                <i className="fa fa-times" onClick={() => this.closeEditMode()}></i>
                            </div>
                            :
                            <div className="actions">
                                <i className="fa fa-pencil" onClick={() => this.showEditMode()}></i>
                                <i className="fa fa-trash" onClick={() => this.deleteItem()}></i>
                            </div>
                            }
                        </div>
                        
                        <div className="label">
                            <div className="title">Description:</div>
                            {/* <p>description</p>
                            <textarea placeholder="Enter description" ></textarea> */}
                            {this.state.inputs[4] ? 
                                <textarea placeholder="Enter description" ></textarea>
                                :
                                <p className="result">Test description</p>
                            }
                            {this.state.inputs[4] ?
                            <div className="actions">
                                <i className="fa fa-check" onClick={() => this.saveEditMode()}></i>
                                <i className="fa fa-times" onClick={() => this.closeEditMode()}></i>
                            </div>
                            :
                            <div className="actions">
                                <i className="fa fa-pencil" onClick={() => this.showEditMode()}></i>
                                <i className="fa fa-trash" onClick={() => this.deleteItem()}></i>
                            </div>
                            }
                        </div>

                    </div>





                </div>                            
            </div>
        );
    }
}