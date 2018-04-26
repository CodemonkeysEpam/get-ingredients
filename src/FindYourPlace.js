import React from 'react';
import FindLocation from './FindLocation';
import Places from './Places';

export default class FindYourPlace extends React.Component {
    render () {
        return (
            <div id="find-your-place-body">
                <FindLocation list={Places.PlacesList} />
            </div>
        );
    }
}