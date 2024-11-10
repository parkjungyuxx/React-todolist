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
  const [task, setTask] = useState([]);
  const [currentView, setCurrentView] = useState([]);
  const [taskStatus, setTaskStatus] = useState(false);
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
                const copy = [...task];
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
          <Dropdown.Item href="#/action-1">All</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Done</Dropdown.Item>
          <Dropdown.Item href="#/action-3">To Do</Dropdown.Item>
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

// function changeTaskStatus(props) {
//   {
//     props.taskStatus === false ? true : false;
//   }
// }

function ListBox(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(props.task[props.i]);

  function SaveEdit() {
    const copy = [...props.task];
    copy[props.i] = edit;
    props.setTask(copy);
    setIsEditing(false);
  }

  return (
    <div className="list-box">
      <div style={{ display: "flex", gap: "12px" }}>
        <Form.Check style={{ scale: "1.4" }} aria-label="option 1" />
        {isEditing == false ? (
          <span>{props.task[props.i]}</span>
        ) : (
          <Form.Control
            taskStatus={props.taskStatus}
            placeholder={`${props.task[props.i]}`}
            onChange={(key) => {
              setEdit(key.target.value);
            }}
            onKeyDown={(key) => {
              if (key.key == "Enter") SaveEdit();
            }}
            id="edit-input"
            type="text"
          />
        )}
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <Button
          onClick={() => {
            const copy = [...props.task];
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
