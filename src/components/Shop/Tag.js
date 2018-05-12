import React from 'react';

export default class Tag extends React.Component {

	render(){
		return(
			<React.Fragment>
				{
					<span className='sorting-tags' onClick={() => this.props.callback(this.props.tag)}>{this.props.tag}</span>
				}
			</React.Fragment>
		);
	}
}