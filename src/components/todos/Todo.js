import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Toast, Button } from 'react-bootstrap';

export class Todo extends Component {
    getStyle = () => {
       return {
            background: '#f4f4f4',
            padding: '4px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }


    render() {
        const text = this.props.todo.text;
        return (
            <Toast>
                <Toast.Body style={this.getStyle()}>
                    <input type="checkbox" /> 
                    {' '}
                    {text}
                    <Button variant={'danger'} size="sm" style={{float:"right"}} className="Close"></Button>
                </Toast.Body>
            </Toast>
        )
    }
}

// PropTypes
Todo.propTypes = {
    todo: PropTypes.object.isRequired
}


export default Todo;
