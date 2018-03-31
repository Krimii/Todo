import React, { Component } from 'react';
import $ from 'jquery'

export default class ListItems extends Component {

	render() {
		
		const {classNames} = this.props
		return (
			<div className="collapse"  id={`${classNames}`} >
		      	<ul className="list-group">
		      	{
		      		this.props.chars.map(char =>{
						return (
							<li className="list-group-item"  key={char.id}  id={`${char.text}`} >
			                  <span>
			                    {char.text}
			                  </span>
			                      <span className="fa fa-check-square done-btn" onClick={this.onClick.bind(this,char)}></span>
							    	<a href="#" className="delete">Delete</a>
							    	<a href="#" className="edit">Edit</a>
			                </li>
						)	
					})
		      	}
		      	</ul>
			      
		      	<div className="footer text-center">
					2 days ago
				</div>
			</div>
		);
	}

	onClick(char){
		var element = document.getElementById(`${char.text}`);
    	element.classList.toggle("done");
	}
	
	
}

