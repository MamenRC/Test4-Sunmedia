import React from 'react';
import EventManagerFactory from './EventManagerFactory';


class App extends React.Component {
	constructor(props) {
		super(props);
		  this.state = {
			arrayTest: []
		};
	}

	componentDidMount() {

		let arrayTest = [];

			fetch(`https://gist.githubusercontent.com/sunmedia-tv/60036547f107d748386d46f7afb498c0/raw/c6e8582246bfce8a93f4626bc952aedafdd624a7/test.json`)
			.then(response => response.json())
			.then(json => {
				const Test = json;
				arrayTest.push(Test);
				console.log('Test: ', Test);
				this.setState({
					arrayTest: arrayTest
				});
			});

		console.log('arrayTest: ', arrayTest);
	}


	printEvents() {
		const eventOfList = this.state.arrayTest
		return (
			<EventManagerFactory events = {eventOfList}/>
		);
	}

	render() {
		return (
			<div className="app">
				<header className="header-app">
					<h1 className="title-app">Sunmedia</h1>
				</header>
				<main className="list-main">
					{ this.printEvents() }
				</main>
			</div>
		);
	}
}

export default App;
