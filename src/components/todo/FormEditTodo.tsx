"use client"

import { updateTodo, deleteTodo } from "@/app/todos/actions"
import { useRef, useState } from "react"
import { TodoSchema } from "@/app/lib/validation/todo"

type FormEditTodoProps = {
    id: string
    title: string
    complete: boolean
}

export function FormEditTodo({ id, title, complete }: FormEditTodoProps) {

    const ref = useRef<HTMLFormElement>(null)

    const [error, setError] = useState<string[]>([])

    return (<form ref={ref} action={async data => {
        const newTodo = {
            todoId: data.get('todoId')?.valueOf(),
            title: data.get('title')?.valueOf(),
            complete: (data.get('complete')?.valueOf()) ? true : false
        }
        const validation = TodoSchema.safeParse(newTodo)
        if (!validation.success) {
            setError(validation.error.issues.map(issue => issue.message))
        } else {
            const response = await updateTodo(validation.data)
            if (response) {
                setError(response)
            }
        }
    }} className="flex gap-2 flex-col">
        <input
            type="text"
            name="title"
            className="input-primary"
            defaultValue={title}
            placeholder={title}
        />
        <div className="text-red-500 text-sm pl-1">
            {error.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
        <div className="flex gap-1 justify-between">
            <div className="flex gap-1 items-center pl-2 text-slate-300">
                <input
                    value={id}
                    type="hidden"
                    name="todoId"
                />
                <input
                    className="checkbox-primary"
                    id={id}
                    type="checkbox"
                    defaultChecked={complete}
                    name="complete"
                />
                <label
                    className="cursor-pointer"
                    htmlFor={id}>Tarefa realizada
                </label>
            </div>
            <div className="flex gap-1">
                <button type="submit" className="link-primary">Editar</button>
                <button formAction={deleteTodo} className="link-primary">Excluír</button>
            </div>
        </div>
    </form>)

}