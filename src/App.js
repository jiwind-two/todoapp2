import React, { Component } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    const todos = [];
    this.state = {
      isLoading: false,
      hasError: false,
      todos: todos,
      newIdnum: 0
    };
  }
  /*
    async  postData(url = '', data = {}) {
      
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
         },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
    }
    */
  /*
    async fetchData(url){
      const res = await fetch(url);
      const todos = await res.json();

      let num=0;
      for (let ii=1;ii<todos.length;ii++){
        if(num<todos[ii].id){
          num=todos[ii].id
        }
      }
      alert('ＴＯＤＯ件数 次の新規　id 番号 '+(num+1));
      this.setState({ todos });  
      this.setState({ newIdnum: num+1});    
  }
*/
  /*
    componentDidMount() {

//  localhostではエラーになる。 （ GETではresponsのbodyにnullが設定される。 ）   
//  とりあえずidのあるjsonのサイトでdummyデータとして取り込み　テスト↓
//      this.fetchData('http://localhost:3000/data.json');
      this.fetchData('http://jsonplaceholder.typicode.com/users');                
    }
*/
  handleSubmit(e) {
    e.preventDefault();
    let title;
    if (e.target.title.value === "") {
      alert("タイトルが未入力です！");
      title = "タイトル未入力";
    } else {
      title = e.target.title.value;
    }
    const desc = e.target.desc.value;
    const done = false;
    const todos = this.state.todos.slice();
    const newIdnum = this.state.newIdnum;
    todos.push({
      id: newIdnum,
      title: title,
      desc: desc,
      done: done
    });
    this.setState({ todos });
    this.setState({ newIdnum: newIdnum + 1 });
    e.target.title.value = "";
    e.target.desc.value = "";
    console.log({ todos });
    console.log(newIdnum);
    //       this.postData('http://localhost:3000/data.json', {todos});
  }

  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    let doneNo;
    for (let ii = 0; ii < todos.length; ii++) {
      if (this.state.todos[ii].id === clickTodo.id) {
        doneNo = ii;
      }
    }
    const todo = todos[doneNo];
    todo.done = !todo.done;
    todos[doneNo] = todo;
    this.setState({ todos });
  }

  setDelStatus(clickTodo) {
    const todos = this.state.todos.slice();
    let delNo;

    for (let ii = 0; ii < todos.length; ii++) {
      if (this.state.todos[ii].id === clickTodo.id) {
        console.log("削除対象番号　" + ii);
        delNo = ii;
      }
    }
    // eslint-disable-next-line no-restricted-globals
    if (confirm("本当に削除しますか？\n 削除対象ＩＤ = " + clickTodo.id)) {
      todos.splice(delNo, 1);
      console.log(todos);
      this.setState({ todos });
      ////       this.postData('http://localhost:3000/data.json', {todos});
    } else {
    }
  }

  render() {
    return (
      <div className="app">
        <h1>ＴＯＤＯ管理</h1>

        <Form handleSubmit={this.handleSubmit.bind(this)} />

        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          setDelStatus={this.setDelStatus.bind(this)}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

export default App;
