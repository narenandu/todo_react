import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodo, addingTodo } from '../../actions/todoActions';
import { Form, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    onChange = (e) => {
        const todo = e.target.value;
        console.log(todo);
        addingTodo(todo);
    }

    onSubmit = (e) => {
        console.log("onSubmit: ");
        console.log(this.props.todo);
        e.preventDefault();
        const newTodo = {
            id: uuid.v4(),
            text: this.props.todo.text,
            done: false
        }
        addTodo(newTodo);
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <Form onSubmit={this.onSubmit} >
                    <Form.Row style={{ padding: '8px' }}>
                        <Col>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Add a Todo"
                                onChange={this.onChange}
                                value={this.props.todos.todo.text}>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}


AddTodo.propTypes = {
    // addTodo: PropTypes.func.isRequired,
    addingTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    todos: state
});

export default connect(mapStateToProps, { addingTodo })(AddTodo);;
