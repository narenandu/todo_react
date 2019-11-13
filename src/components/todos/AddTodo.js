import React, { Component } from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {addTodo, addingTodo} from '../../actions/todoActions';
import  { Form, Button, Col }  from 'react-bootstrap';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    onChange = (e) => {
        const tempTodo = {
            id: "",
            text: e.target.value,
            done: false
        }
        addingTodo(tempTodo);
    }

    onSubmit = (e) => {
        console.log("onSubmit: ");
        console.log(this.props.todo.text);
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
                    <Form.Row  style={{padding: '8px'}}> 
                        <Col>
                            <Form.Control 
                                name = "title"
                                type="text"
                                placeholder="Add a Todo" 
                                onChange={this.onChange}
                                value={this.props.todo.text}>
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
    addTodo: PropTypes.func.isRequired,
    addingTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    todo: state.todo
});

export default connect(mapStateToProps, {addTodo, addingTodo})(AddTodo);;
