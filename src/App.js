import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  state = {
    todoItems : [
      { title: 'Di lam', checkComplete:true},
      { title:'An com trua', checkComplete:true},
      { title:'An com toi', checkComplete:false},
      { title:'Choi game', checkComplete:false},
    ]
  }
 
  handleClick = (e) => {
    const { todoItems } = this.state;
    const index = todoItems.indexOf(e);
    todoItems[index].checkComplete = !todoItems[index].checkComplete;
    this.setState ({
      todoItems: [
        ...todoItems
      ]
    })
  }
  handleClickDel =(e) => {
    
    const { todoItems } = this.state;
    const index = todoItems.indexOf(e);
    todoItems.splice(index,1)
    this.setState({
      todoItems: [
        ...todoItems
      ]
    })
  }
  render() {
    const {todoItems} = this.state;
    return (
      <div id="wrapper">
        <h1 className="title"> todoList </h1>
        <div className="App">
          {
            todoItems.map((item,index) => 
            <TodoItem key={index} item={item} onClick={this.handleClick} onClickDel={this.handleClickDel}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
