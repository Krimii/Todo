import React, { Component } from 'react';
import $ from 'jquery';

export default class AddTodo extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<form className="col-12 input-effect" onSubmit={this.onSubmit}>
			        	<input 
			        		ref="text" 
			        		className="effect-16" 
			        		type="text"
			        		value={this.props.text}
			        		id="focus"  />
			            <label>New Todo:</label>
			            <span className="focus-border"></span>
		        	</form>
				</div>
			</div> 
		);
	}

	notify(){
		$('<div id="kk"  class="alert alert-danger text-center" role="alert">Please insert Todo</div>')
		.appendTo('#notify')
		.hide().fadeIn(100).animate({top: '10px'}).delay(1000).fadeOut(3000);
		//$('#kk').fadeIn(1000).delay(3000).fadeOut(1000);
	}
	onSubmit = (e) =>{
		e.preventDefault();
		var text = this.refs.text.value.trim();
		if(!text){
			console.log('Todo Form Empty - Insert TODO');
			return;
		}
		if (this.props.isEdit) {
			var updatedTodo = {
				id: this.props.isEdit,
				text: text
			}
			this.props.onTodoUpdate(updatedTodo);
	    }else{
	   		
	    	this.props.onTodoAdd(text);
	    }
	    this.refs.text.value = "";

	}
}
