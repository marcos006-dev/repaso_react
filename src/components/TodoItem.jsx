import { Badge, Checkbox, Group, Text } from '@mantine/core';
import React from 'react';

const TodoItem = ({ todo, handleChangeTodo }) => {
  // console.log(todo);

  const color = todo.completed ? 'green' : 'red';
  const menssageTodo = todo.completed ? 'Completed' : 'Incompleted';

  return (
    <>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color={color} variant="light">
          {menssageTodo}
        </Badge>
      </Group>

      <Checkbox
        checked={todo.completed}
        onChange={() => handleChangeTodo(todo)}
      />
    </>
  );
};

export default TodoItem;
