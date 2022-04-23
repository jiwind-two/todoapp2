import React, { Component } from 'react'
import './Form.css';


class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          課題名：<input name="title" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" /><br/>
          内容　 ：<textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作っています！"></textarea><br/>
          登録   　：<button type="submit">todoを作成</button>
        </form>
      </div>
    )
  }
}

export default Form