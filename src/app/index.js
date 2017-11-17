console.log('it works');
import React from 'react';
import {render} from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Root} from './components/Root';
import {User} from './components/User';

import {BrowserRouter,Route,Link} from 'react-router-dom';
class App extends React.Component{
	
	render(){
		return(<BrowserRouter>
					<div>
							<Header/>
							<Route path="/home" component={Home}/>
							<Route path="/root" component={Root}/>
							<Route path="/user" component={User}/>
								
					</div>
				</BrowserRouter>);}
}
render(<App/>,document.getElementById('app'));