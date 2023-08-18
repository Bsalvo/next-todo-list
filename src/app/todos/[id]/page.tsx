import { Metadata } from "next"
import Link from "next/link"
import { getTodo } from "../actions"
import { FormEditTodo } from "@/components/todo/FormEditTodo"

export const metadata: Metadata = {
    title: 'Informações da Tarefa',
}

export default async function todoPage({ params }: any) {

    const todo = await getTodo(params.id)
    if (todo) {
        return (
            <>
                <header className="flex justify-between items-center mb-4">
                    <Link href=".." className="link-primary-bordeless text-sm">Voltar</Link>
                    <span className="detail-primary self-end">Tarefa criada: {todo.createdAt.toLocaleString('pt-BR').replace(', ', ' - ')}</span>
                </header>
                <FormEditTodo {...todo} />
                <div className="mt-4">
                    <span className="detail-primary">
                        Última modificação: {todo.updatedAt.toLocaleString('pt-BR').replace(', ', ' - ')}
                    </span>
                </div>
            </>
        )
    } else {
        return (
            <div className="flex items-center justify-center">
                <p className="text-slate-300 text-2xl my-24">Ops.. Tarefa não encontrada</p>
            </div>
        )
    }

}
