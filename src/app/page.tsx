'use client';

import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";



export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Todo List</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}