import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  Check,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function App() {
  let [task, setTask] = useState([]);
  return (
    <div className="App">
      <h1 className="logo-text">TODO LIST</h1>
      <div className="top-nav">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Add Task
          </InputGroup.Text>
          <Form.Control
            onKeyDown={(e) => {
              if (e.key == "Enter" && e.nativeEvent.isComposing == false) {
                let copy = [...task];
                copy.push(e.target.value);
                setTask(copy);
                e.target.value = "";
                console.log(task);
              }
            }}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <DropdownButton id="dropdown-basic-button" title="All">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <container className="todo-list">
        {task.map((a, i) => {
          return <ListBox task={task} i={i} setTask={setTask} />;
        })}
      </container>
    </div>
  );
}

function ListBox(props) {
  let [isEditing, setIsEditing] = useState(false);
  let [edit, setEdit] = useState(props.task[props.i]);

  return (
    <div className="list-box">
      <div style={{ display: "flex", gap: "12px" }}>
        <Form.Check style={{ scale: "1.4" }} aria-label="option 1" />
        {isEditing == false ? (
          <span>{props.task[props.i]}</span>
        ) : (
          <FloatingLabel controlId="floatingInput"  className="mb-3">
            <Form.Control id="edit-input" type="text" placeholder="" />
          </FloatingLabel>
        )}
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <Button
          onClick={() => {
            let copy = [...props.task];
            copy.splice(props.i, 1);
            props.setTask(copy);
          }}
          id="color-ligthgray"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          id="color-ligthgray"
        >
          <FontAwesomeIcon icon={faPen} />
        </Button>
      </div>
    </div>
  );
}

export default App;
