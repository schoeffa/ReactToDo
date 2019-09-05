import React from 'react';
import './AddToDo.css';

export class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDoText: ""};
    }

    handleChange = (e) => {
        this.setState({toDoText: e.target.value});
    }

    handleClick = () => {
        this.props.onSubmit(this.state.toDoText);
    }

    render() {
        return (
            <div>
                <input type="text" className="Add-input"placeholder='Add your to do' value={this.state.toDoText} onChange={this.handleChange}></input>
                <button className="Add-button" onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}