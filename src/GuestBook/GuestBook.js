import React, { Component } from "react";
import GuestBookTable from "./GuestBookTable";
import GuestBookForm from "./GuestBookForm";
import {Switch, Route, withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Greeting from "./Greeting";
import {createStore} from "redux";
import {Provider} from "react-redux";
import GuestBookReducer from "./GuestBookReducer";

const guestBookStore = createStore(GuestBookReducer)

class GuestBook extends Component {

  render() {
    return (
        <Container fluid>
        <Provider store={guestBookStore}>
          <Row>
            <Col>
              <Switch>
                <Route path="/guests/form" exact strict render={()=>
                  <GuestBookForm/>}/>
                <Route path="/guests/table" exact strict render={()=>
                  <GuestBookTable/>}/>
                <Route path="/guests/greeting" exact strict>
                  <Greeting />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Provider>
        </Container>
    );
  }
}

export default withRouter (GuestBook);
