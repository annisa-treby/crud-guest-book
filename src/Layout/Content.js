import React from "react"
import Sidebar from "./Sidebar"
import Routes from "../Routes/Routes"
import { Container, Col, Row } from "reactstrap"
import { BrowserRouter as Router } from "react-router-dom";


function Content (){
    return(
        <Container fluid>
            <Router>
                <Row>
                    <Col sm="2">
                    <Sidebar />
                    </Col>
                    <Col sm="10">
                    <Routes/>
                    </Col>
                </Row>
            </Router>
        </Container>
    )
}

export default Content