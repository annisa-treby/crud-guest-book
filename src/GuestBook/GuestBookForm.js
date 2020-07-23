import React, { Component } from "react";
import {Card, CardHeader, Form, FormGroup, CardBody, Label, Col, Input, Button,} from "reactstrap";
import { Link} from "react-router-dom";
import FaIcon from "../Icon/Faicon";
import {connect} from "react-redux";

class GuestBookForm extends Component {

  isValidForm = () => {
    const { form } = this.props;

    return form.name.trim().length > 0 && form.address.trim().length > 0;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { form, guests, createGuest, updateGuest, resetForm} = { ...this.props };
    console.log(guests)
    if (form.id > 0) {

          updateGuest(form)
        }
     else {
      form.id = guests.length + 1;
      createGuest(form);
      console.log(form,'handleSubmit')
    }

    resetForm();
  };


  render() {
    const {
      form,
      handleInputChanges,
    } = this.props;
    console.log(form,'render')
    return (
      <Card className="shadow">
        <CardHeader tag="strong" className="text-muted">
          Form
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.handleFormSubmit}>
            <FormGroup row>
              <Label for="name" sm="4" className="text-muted">
                Guest Name
              </Label>
              <Col sm="8">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) =>
                    handleInputChanges("name", event.target.value)
                  }
                  placeholder="Enter guest name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm="4" className="text-muted">
                Guest Address
              </Label>
              <Col sm="8">
                <Input
                  type="textarea"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={(event) =>
                    handleInputChanges("address", event.target.value)
                  }
                  placeholder="Enter guest address"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={{ size: 7, offset: 4 }}>
                <Button
                  type="submit"
                  color="primary"
                  disabled={!this.isValidForm()}
                  className="shadow"
                >
                  <FaIcon icon="fas save" /> Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
          <Link to="/guest-book/greeting">click me</Link>
        </CardBody>
      </Card>
    );
  }
}
function mapStateToProps(state) {
return {...state}
}

function mapDispatchToProps(dispatch) {
return{
  handleInputChanges : (inputName, inputValue) => dispatch({type: 'HANDLE_INPUT_CHANGES', payload :{inputName, inputValue}}),
  createGuest : (payload) => dispatch({type:'CREATE_GUEST', payload}),
  updateGuest : (payload) => dispatch({type:'UPDATE_GUEST', payload}),
  resetForm :()=> dispatch({type:'RESET_FORM'})
}
}

export default connect(mapStateToProps,mapDispatchToProps)(GuestBookForm);
