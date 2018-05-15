import React from 'react';
import base from '../../../../../services/base';
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
        this.refPlaces = base.bindToState(`meat/shops/${this.props.location.pathname.split("/").pop()}`, {
            context: this,
            state: 'place',
            then() {
                this.setState({
                    isLoading: false
                })
            }
        })
      }
    
      componentWillUnmount() {
        base.removeBinding(this.refPlaces);
      }

   
    render() {
        return this.state.isLoading ? <div>Loading</div> :
            <div className="partners-item">
                {Object.keys(this.state.place).length === 0 && this.state.place.constructor === Object ? 
                <div>No data</div>
                :
                <div>{this.state.place.name} </div>
                }
            </div>
        
    }
}

export default withRouter(AddPartners);