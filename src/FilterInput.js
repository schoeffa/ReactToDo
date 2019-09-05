import React from 'react';

export class FilterInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: ""};
    }

    handleChange = (e) => {
        this.setState({
            filterText: e.target.value
        });
        this.props.onChange(e.target.value);
    }

    render() {
        return (
        <input type="text" placeholder='Filter your to-dos' value={this.state.filterText} onChange={this.handleChange}></input>
    )}
}