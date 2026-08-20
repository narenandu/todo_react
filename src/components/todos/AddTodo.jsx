import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addTodo, addingTodo } from '../../actions/todoActions';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.props.addingTodo) {
      this.props.addingTodo(e.target.value);
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.title.trim()) return;
    const newTodo = {
      id: uuidv4(),
      text: this.state.title.trim(),
      done: false
    };
    if (this.props.addTodo) {
      this.props.addTodo(newTodo);
    }
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="d-flex flex-column mb-3">
        <Form onSubmit={this.onSubmit}>
          <Row style={{ padding: '8px' }}>
            <Col>
              <Form.Control
                name="title"
                type="text"
                placeholder="Add a Todo"
                onChange={this.onChange}
                value={this.state.title}
              />
            </Col>
            <Col xs="auto">
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func,
  addingTodo: PropTypes.func,
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addTodo, addingTodo })(AddTodo);
