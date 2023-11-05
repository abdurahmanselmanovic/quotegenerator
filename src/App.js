import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
	state = {
		advice: "",
	};

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;

				this.setState({ advice });
				console.log(advice);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { advice } = this.state;
		return (
			<div className="app">
				<div className="card1">
					<h1 className="h1advice">{advice}</h1>
					<button onClick={this.fetchAdvice} className="button">
						Another 1
					</button>
					<label className="label1">FunFact: This button has delay</label>
				</div>
			</div>
		);
	}
}

export default App;
