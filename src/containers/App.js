import React,{Component} from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'


class  App extends Component {
	constructor(){
		super();
		this.state ={
			robots: [],
			searchfield: '',

		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(reponse => reponse.json())
		.then(users =>{this.setState({robots: users})});
		
	}

	onsearch = (event) => {
		this.setState({searchfield: event.target.value});
		}

	render(){
		const filteredRobot = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		     })
		if(this.state.robots.length === 0){
			return <h2>loading</h2>
		}else{

			return (
					<div className='tc'>
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox SearchChange={this.onsearch}/>
					<Scroll>
					<CardList robots={filteredRobot}/>
					</Scroll>
				</div>

			);

		}

	}
	
}

export default App;
