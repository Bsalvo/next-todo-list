"use client"

import { createTodo } from "@/app/todos/actions"
import { TodoSchema } from "@/app/lib/validation/todo"
import Link from "next/link"
import { useState } from "react"

export function FormCreateTodo() {

    const [error, setError] = useState<string[]>([])

    const clientAction = async (data: FormData) => {
        const newTodo = {
            title: data.get('title')?.valueOf(),
        }
        const validation = TodoSchema.safeParse(newTodo)
        if (!validation.success) {
            setError(validation.error.issues.map(issue => issue.message))
        } else {
            const response = await createTodo(validation.data)
            if (response) {
                setError(response)
            }
        }
    }

    return (
        <form action={clientAction} className="flex gap-2 flex-col">
            <input type="text" name="title" className="input-primary" />
            <div className="text-red-500 text-sm pl-1">
                {error.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
            <div className="flex gap-1 justify-end">
                <Link href=".." className="link-primary">Cancelar</Link>
                <button type="submit" className="link-primary">Criar</button>
            </div>
        </form>
    )
}