import React from 'react';
import './ToDoList.css'
import { ToDoItem } from './ToDoItem.js'
export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.markComplete = this.markComplete.bind(this);
    }

    removeItem = (item) => {
        this.props.removeItem(item);
    }

    markComplete = (item) => {
        this.props.markComplete(item);
    }

    render() {
        const toDoList = this.props.todos.map((todos, index) => {
            return (
                <ToDoItem key={index} item={todos} removeItem={this.removeItem} markComplete={this.markComplete}></ToDoItem>
            )
        });

        return (
            <ol>{toDoList}</ol>
        )
    }
}