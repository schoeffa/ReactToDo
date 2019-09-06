import React from 'react';
import './AddToDo.css';

export class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDoText: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({toDoText: e.target.value});
    }

    handleClick = () => {
        this.props.onSubmit(this.state.toDoText);
        this.setState({toDoText: ""});
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.props.onSubmit(this.state.toDoText);
            this.setState({toDoText: ""});
        }
    }

    render() {
        return (
            <div>
                <input type="text" className="Add-input"placeholder='Add your to do' value={this.state.toDoText} onChange={this.handleChange} onKeyUp={this.handleKeyUp}></input>
                <button className="Add-button" onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}