import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import uuid from 'uuid'
import $ from 'jquery'

export default class Layout extends Component {
	// replace charts with tasks
	constructor(props){
		super(props);
		this.state = {
			text: '',
			isEdit: 0,
			todos:[
				{
					  id: 1,
					  headline: 'Today',
					  date: null,
					  charts: [{
						id: 1,
					  	text: 'Go to School'
					  },{
					  	id: 2,
					  	text: 'Finish Fucking TodoList'
					  }] 
				},
				{
					  id: 2,
					  headline: 'Tommorow',
					  date: null,
					  charts: [{
						id: 1,
					  	text: 'Study'
					  },{
					  	id: 2,
					  	text: 'Watch Movies'
					  }] 
				},
				{
					  id: 3,
					  headline: 'For School',
					  date: null,
					  charts: [{
						id: 1,
					  	text: 'Prom'
					  },{
					  	id: 2,
					  	text: 'KK'
					  }]  
				}	
			],
			edit: 'Edit'
		}
	}
	render() {
		return (
			<div className="todo">
				<div className="container">
					<AddTodo onTodoAdd={this.handleTodoAdd} />
					<hr className="bg-hr"/>
					<TodoList {...this.state} />
				</div>
			</div>
		);
	}

	

	handleTodoAdd = (text) => {
		const todos = this.state.todos;
		const newTodo = {
			id: this.state.todos.length + 1,
			headline: text,
			charts:[{
					id: uuid.v4(),
					text: ''
				}]
		}
		const update = todos.concat(newTodo);
		this.setState({
			text:'',
			todos: update
		})

	}
	
	
}
