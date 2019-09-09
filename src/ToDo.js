import React from 'react';
import { FilterInput } from './FilterInput.js';
import { ToDoList } from './ToDoList';
import { AddToDo } from './AddToDo'
import './ToDo.css';

let todos = [
    {index: 1, name: 'Walk the dog.', complete: false},
    {index: 2, name: 'Go to the store.', complete: false},
    {index: 3, name: 'Get gas.', complete: false},
    {index: 4, name: 'Wash the car.', complete: false}
];

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: todos,
            filteredList: todos
        }
        this.changeList = this.changeList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markComplete = this.markComplete.bind(this);
    }

    changeList = (filterInput) => {
        let filteredList = this.state.list;
        filteredList = filteredList.filter((text) => {
            let filterText = text.name.toLowerCase();
            return filterText.indexOf(filterInput.toLowerCase()) !== -1;
        })
        this.setState({filteredList});
    }

    addItem = (newToDo) => {
        if (newToDo !== "") {
            const index = this.state.list.length + 1;
            let list = this.state.list;
            list.push({index:index, name:newToDo, complete: false});
            this.setState({list: list});
        }
    }

    removeItem = (item) => {
        let list = this.state.filteredList;
        list.splice(list.indexOf(item), 1);
        this.setState({list: list});
    }

    markComplete = (item) => {
        const index = this.state.list.indexOf(item);
        let list = this.state.filteredList;
        list[index].complete = true;
        this.setState({list: list});
    }

    render() {
        return (
            <div className="ToDo-app">
                <p className='title'>TODO List</p>
                <p className='sub-title'>A place to store the things you have to do!</p>
                <FilterInput onChange={this.changeList}></FilterInput>
                <ToDoList todos={this.state.filteredList} removeItem={this.removeItem} markComplete={this.markComplete}></ToDoList>
                <AddToDo onSubmit={this.addItem}></AddToDo>
            </div>
        )
    }
}

export default ToDo;