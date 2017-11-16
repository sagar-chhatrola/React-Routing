console.log('it works');
import React from 'react';
import {render} from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Root} from './components/Root';
import {Router,Route,browserHistory} from 'react-router';
class App extends React.Component{
	
	render(){
		return(
				<Root>
					<Home></Home>
				</Root>
			);
	}
}

render(<App/>,document.getElementById('app'));