
import React, {Component} from 'react';

class ContactAddress extends Component {
    render() {
        const {contact} = this.props;

        return (
			<div>
				<p>{contact.firstName} {contact.lastName}</p>
				<p>{contact.addressLineOne} {contact.addressLineTwo}</p>
				<p>{contact.city}, {contact.state} {contact.zipCode}</p>
				<p>{contact.country}</p>
			</div>
        );
    }
}

export default ContactAddress;