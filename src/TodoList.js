import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {

  render() {
    const todos = this.props.todos.map( todo =>
      <Todo 
        key={todo.id}
        {...todo}
        setTodoStatus={this.props.setTodoStatus}
        setDelStatus={this.props.setDelStatus}       
      />
    )

    if (this.props.isLoading) {
      return <h2>loading . . . </h2>;
    }

    if (this.props.hasError) {
      return <h2>error</h2>;
    }  
    
    return(
      <div className="TodoList">
        <ul>
          {todos}    
        </ul>
      </div>
    );
  }
}

export default TodoList
