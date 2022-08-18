import { Badge, Button, Group } from '@mantine/core';
import React from 'react';

const TodoItem = ({ todo }) => {
  console.log(todo);
  return (
    <>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{todo.title}</Text>
        <Badge color="pink" variant="light">
          {todo.complete ? 'Completed' : 'Incompleted'}
        </Badge>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        {todo.complete ? 'Complete' : 'Incomplete'}
      </Button>
    </>
  );
};

export default TodoItem;
