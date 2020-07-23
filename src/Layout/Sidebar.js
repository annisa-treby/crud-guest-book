import React, { Fragment } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import FaIcon from "../Icon/Faicon";

function Sidebar(){
    return (
        <Fragment>
            <ListGroup>
                <ListGroupItem color="info">
                    <Link exact to="/guests">
                        <FaIcon icon="fab home" /> Home
                  </Link>
                </ListGroupItem>
                <ListGroupItem color="info">
                    <Link to="/guests/form">
                        <FaIcon icon="fab wpforms" /> Form
                  </Link>
                </ListGroupItem>
                <ListGroupItem color="info">
                    <Link to="/guests/table">
                        <FaIcon icon="fas scroll" />Table</Link>
                </ListGroupItem>
            </ListGroup>
        </Fragment>
    )
}

export default Sidebar