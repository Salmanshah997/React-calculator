import React, { useState } from "react";
import "../Css/salman.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Layout = () => {
  const [inputValue, setinputValue] = useState("");
  const updateValue = (event) => {
    setinputValue(inputValue.concat(event.target.value));
  };

  const clear = () => {
    setinputValue("");
  };
  const backCharh = () => {
    setinputValue((inputValue) => inputValue.slice(0, -1));
  };

  const calculateValue = () => {
    try {
      setinputValue(eval(inputValue).toString());
    } catch (err) {
      inputValue("Error");
    }
  };

  return (
    <div>
      <div className="main-calculator m-0">
        <Container className="mian-container bg-dark">
          <Row>
            <Col lg={12}>
              <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="All-operation py-3"
                    type="text"
                    name="name"
                    value={inputValue}
                    onChange={updateValue}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Row></Row>
            <Col lg={10}>
              <Row>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    onClick={clear}
                    id="Clear"
                    className="py-5 all-text-manage"
                  >
                    Clear
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    id="back_space"
                    onClick={backCharh}
                    className="py-5 all-text-manage"
                  >
                    C
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={`%`}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    %
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={1}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                    name="1"
                  >
                    1
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={2}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                    name="2"
                  >
                    2
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={3}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    3
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={4}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    4
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={5}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    5
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={6}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    6
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={7}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    7
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={8}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    8
                  </Button>
                </Col>
                <Col lg={4} className="d-grid">
                  <Button
                    type="button"
                    value={9}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    9
                  </Button>
                </Col>
                <Col lg={6} className="d-grid">
                  <Button
                    type="button"
                    value={`.`}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    .
                  </Button>
                </Col>
                <Col lg={6} className="d-grid">
                  <Button
                    type="button"
                    value={0}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    0
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={2}>
              <Row>
                <Col lg={12} className="d-grid">
                  <Button
                    type="button"
                    value={`/`}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    ÷
                  </Button>
                </Col>
                <Col lg={12} className="d-grid">
                  <Button
                    type="button"
                    value={`*`}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    ×
                  </Button>
                </Col>
                <Col lg={12} className="d-grid">
                  <Button
                    type="button"
                    value={`+`}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    +
                  </Button>
                </Col>
                <Col lg={12} className="d-grid">
                  <Button
                    type="button"
                    value={`-`}
                    onClick={(e) => updateValue(e)}
                    className="py-5 all-text-manage"
                  >
                    -
                  </Button>
                </Col>
                <Col lg={12} className="d-grid">
                  <Button
                    type="button"
                    onClick={calculateValue}
                    className="py-5 all-text-manage"
                  >
                    =
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
