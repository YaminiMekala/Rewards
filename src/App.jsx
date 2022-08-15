import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import CustomerTable from "./components/customertable";
import fetch from "./api/dataservice";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <header className="Reward-header">
            <h1>Reward's Summary</h1>
          </header>
        </Row>
        <Container>
          <Row>
            {
              data.length && <CustomerTable data={data} />
            }
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
