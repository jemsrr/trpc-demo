'use client';

import { useState } from 'react';
import { trpc } from '../trpc/client';

export function TodoForm() {
  const [newTodo, setNewTodo] = useState('');
  const utils = trpc.useContext();
  
  const addTodo = trpc.todo.create.useMutation({
    onSuccess: () => {
      setNewTodo('');
      utils.todo.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo.mutate({ title: newTodo });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
          placeholder="Add new todo..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
}