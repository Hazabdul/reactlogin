import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, ListGroup, Container, Row, Col, InputGroup } from 'react-bootstrap';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [newTask, setNewTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [checkedTasks, setCheckedTasks] = useState([]);

    useEffect(() => {
        
        fetch('/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching todos: ' + error));
    }, []);

    const handleEditTask = (index) => {
        setEditingTask(index);
        setNewTask(todos[index].text);
        setDueDate(todos[index].dueDate || ''); 
    };

    const handleUpdateTask = () => {
        if (newTask.trim() === '') {
            return;
        }

        const updatedTodos = [...todos];
        updatedTodos[editingTask] = { ...updatedTodos[editingTask], text: newTask, dueDate };
        setTodos(updatedTodos);
        setEditingTask(null);
        setNewTask('');
        setDueDate('');
    };

    const handleDeleteTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleToggleComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);

        if (updatedTodos[index].completed) {
            setCheckedTasks([...checkedTasks, index]);
        } else {
            setCheckedTasks(checkedTasks.filter(i => i !== index));
        }
    };

    const handleAddNewTask = () => {
      if (newTask.trim() === '') {
          return;
      }
  
      const newTaskObject = {
          text: newTask,
          dueDate: dueDate,
          completed: false,
      };
  
      setTodos([...todos, newTaskObject]);
      setNewTask('');
      setDueDate('');
  };

    const handleSignOut = () => {
       
        navigate('/'); 
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Container style={{height:'100vh'}}>
            <Row>
                <Col>
                    <Button
                        variant="secondary"
                        onClick={goBack}
                        className="position-absolute top-0 end-0 m-2"
                    >
                        Go Back
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={handleSignOut}
                        className="position-absolute top-0 end-0 m-2"
                    >
                        Sign Out
                    </Button>
                    <br /><br />
                    <h1 className="mb-4">Welcome, {location.state.id}!</h1>
                    <h2>Your Todo List:</h2>
                    <ListGroup>
                        {todos.map((todo, index) => (
                            <ListGroup.Item
                                key={index}
                                className="d-flex justify-content-between align-items-center"
                            >
                                <InputGroup>
                                    <InputGroup.Checkbox
                                        checked={checkedTasks.includes(index)}
                                        onChange={() => handleToggleComplete(index)}
                                    />
                                    <span
                                        className={todo.completed ? 'completed' : ''}
                                        onClick={() => handleToggleComplete(index)}
                                    >
                                        {editingTask === index ? (
                                            <Form.Control
                                                type="text"
                                                value={newTask}
                                                onChange={(e) => setNewTask(e.target.value)}
                                            />
                                        ) : (
                                            <span>{todo.text}</span>
                                        )}
                                        {todo.dueDate && (
                                            <small className="text-muted"> - Due: {todo.dueDate}</small>
                                        )}
                                    </span>
                                </InputGroup>
                                <div>
                                    <Button
                                        variant="info"
                                        className="ml-2"
                                        onClick={() => {
                                            if (editingTask === index) {
                                                handleUpdateTask();
                                            } else {
                                                handleEditTask(index);
                                            }
                                        }}
                                    >
                                        {editingTask === index ? 'Save' : 'Edit'}
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="ml-2"
                                        onClick={() => handleDeleteTask(index)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group>
                        <Form.Label>Add New Task:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="New Task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <Form.Label>Due Date:</Form.Label>
                        <Form.Control
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                        <Button
                            variant="success"
                            className="mt-2"
                            onClick={handleAddNewTask}
                        >
                            Add
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
