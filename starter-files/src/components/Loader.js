import React from 'react'; // pull whole react library

class Loader extends React.Component {
  static propTypes = {
		message: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<div className="loader">
          <img src="/images/ball.svg" alt="ball"/>
          <p>{this.props.message}</p>
      </div>
		)
	}
}

export default Loader;
