import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todo extends Component {
    getStyle = () => {
        if (this.props.todo.done) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }

    }


    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.text}</p>
            </div>
        )
    }
}

// PropTypes
Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todo
