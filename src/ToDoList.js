import React from 'react';
import './ToDoList.css'
export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
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
                <li key={todos.name} className="List-item"><button className="Complete-button">Complete</button>{todos.name}<button className="material-icons close" ng-click="$ctrl.removeTask(item)">close</button></li>
            )
        });

        return (
            <ol>{toDoList}</ol>
        )
    }
}