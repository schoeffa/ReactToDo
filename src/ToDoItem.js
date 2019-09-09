import React from 'react';

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    
    handleClick = () => {
        this.props.removeItem(this.props.item);
    }

    handleComplete = () => {
        this.props.markComplete(this.props.item);
    }

    render() {
        const className = this.props.item.complete ? 'List-item Complete' : 'List-item';
        return (
            <li className={className}>
                <button className="Complete-button" onClick={this.handleComplete}>Complete</button>
                {this.props.item.name}
                <button className="material-icons" onClick={this.handleClick}>close</button>
            </li>
        )
    }
}