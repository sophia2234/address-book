import React, { Component } from 'react';

import {addresses} from './addresses';
import ContactPreview from './contactPreview';
import ContactAddress from './contactAddress';
import Party from './images/Party.png';
import PartyTwo from './images/PartyCopy.png';
import PartyThree from './images/PartyCopyCopy.png';
import PartyFour from './images/PartyCopyCopyCopy.png';


import './index.css';

class App extends Component {
	setCurrentContact = (contact) => {
		this.setState({
			currentContact: contact
		})
	}
	
	constructor(props) {
		super(props);
		
		this.changeCurrentContact = this.setCurrentContact.bind(this);
		
		this.state = {
			currentContact: null
		};
	}
	
  	render() {
	  	//console.log(this.state.currentContact);
		
    	return (
			<div className="App">
				<div className="AddressBox">
					<img src={Party} className="Party" alt="Party" />
						<img src={PartyTwo} className="PartyTwo" alt="Party" />
					{					
                        this.state.currentContact ?
							<ContactAddress
								contact={this.state.currentContact}
							/>
							:
							<p>You're Invited!</p>
                    }
					<img src={PartyThree} className="PartyThree" alt="Party" />
						<img src={PartyFour} className="PartyFour" alt="Party" />
				</div>
			<div>
					<ul>
						{
							addresses.map( (address) => {
								return (
									<li
										key={address.firstName}
									>
										<ContactPreview
											contact={address}
											onClickFunction={this.changeCurrentContact}
										/>
									</li>
								)
							})
						}
					</ul>
				</div>
				<div>
					{
/*						this.state.currentContact ?
						<div>
							<p>{`First Name: ${this.state.currentContact.firstName}`}</p>
							<p>{`Last Name: ${this.state.currentContact.lastName}`}</p>
						</div>
						:
						null
*/
					}
				</div>
		  	</div>
		);
  	}
}

export default App;