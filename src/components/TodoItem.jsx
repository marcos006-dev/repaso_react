import { Badge, Checkbox, Group, Text } from '@mantine/core';
import React from 'react';

const TodoItem = ({ todo, handleChangeTodo }) => {
  console.log(todo);
  return (
    <>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          {todo.completed ? 'Completed' : 'Incompleted'}
        </Badge>
      </Group>

      <Checkbox
        checked={todo.completed}
        onChange={(event) => handleChangeTodo(event.target.checked)}
      />
    </>
  );
};

export default TodoItem;
