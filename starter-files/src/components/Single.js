// no global variables in es6 modules
// must import all your dependencies into everything you do

import React from 'react'; // pull whole react library

class Single extends React.Component {
	constructor() {
    super();
    this.state = {
			beer: {},
			loading: true
		};
  }

	componentWillMount() {
		// when the main component is about to be put on the page, do this
		this.loadBeer();
	}

	// => doesn't mess with the value of this
	// essentially a property called loadBeers that is set to a value of this
	loadBeer = (searchTerm = 'hops') => {
		// set loader
		this.setState({ loading: true });

		// fetch doesn't default to json, so we have to convert it's raw to json
		fetch(`http://api.react.beer/v2/beer/${this.props.match.params.beerId}`)
			.then(data => data.json())
			.then(response => {
				// filter takes an array and allows you to filter it down
				// const filteredBeer = beer.data.filter(beer => beer.labels);
				this.setState({
					beer: response.data,
					loading: false // once the beers are back, setState loading false
				});
			})
	}

	render() {
		const { description, abv, labels } = this.state.beer;

		// remember we can't get access to nested objects if the object hasn't loaded
		// so we need to loading call
  	const image = labels.medium || "null.jpg";

		return (
			<div className="single-beer">
				<div className="desc">
					<h2>{name}</h2>
					<p>{description}</p>
					<p>{abv}</p>
				</div>
				<img src={image} alt={name} />
			</div>
		)
	}
}

export default Single;

// css class now className

//const Header = React.creactClass({}) <- old way

// or

// import { React.Component } from 'react'; // pull whole react library
// class Header {
// }

// jsx = asi = automatic semicolon insertion
