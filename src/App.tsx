import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <header
                    className="App-header"
                    style={{ backgroundColor: "#ff0000" }}
                >
                    Sarah Hershberger: UD CISC275 with React Hooks and
                    TypeScript
                </header>
                <h1></h1>
                <Row>
                    <Col style={{ border: "1px solid blue", padding: "18px" }}>
                        Some of my favorite foods:
                        <ul>
                            <li>ice cream</li>
                            <li>waffles</li>
                            <li>sushi</li>
                        </ul>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLagr4Fm8QGRa7b4V6H-99sBNBznmzBUKiGg&usqp=CAU"
                            alt="A picture of some tulips in Scotland"
                        />
                        <div
                            style={{
                                width: "20px",
                                height: "40px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col style={{ border: "1px solid blue", padding: "18px" }}>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World
                        </p>
                        <div
                            style={{
                                width: "20px",
                                height: "40px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>{" "}
                </Row>
            </Container>
        </div>
    );
}

export default App;
