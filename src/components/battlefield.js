import React from 'react';
import axios from 'axios';

class Battlefield extends React.Component {
	state = {
		results: 'Press button to star(t) wars!'
	  }
	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				const persons = res.data;
				this.setState({ persons });
			})
	}

	render() {
		return (
			<div>{ this.state.results }</div>
		)
	}
}

export default Battlefield;