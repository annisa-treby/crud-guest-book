import React, { Component } from "react";
import { Card, Table, Button, CardHeader } from "reactstrap";
import FaIcon from "../Icon/Faicon";
import {connect} from "react-redux";

class GuestBookTable extends Component {
    
  generateTableRows(guests) {
    const { handleEdit, handleDelete } = this.props;
    let rows = (
      <tr>
        <td colSpan="4" className="table-warning text-center">
          <strong>
            <em>No guest(s) yet.</em>
          </strong>
        </td>
      </tr>
    );

    if (guests.length > 0) {
      rows = guests.map((guest, index) => {
        return (
          <tr key={index}>
            <th sm={1} scope="row">{index + 1}</th>
            <td sm={4}>{guest.name}</td>
            <td sm={4}>{guest.address}</td>
            <td>
              <Button
                type="button"
                color="warning"
                size="sm"
                className="shadow"
                onClick={() => handleEdit(guest.id)}
              >
                <FaIcon icon="far edit" /> Edit
              </Button>
            </td>
            <td>
              <Button
                type="button"
                color="danger"
                size="sm"
                className="shadow"
                onClick={() => handleDelete(guest.id)}
              >
                <FaIcon icon="far trash-alt" /> Delete
              </Button>
            </td>
          </tr>
        );
      });
    }

    return rows;
  }

  render() {
    const { guests } = this.props;
    return (
      <Card className="shadow">
        <CardHeader tag="strong">Guests ({guests.length}) </CardHeader>
        <Table striped hover responsive className="m-0">
          <thead>
            <tr>
              <th width="5%">#</th>
              <th >Guest Name</th>
              <th>Guest Address</th>
              <th colSpan="2" width="20%">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{this.generateTableRows(guests)}</tbody>
        </Table>
      </Card>
    );
  }

}
function mapStateToProps(state){
    return {...state}
}
function mapDispatchToProps(dispatch) {
    return {
        handleEdit : (payload) => dispatch({type: 'HANDLE_EDIT', payload}),
        handleDelete : (payload) => dispatch({type: 'HANDLE_DELETE', payload}),
        handleSearch : (payload) => dispatch({type: 'HANDLE_SEARCH', payload})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GuestBookTable);
