import React from 'react';
import Header from './Header';
import Results from './Results';
import Search from './Search';

// research difference between static and instance method

// props is how it travels, state is where it lives

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			numBeers: 10,
			beers: [],
			loading: true
		}
	}

	componentWillMount() {
    const params = this.props.match.params || {};
		// when the main component is about to be put on the page, do this
		const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
	}

	componentWillReceiveProps(nextProps) {
    this.loadBeers(nextProps.match.params.searchTerm);
  }

	// workaround so properties will be bound to instances
	// = () => : gives us access to this objects (in es8)
	incrementBeers = () => {
		// never update state directly
		// make a copy of state, update it then give it back
		//this.state.numBeers++
		const updatedBeers = this.state.numBeers + 1;
		// then set that variable into state with setState();
		this.setState({
			numBeers: updatedBeers
		})
	}

	// => doesn't mess with the value of this
	// essentially a property called loadBeers that is set to a value of this
	loadBeers = (searchTerm = 'hops') => {
		// set loader
		this.setState({ loading: true });

		// fetch doesn't default to json, so we have to convert it's raw to json
		fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
			.then(data => data.json())
			.then(beers => {
				// filter takes an array and allows you to filter it down
				const filteredBeers = beers.data.filter(beer => beer.labels);
				this.setState({
					beers: filteredBeers,
					loading: false // once the beers are back, setState loading false
				});
			})
	}

	// trigger = lifecycle hook

	// componentWillMount = about to be born
	// componentDidMount = born
	// componentWillUnMount = about to die

	render() {
		return (
			<div className="wrapper">
				<Header siteName="Coffee me!" />
				<br/>
				<br/>
				<br/>
				<br/>
				<button onClick={this.incrementBeers}>
					{this.state.numBeers}
				</button>
				<Search />
				<Results beers={this.state.beers} loading={this.state.loading} />
			</div>
		)
	}
}

export default Main;

// {...this.state} <= object spread
