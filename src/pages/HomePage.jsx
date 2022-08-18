import { CardSection } from '@mantine/core';
import TodoItem from '../components/TodoItem';

const HomePage = ({ todos, handleChangeTodo }) => {
  console.log(todos);
  return (
    <CardSection shadow="sm" p="lg" radius="md" withBorder>
      {/* <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
      /
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeTodo={handleChangeTodo}
        />
      ))}
    </CardSection>
  );
};

export default HomePage;
