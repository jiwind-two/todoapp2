import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

  render() {
    const className = this.props.done ? 'done' : 'undone';

    const link = this.props.done ? '元に戻す' : '完了！' 
    const linkD =this.props.delF ?  '削除済' : '削除！' 
    return(
      <li className={className}>
        {this.props.id}
         :  
        {this.props.title}　　
        <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>　
        <a href="" onClick={(e) => { e.preventDefault(); this.props.setDelStatus(this.props)}}>{linkD}</a>
        <p>{this.props.desc}</p>
      </li>
    );
  }

}

export default Todo