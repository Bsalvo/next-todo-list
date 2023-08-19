import { z } from "zod"

export const TodoSchema = z.object({
    todoId: z.string().optional(),
    title: z.string().min(1, 'Tarefa não pode estar vazia'),
    complete: z.boolean().optional()
})

export const ClientSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(3, 'Nome precisa ser maior que 3 letras'),
    document: z.string()
})