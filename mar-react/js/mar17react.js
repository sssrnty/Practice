import * as React from 'react';
import { Component } from 'react';

import '../css/mar14.css';
// type Props = {
// 	greeting: string
// }

// class MComponent extends Component<Props>{
// 	render(){
// 	// console.log(props);
// 		return (<h1>{this.props.greeting}</h1>);
// 	}
// }

// class MComponent extends Component{
// 	constructor(props){
// 		super(props);
// 		this.focusThisText = this.focusThisText.bind(this);
// 	}

// 	focusThisText(){
// 		let myInput = document.getElementById('input');
// 		myInput.classList['add']('effect');
// 	}

// 	render(){
// 		return (<div><input type='text' id='input' onClick={this.focusThisText} className='add' /></div>)
// 	}
// }

class MComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			greeting: '',
			status: true,
		}
		this.focusThisText = this.focusThisText.bind(this);
	}
	focusThisText(){
		let myInput = document.getElementById('input');
		myInput.classList['add']('effect');	
		this.textInput.focus();
		//let greetChange = 
		this.setState({
			greeting: this.state.status === true ? 'Hi Ho' : 'Hello World' ,
			status: this.state.status === true ? false : true
		});
	}
	render(){
		return(<div>
			<h1>{this.state.greeting === '' ? 'Hello World' : this.state.greeting }</h1>
			<p>{	String(this.state.status)}</p>
			<input type='text' id='input' className='add' ref={(input)=>{this.textInput = input}} />
			<input value='Focus the text input' type='submit' onClick={this.focusThisText} />
			</div>);
	}
}

class MyComponent extends Component{
	render(){
		return <MComponent greeting='Hello World' />;		
	}
}

export default MyComponent;
