// no global variables in es6 modules
// must import all your dependencies into everything you do

import React from 'react'; // pull whole react library

class Header extends React.Component {
	static propTypes = {
		siteName: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<h1>{this.props.siteName}</h1>
		)
	}
}

export default Header;

// css class now className

//const Header = React.creactClass({}) <- old way

// or

// import { React.Component } from 'react'; // pull whole react library
// class Header {
// }

// jsx = asi = automatic semicolon insertion
