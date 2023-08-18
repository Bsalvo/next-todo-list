"use client"

type ErrorProps = {
    error: Error & { digest?: string },
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {

    return (
        <div className="p-4 text-center text-gray-100 rounded-lg bg-red-500 my-12 text-2xl" role="alert">
            Opss.. {error.message}
        </div>
    )
}