import React from 'react';
import PropTypes from 'prop-types';
import {Header} from './Header';
export class Root extends React.Component{

	render(){
		
		return(
				<div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<h1>Header Page</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
						{this.props.children}
						</div>
					</div>
					
					
				</div>
			);
	}
}

