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
            menusList: []
        }
    }

    componentDidMount() {
        this.refMeals = base.bindToState(`meals/meals`, {
          context: this,
          state: 'mealsList',
          asArray: true
        });
        this.refMenus = base.bindToState(`meals/menus`, {
          context: this,
          state: 'menusList',
          asArray: true
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.refMeals);
        base.removeBinding(this.refMenus);
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
        return this.state.currentTab === "AddProduct" ? <AddProduct mealsList={this.state.mealsList} placeId={this.props.placeId}/> :
        <div>
            products
            <Link to={`${this.props.location.pathname}/add`}>add</Link>
        </div>
    }
}

export default withRouter(Products) 