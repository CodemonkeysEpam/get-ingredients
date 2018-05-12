import React from 'react';

export default class Tag extends React.Component {

	render(){
		let classNames = 'sorting-tags';
		if( this.props.activeTag === this.props.tag ){
			classNames += ' sorting-tags-active';
		}
		return(
			<React.Fragment>
				{
					<span className={classNames} onClick={() => this.props.callback(this.props.tag)}>{this.props.tag}</span>
				}
			</React.Fragment>
		);
	}
}