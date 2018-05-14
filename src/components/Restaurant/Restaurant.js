import React from 'react';
import './Restaurant.scss';
import ImageGallery from 'react-image-gallery';
import MealItem from '../MealItem/MealItem.js';
import base from "../../services/base.js";
import Map from '../OneMarkerMap/OneMarkerMap.js'

export default class Restaurant extends React.Component{

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            searchValue: '',
            place: '',
            mealsList: [],
            menusList: [],
            id: this.props.match.params.id,
            meals: [
                {
                    'name': "Australian burger",
                    'ingredients': ["meat", "bread", "souse", "tomato"]
                },
                {
                    'name': "Californian burger",
                    'ingredients': ["meat", "bread", "souse", "tomato"]
                },
                {
                    'name': "Cheeseburger",
                    'ingredients': ["meat", "bread", "souse", "cheese"]
                }
            ]
        }
    }

    handleInputChange(event){
        this.setState({
            searchValue: event.target.value
        })
    }

    componentDidMount() {
        this.refPlace = base.bindToState(`meals/places/${this.state.id}`, {
            context: this,
            state: 'place',
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
    }

    componentWillUnmount() {
        base.removeBinding(this.refPlace);
        base.removeBinding(this.refMeals);
        base.removeBinding(this.refMenus);
    }

    render() {
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
        }).map((el) => {
            let idOfMeal = el.mealId;
            let meal = this.state.mealsList[idOfMeal];
            meal.price = el.price;
            return meal;
        })

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
                                showNav={false}
                            />
                        </div>
                        <div className="details">
                            <ul>
                                <li>{this.state.place.desc}</li>
                                <li>{this.state.workingTime}</li>
                                <li>{this.state.place.phone}</li>
                                <li><address>{this.state.place.address}</address></li>
                            </ul>
                        </div>
                        <div className="map">
                            <Map lat={this.state.place.lat} lng={this.state.place.lng} name={this.state.place.name} address={this.state.place.address}/>
                        </div>
                    </div>
                    :
                    <div>Loading</div>
                }

                <hr/>
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
            </div>
        )
    }
}
