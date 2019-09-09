import React from 'react';
import './AddToDo.css';

export class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDoText: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({toDoText: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.toDoText);
        this.setState({toDoText: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="Add-input"placeholder='Add your to do' value={this.state.toDoText} onChange={this.handleChange} onKeyUp={this.handleKeyUp}></input>
                <button className="Add-button">Add</button>
            </form>
        )
    }
}