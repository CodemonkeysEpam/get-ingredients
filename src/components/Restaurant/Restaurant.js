import React from 'react';
import './Restaurant.scss';
import ImageGallery from 'react-image-gallery';
import { MealItem } from '../MealItem/MealItem.js';
import base from "../../services/base.js";
import Map from '../OneMarkerMap/OneMarkerMap.js'

export default class Restaurant extends React.Component{

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            searchValue: '',
            refPlace: '',
            mealsList: [],
            menusList: [],
            id: this.props.match.params.id,
            type: this.props.match.params.type
        }
    }

    handleInputChange(event){
        this.setState({
            searchValue: event.target.value
        })
    }

    componentDidMount() {
        if(this.state.type === "meal") {
            this.refPlace = base.bindToState(`meals/places/${this.state.id}`, {
                context: this,
                state: 'place',
                then() {
                    this.setState({
                        isLoading: false
                    })
                }
             });
             this.refMeals = base.bindToState(`meals/meals`, {
                  context: this,
                  state: 'mealsList',
                  asArray: true
                });
             this.refMenus = base.bindToState(`meals/menus`, {
                  context: this,
                  state: 'menusList',
                  asArray: true,
                });
        } else if(this.state.type === "meat"){
            this.refPlace = base.bindToState(`meat/shops/${this.state.id}`, {
                context: this,
                state: 'place',
                then() {
                    this.setState({
                        isLoading: false
                    })
                }
            });
            this.refMeals = base.bindToState(`meat/meat`, {
                context: this,
                state: 'mealsList',
                asArray: true
            });
            this.refMenus = base.bindToState(`meat/products`, {
                context: this,
                state: 'menusList',
                asArray: true,
            });
        }
    }

    componentWillUnmount() {
        if(this.state.type) {
            base.removeBinding(this.refPlace);
            base.removeBinding(this.refMeals);
            base.removeBinding(this.refMenus);
        }
    }

    render() {
        console.log(this.state);
        const images = [
            {
                original: 'https://static.dezeen.com/uploads/2016/07/Musling_SPACE-Copenhagen_Joachim-Wichmann_dezeen_1568_0.jpg'
            },
            {
                original: 'http://gritsandgrids.s3.amazonaws.com/media/2016/03/a0e0c332937443.569930725cd1c.jpg'
            },
            {
                original: 'http://gritsandgrids.s3.amazonaws.com/media/2016/03/e22b8326364947.5635482042182.jpg'
            }
        ]

        let filteredMenus = this.state.menusList.filter((el, index) => {
            if(el.placeId == this.state.id) {
                return true;
            } else return false;
        })
        console.log(filteredMenus);

        filteredMenus = filteredMenus.map((el) => {
            let idOfMeal = el.mealId;
            let meal = this.state.mealsList[idOfMeal - 1];
            meal.price = el.price;
            return meal;
        });
        console.log(filteredMenus);

        let filteredArray = filteredMenus.filter((el)=>{
            let index = el.name.toLowerCase().indexOf(this.state.searchValue);
            if(index !== -1){
                return true;
            } else return false;
        })


        return (
            <div className="container restaurant">
                {this.state.place  ?
                    <div>
                        <h2>{this.state.place.name}</h2>
                        <hr/>
                        <div className="carousel">
                            <ImageGallery
                                items={images}
                                showThumbnails={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showBullets={true}
                                showNav={true}
                                autoPlay={true}
                                slideDuration={1000}
                            />
                        </div>
                        <div className="details">
                            <ul>
                                <li>{this.state.place.description}</li>
                                <li>{this.state.workingTime}</li>
                                <li>{this.state.place.phone}</li>
                                <li><address>{this.state.place.address}</address></li>
                            </ul>
                        </div>
                        <div className="map">
                            <Map lat={this.state.place.location.lat} lng={this.state.place.location.lng} name={this.state.place.name} address={this.state.place.address}/>
                        </div>
                    </div>
                    :
                    <div>Loading</div>
                }
                <hr/>
                {
                    filteredMenus.length ?
                        <React.Fragment>
                            <div className="search-container">
                                <h3 className="search-header">Our products</h3>
                                <input type="text" className="searchInput" placeholder="Type the name here" onChange={this.handleInputChange} />
                            </div>
                            <div className="mealItems">
                            {
                                filteredArray.map((item, index) => {
                                    return <MealItem meal={item} key={index} menus={filteredMenus}/>
                                })
                            }
                            </div>
                        </React.Fragment> : <div></div>
                }


            </div>
        )
    }
}
