// Let's Go!
import React from 'react'; // pull whole react library
import { render } from 'react-dom'; // pull only the render part of react-dom
import './style.css';
import Main from './components/Main';
import Single from './components/Single';
import { BrowserRouter, Route } from 'react-router-dom';

// stateless functional component
const Root = function() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/search/:searchTerm" component={Main} />
        <Route path="/beer/:beerId/:beerSlug" component={Single} />
      </div>
    </BrowserRouter>
  )
}

// tree shaking, js will try to only load the things you need

//render(<p>Hello World</p>, document.querySelector('#root'));
render(<Root />, document.querySelector('#root'));

// standard practice to name your classes with a capital => Header.js


// react router
// next.js - also a router, gaining popularity
