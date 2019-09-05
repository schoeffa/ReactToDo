import React from 'react';
import { FilterInput } from './FilterInput.js';
import { ToDoList } from './ToDoList';
import { AddToDo } from './AddToDo'
import './ToDo.css';

let todos = [
    {name: 'Walk the dog.', complete: false},
    {name: 'Go to the store.', complete: true},
    {name: 'Get gas.', complete: false},
    {name: 'Wash the car.', complete: false}
];

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: todos,
            filteredList: todos
        }
        this.changeList = this.changeList.bind(this);
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
        this.state.list.push({name:newToDo, complete: false});
        this.changeList("");
    }

    render() {

        return (
            <div className="ToDo-app">
                <p className='title'>TODO List</p>
                <p className='sub-title'>A place to store the things you have to do!</p>
                <FilterInput onChange={this.changeList}></FilterInput>
                <ToDoList todos={this.state.filteredList}></ToDoList>
                <AddToDo onSubmit={this.addItem}></AddToDo>
                {/* <input type="text" placeholder='Add your to do'></input>
                <button className="Add-button">Add</button> */}
            </div>
        )
    }
}

export default ToDo;