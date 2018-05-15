import React from 'react';
import base from '../../../../services/base';
import { Link } from 'react-router-dom';
import "./OurShop.scss"
import AddProduct from "./AddProduct/AddProduct";
import { withRouter } from "react-router";

class OurShop extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            products: [],
            displayedProducts: [],
            activeTag: "All",
            currentTab: "OurShop",
            inputs: {},
        }
    }

    componentDidMount() {
        this.refProducts = base.bindToState(`shop/products`, {
            context: this,
            state: 'products',
            asArray: true,
            then() {
                this.setState({displayedProducts: this.state.products})
            }
        });
    }

    changeActiveTag = (tag) => {
        if( tag === 'All' ){
            this.setState({
              displayedProducts: this.state.products,
              activeTag: 'All'
            });
          } else {
            let newList = this.state.products.filter( el => 
              el.tag.indexOf(tag) !== -1
            );
            this.setState({
              displayedProducts: newList,
              activeTag: tag
            });
      
        }
    }

    componentWillUnmount() {
          base.removeBinding(this.refProducts);
    }

    formTagsList = () => {
        let tagsArr = [];
        this.state.products.forEach(item => {
            if(tagsArr.indexOf(item.tag) === -1) {
                tagsArr.push(item.tag);
            }
        });
        return tagsArr;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        var currentTab;
        if(nextProps.location.pathname === "/account/ourshop/add") {
            currentTab = "AddProduct"
        }
        else {
            currentTab = "OurShop"
        }
        return {
            currentTab
        }
    }

    changeName = (value, item) => {
        var newInputs = {...this.state.inputs};
        newInputs[item.id].name = value;
        this.setState({
            inputs: newInputs
        })
    }

    changeTag = (value, item) => {
        var newInputs = {...this.state.inputs};
        newInputs[item.id].tag = value;
        this.setState({
            inputs: newInputs
        })
    }

    changePrice = (value, item) => {
        var newInputs = {...this.state.inputs};
        newInputs[item.id].price = value;
        this.setState({
            inputs: newInputs
        })
    }

    showEditMode = (item) => {
        var newInputs = {...this.state.inputs};
        newInputs[item.id] = {};
        newInputs[item.id].name = item.name;
        newInputs[item.id].tag = item.tag;
        newInputs[item.id].price = item.price;
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
        base.update(`shop/products/${item.id}`, {
            data: {
                id: item.id,
                name: this.state.inputs[item.id].name,
                tag:  this.state.inputs[item.id].tag,
                price: Number(this.state.inputs[item.id].price),
                src: item.src,
            }
        }).
        then((err) => {
            this.changeActiveTag(this.state.activeTag);
            this.closeEditMode(item);
        })
    }

    deleteItem = (item) => {
        base.remove(`shop/products/${item.id}`).
        then((err) => {
            this.changeActiveTag(this.state.activeTag);
        })
    }

    render() {
        return (
            <React.Fragment>
            {this.state.currentTab === "OurShop" ?
            <div className="ourshop-container">
                <div className="header">
                    <div className="title">Our Shop</div>
                    <Link to="/account/ourshop/add" className="add-button">Add new item</Link>
                </div>
                {this.state.products.length > 0 ?
                <React.Fragment>
                    <div className="sorting">
                        <span>Sort by: </span>
                        <span 
                        className={this.state.activeTag === "All" ? "sorting-tags-active" : "sorting-tags"}
                        onClick={()=>this.changeActiveTag("All")}
                        >All</span>
                        {this.formTagsList().map((tag, index) => (
                            <span key={index}
                            className={this.state.activeTag === tag ? "sorting-tags-active" : "sorting-tags"}
                            onClick={()=>this.changeActiveTag(tag)}
                            >{tag}</span>
                        ))}
                    </div>
                    <div className="titles">
                        <div className="product">Product</div>
                        <div className="tag">Tag</div>
                        <div className="price">Price</div>
                        <div className="actions">Actions</div>
                    </div>
                    
                    {this.state.displayedProducts.map(item => (
                        <div className="item" key={item.id}>
                            <div className="product">
                                <img src={item.src} alt="logo"/>
                                <div className="name">
                                {this.state.inputs[item.id] ? 
                                <input type="text" value={this.state.inputs[item.id].name} onChange={(e)=>this.changeName(e.target.value,item)}/>
                                :
                                item.name
                                }
                                </div>
                            </div>
                            <div className="tag">
                            {this.state.inputs[item.id] ? 
                            <input type="text" value={this.state.inputs[item.id].tag} onChange={(e)=>this.changeTag(e.target.value,item)}/>
                            :
                            item.tag
                            }
                            </div>
                            <div className="price">
                            {this.state.inputs[item.id] ?
                            <input type="text" value={this.state.inputs[item.id].price} onChange={(e)=>this.changePrice(e.target.value,item)}/>
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
            :
            <AddProduct />
            }
        </React.Fragment>
        )
    }
}

export default withRouter(OurShop);