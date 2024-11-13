'use client';

import { trpc } from '../trpc/client';

interface TodoItemProps {
  todo: any;
}

export function TodoItem({ todo }: TodoItemProps) {
  const utils = trpc.useContext();
  
  const toggleTodo = trpc.todo.toggle.useMutation({
    onSuccess: () => utils.todo.getAll.invalidate(),
  });
  
  const deleteTodo = trpc.todo.delete.useMutation({
    onSuccess: () => utils.todo.getAll.invalidate(),
  });

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            toggleTodo.mutate({ id: todo.id, completed: !todo.completed })
          }
          className="h-5 w-5"
        />
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => deleteTodo.mutate({ id: todo.id })}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}