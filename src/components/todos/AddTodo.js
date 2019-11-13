import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todoActions';
import  { Form, Button, Col }  from 'react-bootstrap';

export class AddTodo extends Component {

    onChange = (e) => this.props.todo.text =  e.target.value;

    render() {
        return (
            <div className="d-flex flex-column">
                <Form onSubmit={() => addTodo(this.props.todo)} > 
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

const mapStateToProps = state => ({
    todo: state.todo
});

export default connect(mapStateToProps, {addTodo})(AddTodo);;
