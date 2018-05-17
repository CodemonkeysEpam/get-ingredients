import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import base from '../../../../../services/base';

class Products extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentTab: 'Products',
            mealsList: [],
            menusList: [],
            inputs: {}
        }
    }

    componentDidMount() {
        this.refMeals = base.bindToState(`meals/meals`, {
          context: this,
          state: 'mealsList'
        });
        this.refMenus = base.bindToState(`meals/menus`, {
          context: this,
          state: 'menusList',
          asArray: true,
          queries: {
            orderByChild: 'placeId',
            equalTo: this.props.placeId
        }
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.refMeals);
        base.removeBinding(this.refMenus);
    }

    changePrice = (value, item) => {
        var newInputs = {...this.state.inputs};
        newInputs[item.id] = value;
        this.setState({
            inputs: newInputs
        })
    }

    showEditMode = (item) => {
        var newInputs = {...this.state.inputs};
        newInputs[item.id] = item.price;
        this.setState({
            inputs: newInputs
        })
    }

    closeEditMode = (item) => {
        var newInputs = {...this.state.inputs};
        delete newInputs[item.id];
        this.setState({
            inputs: newInputs
        })
    }

    saveEditMode = (item) => {
        base.update(`meals/menus/${item.id}`, {
            data: {
                id: item.id,
                placeId: item.placeId,
                mealId: item.mealId,
                price: Number(this.state.inputs[item.id]),
            }
        }).
        then((err) => {
            this.closeEditMode(item);
        })
    }

    deleteItem = (item) => {
        base.remove(`meals/menus/${item.id}`).
        then((err) => {
            
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        var currentTab;
        if(nextProps.location.pathname.includes("/add")) {
            currentTab = "AddProduct"
        }
        else {
            currentTab = "Products"
        }
        return {
            currentTab
        };
    }

    render() {
        return this.state.currentTab === "AddProduct" ? <AddProduct mealsList={Object.values(this.state.mealsList)} placeId={this.props.placeId}/> :
        <div>

            <div className="ourshop-container">
                <div className="header">
                    <div className="title">Menu</div>
                    <Link to={`${this.props.location.pathname}/add`} className="add-button">Add new item</Link>
                </div>
                {this.state.menusList.length > 0 ?
                <React.Fragment>
                    <div className="titles">
                        <div className="product">Product</div>
                        <div className="price">Price</div>
                    </div>
                    
                    {this.state.menusList.map(item => (
                        <div className="item" key={item.id}>
                            <div className="product">
                            {this.state.mealsList[item.mealId].name}
                            </div>
                           
                            <div className="price">
                            {this.state.inputs[item.id] ?
                            <input type="text" value={this.state.inputs[item.id]} onChange={(e)=>this.changePrice(e.target.value,item)}/>
                            :
                            item.price
                            }
                            </div>

                            {this.state.inputs[item.id] ?
                            <div className="actions">
                                <i className="fa fa-check" onClick={() => this.saveEditMode(item)}></i>
                                <i className="fa fa-times" onClick={() => this.closeEditMode(item)}></i>
                            </div>
                            :
                            <div className="actions">
                                <i className="fa fa-pencil" onClick={() => this.showEditMode(item)}></i>
                                <i className="fa fa-trash" onClick={() => this.deleteItem(item)}></i>
                            </div>
                            }
                        </div>
                    ))}
                </React.Fragment>
                :
                <div>No products</div>
                }
            </div>


            {/* <Link to={`${this.props.location.pathname}/add`}>add</Link>

        {this.state.menusList.length > 0 ?
        <div>
            {this.state.menusList.map(item => (
                
                <div key={item.id}>{this.state.mealsList[item.mealId].name} - {item.price}</div>
            ))}
        </div>
        :<div>No data</div>} */}
        </div>
    }
}

export default withRouter(Products)