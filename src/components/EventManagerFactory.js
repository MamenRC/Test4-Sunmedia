import React from 'react';
import EventManager from './EventManager';

class EventManagerFactory extends React.Component{
	render() {
		return (
			<ul className="list-test">
				{this.props.events.map((list, index) =>
					<li className="list-test--li" key = {index}>
						<EventManager
							second = {list.second}
							type = {list.type}
							message = {list.message}
						/>
					</li>)
				}
			</ul>
		);
	}
}

export default EventManagerFactory;
