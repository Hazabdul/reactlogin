import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch todos from the server and update the state
        fetch('/todos') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching todos: ' + error));
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    const signOut = () => {
        navigate('/');
    };

    return (
      <div className="homepage" style={{ height: '100vh' }}>
  <div className="d-flex justify-content-between align-items-center">
    <h1 style={{ textAlign: 'center' }}>{location.state.id} and welcome to the Todo</h1>
    <button className="btn btn-primary" onClick={signOut}>Sign Out</button>
  </div>
  <div>
    <h2>Your Todo List:</h2>
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>{todo.text}</li>
      ))}
    </ul>
  </div>
</div>

      
    );
}

export default Home;
