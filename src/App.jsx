import { Container, MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
// import Page1 from './pages/Page1';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
      <Container>
        <HomePage todos={todos} />
      </Container>
    </MantineProvider>
  );
}

export default App;
