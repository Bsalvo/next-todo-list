"use client"

export default function Loading(){
    return (
        <>
            <div className="animate-pulse flex flex-col gap-2">
                <div className="h-6 w-1/4 bg-slate-700 rounded"></div>
                <div className="mt-4 h-8 w-full bg-slate-700 rounded"></div>
                <div className="flex justify-end gap-2">
                    <div className="h-8 w-1/12 bg-slate-700 rounded"></div>
                    <div className="h-8 w-1/12 bg-slate-700 rounded"></div>
                </div>
            </div>
        </>
    )
}