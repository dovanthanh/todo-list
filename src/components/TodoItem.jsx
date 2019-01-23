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
            <div className={TodoItemClass}   >
                {/* <Img src=''/> */}
                {/* <Image src="https://icdn.dantri.com.vn/thumb_w/640/2018/5/23/net-cuoi-be-gai-9-1527053440039156820618.jpg"/> */}
                {/* <Image src="/assets/img/success2.png"/> */}
                <img src={url}className="icon" onClick={() => onClick(item)} alt="icon click"></img>
                <p> {this.props.item.title} </p>
                <img src='./assets/img/error.png' className="iconDel" onClick={() =>onClickDel(item)} alt="icon delete"></img>
            </div>
        );
    }
}

export default TodoItem;