import { z } from "zod"

export const TodoSchema = z.object({
    todoId: z.string().optional(),
    title: z.string().min(1, 'Tarefa não pode estar vazia'),
    complete: z.boolean().optional()
})
