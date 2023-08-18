"use client"

import Link from "next/link"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    return <li className="flex gap-1 items-center justify-between mb-2 p-2 rounded hover:bg-slate-700 transition duration-150">
        <div className="flex gap-1 items-center">
            <input
                id={id}
                type="checkbox"
                className="checkbox-primary peer"
                defaultChecked={complete}
                onChange={e => toggleTodo(id, e.target.checked)}
                required
            />
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 hover:underline">{title}</label>
        </div>
        <Link href={`/todos/${id}`} className="text-xs border-slate-300 text-slate-300 p-1 rounded hover:bg-slate-600 focus-within:bg-slate-700 outline-none" title="Informações">Info</Link>
    </li>
}