import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todoActions';
import  { Form, Button, Col }  from 'react-bootstrap';

export class AddTodo extends Component {
    state = {
        title: ''
    }

   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value});

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
                                value={this.state.title}>
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
    todos: state.todos
});

export default connect(mapStateToProps, {addTodo})(AddTodo);;
