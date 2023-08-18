"use client"

export default function Loading() {
    return (
        <div className="animate-pulse flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="h-6 w-1/4 bg-gradient-to-l from-slate-700 from-70% rounded"></div>
                <div className="h-7 w-1/12 bg-slate-700 bg-gradient-to-r rounded"></div>
            </div>
            <div className="mt-3 h-4 w-full bg-slate-700 rounded"></div>
            <div className="mt-2 h-5 w-full bg-gradient-to-r from-slate-700 to-transparent rounded"></div>
            <div className="mt-2 h-4 w-full bg-gradient-to-r from-slate-700 to-transparent rounded"></div>
        </div>
    )
}