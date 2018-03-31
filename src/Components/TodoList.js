import React, { Component } from 'react';
import ListItems from './ListItems'

export default class TodoList extends Component {
	
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					{	
						this.props.todos.map((todo) => {	
							const classNames = `${todo.id}`;		
							// console.log(classNames.length)							        
							return (
								<div className="card"  key={todo.id} >
									<div className="card-header">
										<i className="fa fa-angle-double-down"></i> 
										<span className="card-link" data-toggle="collapse" data-parent="#accordion" href={`#${classNames}`}>
									        {     todo.headline}
									    </span>
										<span className="update">
											<i className="fa fa-user"></i> 17.3
										</span>
									
									</div>
									<ListItems id={todo.id} chars={todo.charts} classNames={classNames} />
								</div>
							)

						})
					}
				</div>
			</div> 
		);
	}
}
