import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './TodoList';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todos: [

      ]
    };
    //function bindings
  }

  componentDidMount() { //on refresh or onload it will always render 
    this.fetchTodos();
  }

  fetchTodos() {
    axios
    .get('/api/todos')
    .then(data => {
      this.setState({
        todos: data.data // refering to data in controller
      }, console.log(data)) //console.log to see it
      .catch(err => console.error(err))
    })
  }
  handleInput() {
    this.setState({
      todo: e.target.value
    })
  }

  addTodo() {
    axios
    .post('/api/todos', { name: this.state.todo }) //inserting into database from that handleInput funciton stated
    .then((data => this.fetchTodos())) 
    .catch(err => console.error(err))
  }

  deleteTodo(name) {
    axios
    .delete('/api/todos', { params: { name }})
    .then(data => this.fetchTodos()) //updates todolist 
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h1>TO-DO LIST</h1>
        <form>
          <input onChange={e => this.handleInput(e)}></input>
          <button onClick={() => this.addTodo()}>ADD TODO</button>
        </form>
        <TodoList todos={this.state.todos} delete={this.deleteTodo} />
      </div>
    )
  }
}