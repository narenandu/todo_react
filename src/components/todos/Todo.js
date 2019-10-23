import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todo extends Component {
    getStyle = () => {
       return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, text} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleDone.bind(this, id)} /> 
                    {' '}
                    {text}
                    <button style={btnStyle} onClick={this.props.removeTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleDone: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,    
}


const btnStyle = {
    background: '#fe0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default Todo;
