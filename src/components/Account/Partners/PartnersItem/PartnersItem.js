import React from 'react';
import base from '../../../../services/base';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class AddPartners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            place: {},
            isLoading: true

        }
    }

    componentDidMount() {
        if(this.props.type === "restaurant") {
            this.refPlaces = base.bindToState(`meals/places/${this.props.location.pathname.split("/").pop()}`, {
                context: this,
                state: 'place',
                then() {
                    this.setState({
                        isLoading: false
                    })
                }
            });
        }
        else {
          this.refShops = base.bindToState(`meat/places/${this.props.location.pathname.split("/").pop()}`, {
            context: this,
            state: 'place',
            then() {
                this.setState({
                    isLoading: false
                })
            }
          });
        }
      }
    
      componentWillUnmount() {
        if(this.props.type === "restaurant") {
            base.removeBinding(this.refPlaces);
        } else {
            base.removeBinding(this.refShops);
        }
      }

   
    render() {
        return this.state.isLoading ? <div>Loading</div> :
            <div className="partners-item">
                {Object.keys(this.state.place).length === 0 && this.state.place.constructor === Object ? 
                <div>No data</div>
                :
                this.state.place.userId === this.props.uid ?
                <div>{this.state.place.name} </div>
                :
                <div>Access denied</div>
                }
            </div>
        
    }
}

export default withRouter(AddPartners);