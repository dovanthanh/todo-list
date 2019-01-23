import React, { Component } from 'react';
import './TodoItem.css'
class TodoItem extends Component {
    render() {
        const { item,onClick,onClickDel } = this.props;
        var TodoItemClass = 'TodoItem';
        var url = './assets/img/success.png';
        if (item.checkComplete) {
            TodoItemClass+=' complete';
            url='./assets/img/success2.png'
        }
        return (
            <div className={TodoItemClass} >
                <img src={url}className="icon" onClick={() => onClick(item)} alt="icon click"></img>
                <p> {this.props.item.title} </p>
                <img src='./assets/img/error.png' className="iconDel" onClick={() =>onClickDel(item)} alt="icon delete"></img>
            </div>
        );
    }
}

export default TodoItem;