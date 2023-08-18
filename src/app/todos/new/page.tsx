import { Metadata } from "next";
import { FormCreateTodo } from "@/components/todo/FormCreateTodo";

export const metadata: Metadata = {
    title: 'Nova Tarefa',
}

export default function New() {

    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Nova Tarefa</h1>
            </header>
            <FormCreateTodo />
        </>
    )
}