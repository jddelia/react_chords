import React, { Component } from 'react';

class Note extends Component {
    constructor(props) {
        super(props);
        this.handleNoteClick = this.handleNoteClick.bind(this);
    }

    handleNoteClick(e) {
        this.props.onClick(e.target.value);  
    }

    render() {
        return (
            <button className="note-btn" value={this.props.note} onClick={this.handleNoteClick}>
                {this.props.note}
            </button>
        );
    }
}

export default Note;