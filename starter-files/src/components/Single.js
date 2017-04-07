// no global variables in es6 modules
// must import all your dependencies into everything you do

import React from 'react'; // pull whole react library

class Single extends React.Component {

	render() {
		return (
			<div>Single beer goes here</div>
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
