import { useEffect, useState } from 'react';
import { CardSection, Container } from '@mantine/core';
import TodoItem from '../components/TodoItem';

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTodos(data);
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  const handleChangeTodo = (todo) => {
    // console.log();
    todo.completed = !todo.completed;
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  return (
    <Container>
      <CardSection shadow="sm" p="lg" radius="md" withBorder>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeTodo={handleChangeTodo}
          />
        ))}
      </CardSection>
    </Container>
  );
};

export default HomePage;
