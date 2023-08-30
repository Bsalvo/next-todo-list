
/**
 * * Controlador encarregado de gerenciar as alterações
 * * e consultas da tabela de tarefas (Todo) no banco de dados
 */

"use server"

import { prisma } from "@/db"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { TodoSchema } from "@/app/lib/validation/todo"


/**
 * Busca na lista de tarefas a tarefa com id específico
 * 
 * @author  Bruno Salvo
 * @since   1.0.0 16/08/2023
 * @version 1.0.0
 */
export async function getTodo(todoId: string) {
    try {
        const todo = await prisma.todo.findUnique({ where: { id: todoId } })
        revalidateTag('prisma-user')
        return todo
    } catch (e) {
        throw new Error('Ocorreu um erro ao tentar encontrar a tarefa.')
    }

}

/**
 * Busca todos os todos que estão cadastrados
 * 
 * @author  Bruno Salvo
 * @since   1.0.0 16/08/2023
 * @version 1.0.0
 */
export async function getTodos() {
    try {
        const todos = await prisma.todo.findMany()
        revalidateTag('prisma-user')
        return todos
    } catch (e) {
        throw new Error('Ocorreu um erro ao tentar buscar as tarefas.')
    }

}




/**
 * Atualiza a tarefa com as novas informações (todo) na lista de tarefas
 * 
 * @author  Bruno Salvo
 * @since   1.0.0 16/08/2023
 * @version 1.0.0
 */
export async function updateTodo(newTodo: { todoId?: string, title: string, complete?: boolean }) {

    try {
        const validation = TodoSchema.safeParse(newTodo)
        if (!validation.success) {
            return validation.error.issues.map(issue => issue.message);
        }

        const todoId = newTodo.todoId
        const title = newTodo.title
        const complete = newTodo.complete

        if (typeof todoId === 'string') {
            const todo = await prisma.todo.findUnique({ where: { id: todoId } })
            if (todo) {
                if (title === todo.title && complete === todo.complete) {
                    return
                }
                await prisma.todo.update({ where: { id: todoId }, data: { title, complete } })
                revalidateTag('prisma-user')
            }
        }
    } catch (e) {
        throw new Error('Ocorreu um erro ao tentar atualizar a tarefa.')
    }
}

/**
 * Deleta a tarefa (todo) da lista de tarefas
 * 
 * @author  Bruno Salvo
 * @since   1.0.0 16/08/2023
 * @version 1.0.0
 */
export async function deleteTodo(data: FormData) {

    const todoId = data.get('todoId')?.valueOf()
    if (typeof todoId === 'string') {
        const todo = await prisma.todo.findUnique({ where: { id: todoId } })
        if (todo) {
            await prisma.todo.delete({ where: { id: todoId } })
            redirect('/')
        }
    }
}

/**
 * Adiciona uma nova tarefa (todo) na lista de tarefas
 *  
 * 
 * @author  Bruno Salvo
 * @since   1.0.0 16/08/2023
 * @version 1.0.0
 */
export async function createTodo(newTodo: { title: string }) {

    try {

        const validation = TodoSchema.safeParse(newTodo)
        if (!validation.success) {
            return validation.error.issues.map(issue => issue.message);
        }

        const title = newTodo.title
        await prisma.todo.create({ data: { title, complete: false } })

    } catch (e: any) {
        throw new Error('Erro ao tentar adicionar nova tarefa')
    }

    redirect("/")

}

/**
 * Atualiza o campo complete da tarefa
 * 
 * @author  Bruno Salvo
 * @since   1.0.0 16/08/2023
 * @version 1.0.0
 */
export async function toggleTodo(id: string, complete: boolean) {
    await prisma.todo.update({ where: { id: id }, data: { complete } })
    revalidateTag('prisma-user');
}


