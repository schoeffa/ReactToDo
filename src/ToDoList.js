import React from 'react';

// let todos = [
//     {name: 'Walk the dog.', complete: false},
//     {name: 'Go to the store.', complete: true},
//     {name: 'Get gas.', complete: false},
//     {name: 'Wash the car.', complete: false}
// ];

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     list: todos,
        //     filteredList: todos
        // }
    }

    filterList = (toDoFilter) => {
        let filteredList = this.state.list;
        filteredList = filteredList.filter((text) => {
            return text.indexOf(toDoFilter.toLowerCase()) !== -1;
        })
        this.setState({filteredList});
    }

    render() {
        const toDoList = this.props.todos.map((todos) => {
            return (
                <li key={todos.name}>{todos.name}</li>
            )
        });

        return (
            <ol>{toDoList}</ol>
        )
    }
}