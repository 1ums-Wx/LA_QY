import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Button({className,variant="default",...props}:ButtonHTMLAttributes<HTMLButtonElement>&{variant?:"default"|"outline"|"ghost"}){
 return <button className={cn("inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-50",
 variant==="default"&&"bg-slate-950 text-white hover:bg-slate-800",
 variant==="outline"&&"border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
 variant==="ghost"&&"text-slate-600 hover:bg-slate-100",className)} {...props}/>
}
export function Input({className,...props}:InputHTMLAttributes<HTMLInputElement>){
 return <input className={cn("h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100",className)} {...props}/>
}