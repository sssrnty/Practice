import React, { Component } from 'react';

class MovieDesc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: [],
			isLoaded: false,
			error: false,
			id: this.props.match.params.id
		}
	}
	componentDidMount(){
		// const { match : { params } } = this.props;
		// console.log(match);
		const url = '/api/movies/';
		// console.log(this.props.match.params.id.toString());
		// console.log(url+id);
		fetch(`${url+this.state.id}`).then(res=>res.json()).then(result=>this.setState({item: result, isLoaded: true})),(error=>this.setState({isLoaded: true, error}));
	}
	render(){
		const {item, isLoaded, error } = this.state;
		// console.log(item);
		// console.log(error);
		// console.log(isLoaded);
		if(error){
			console.log(error.message);
			return <div>Error 404: Content Not Found</div>
		}
		else if(!isLoaded){
				return <div>Loading...</div>;
		}
		else{
			let doc = item[0];
			// console.log(item.length)
			return (<div id={item.length}>
				<h1>{doc.title}</h1>
				<p><u>{doc.year}</u><br/><br/> Ratings <br/>Tomato: {doc.rating.tomato}<br/>Imdb: {doc.rating.imdb}</p>
				</div>);
		}
	}
}

export default MovieDesc;
