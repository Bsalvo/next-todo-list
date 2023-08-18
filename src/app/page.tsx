import { TodoItem } from "@/components/TodoItem"
import { Metadata } from "next"
import { toggleTodo, getTodos } from "./todos/actions"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Lista de Tarefas',
}

export default async function Home() {

  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Lista de Tarefas</h1>
        <Link href="/todos/new" className="link-primary">Nova</Link>
      </header>
      {todos.length === 0 ? (
        <div className="text-center text-2xl my-9 text-slate-400">Adicione sua primeira tarefa!</div>
      ) : (
        <ul className="pl-4">
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      )}

    </>
  )
}