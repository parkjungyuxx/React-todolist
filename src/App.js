import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown, DropdownButton, Form, Check } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h1 className="logo-text">TODO LIST</h1>
      <div className="top-nav">
        <Button id="addTask-button" variant="primary">
          Add Task
        </Button>
        <DropdownButton id="dropdown-basic-button" title="All">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <container className="todo-list">
        <div className="list-box">
          <div style={{ display: "flex", gap: "12px" }}>
            <Form.Check style={{ scale: "1.4" }} aria-label="option 1" />
            안녕
          </div>
          <div
            style={{ display: "flex", gap: "8px"}}
          >
            <Button id="color-ligthgray">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button id="color-ligthgray">
              <FontAwesomeIcon icon={faPen} />
            </Button>
          </div>
        </div>
        <div></div>

        <div className="list-box">안녕</div>
        <div className="list-box">안녕</div>
        <div className="list-box">안녕</div>
      </container>
      <container></container>
    </div>
  );
}

function todoList() {
  {
    <div className="list-box"></div>;
  }
}

export default App;
