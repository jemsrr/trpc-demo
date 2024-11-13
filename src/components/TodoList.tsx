'use client';

import { trpc } from '../trpc/client';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { data: todos, isLoading } = trpc.todo.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
console.log(todos.json,"ss");

  return (
    <div className="space-y-4">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}