import React, { Component } from 'react';

class ContactPreview extends Component {
	render() {
		
		const {contact, onClickFunction} = this.props;
		
		return (
			<button
				onClick={() => onClickFunction(contact)}
			>
				<p>{contact.firstName} {contact.lastName}</p>
			</button>
		)	
	}
}

export default ContactPreview;