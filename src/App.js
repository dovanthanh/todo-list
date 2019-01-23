import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  state = {
    newItem: '',
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
  handleKeyUp =(e) => {
    // console.log(e.keyCode)
    if (e.keyCode ===13) 
    { 
      const { todoItems, newItem } = this.state;
      todoItems.push({title:newItem,checkComplete:false})
      this.setState({
        newItem: '',
        todoItems: [
          ...todoItems
        ]
      })
    }
    else console.log('cancle')
  }
  handleChange =(e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  render() {
    const {todoItems, newItem} = this.state;
    return (
      <div id="wrapper">
        <h1 className="title"> todoList </h1>
        <div className="App">
          <input type="text" 
            className="inputNew"
            placeholder="Add new to do item"
            onChange={this.handleChange}
            value={newItem}
            onKeyUp={this.handleKeyUp}
          ></input>
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
