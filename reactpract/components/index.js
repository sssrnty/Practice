import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//components
//import FirstClass from './components/feb22react.js';
//import SecondClass from './components/feb23react.js';
//import ThirdClass from './components/feb24react.js';
//import Fourth from './components/feb25react.js';
//import Fifth from './components/feb26react.js';
//import Run from './components/feb27react.js';
//import Toggle from './components/feb28react.js';
//import Answer from './components/mar1react.js';
//import Lists from './components/mar2react.js';
//import Forms from './components/mar3react.js';
//import MultiForm from './components/mar4react.js';
//import LiftingState from './components/mar5react.js';
//import Containment from './components/mar6react.js';
//import MyUI from './components/mar7react.js';
//import MyUI from './components/mar8react.js';
//import ReturnColor from './components/mar9react.js';
//import Try from './components/mar10react.js';
//import Answer from './components/mar11react.js';
//import TypeChecking from './components/mar12react.js';
import MyFlow from './components/mar13react.js';

/*class Helloworld extends React.Component{
	render(){
		return <h1>Hello World</h1>;;
	}
}

class RenderEm extends React.Component{
	render(){
		return <Helloworld />;
	}
}*/

// function name(names){
// 	let lastname = names.lastName.charAt(0).toUpperCase()+names.lastName.slice(1)
// 	let firstname = names.firstName.charAt(0).toUpperCase()+names.firstName.slice(1);	
// 	return lastname+', '+firstname;
// }

// const names = {
// 	firstName: 'kira',
// 	lastName: 'light'
// };

//const show = 'Hello to you, '+ name(names);
//is the same as this method

//const show = (<h1 id='name'>Hello to you, {name(names)}</h1>);


class Show extends Component{
	render(){
		return (<div>
				{/*<FirstClass />*/}
				{/*show*/}
				{/*<SecondClass />*/}
				{/*<ThirdClass />*/}
				{/*<Fourth />*/}
				{/*<Fifth />*/}
				{/*<Run />*/}
				{/*<Toggle />*/}
				{/*<Answer />*/}
				{/*<Lists />*/}
				{/*<Forms />*/}
				{/*<MultiForm />*/}
				{/*<LiftingState />*/}
				{/*<Containment />*/}
				{/*<Try />*/}
				{/*<Answer />*/}
				{/*<TypeChecking /> */}
				<MyFlow />
				</div>
			);
	}
}

ReactDOM.render(<Show />, document.getElementById('root'));
