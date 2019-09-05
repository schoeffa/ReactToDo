import React from 'react';

export class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDoText: ""};
    }

    handleChange = (e) => {
        this.setState({toDoText: e.target.value});
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.toDoText);
    }

    render() {
        return (
            <form>
                <input type="text" placeholder='Add your to do' value={this.state.toDoText} onChange={this.handleChange}></input>
                <button className="Add-button" onSubmit={this.handleSubmit}>Add</button>
            </form>
        )
    }
}