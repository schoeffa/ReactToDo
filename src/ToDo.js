import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component {
    render() {
        const toDoList = this.props.todos.map((todos) => {
            return (
                <li>{todos.name}</li>
            )
        });   
        return (
            <div>
                <p id='title'>TODO List</p>
                <p id='sub-title'>A place to store the things you have to do!</p>
                <input type="text" placeholder='Filter your to-dos'></input>
                <ol>
                    {toDoList}
                </ol>
                <input type="text" placeholder='Add your to do'></input>
                <button>Add</button>
            </div>
        )
    }
}

export default ToDo;