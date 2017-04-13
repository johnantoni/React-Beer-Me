import React from 'react'; // pull whole react library
import Beer from './Beer';
import Loader from './Loader';

class Results extends React.Component {
  static propTypes = {
    beers: React.PropTypes.array.isRequired
  }

  // take each beer and turn it into a beer tag

	render() {
    if (this.props.loading) {
      return <Loader message="pouring a cold one"/>
    }

		return (
      <div className="beers">
        {this.props.beers.map(beer => <Beer key={beer.id} details={beer} />)}
      </div>
		)
	}
}

export default Results;

// ['wes'].map()
