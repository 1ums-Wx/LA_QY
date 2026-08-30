import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export function Button({ className, variant = "default", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-rose-300 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-rose-500 text-white shadow-lg shadow-rose-200 hover:bg-rose-600",
        variant === "outline" && "border border-rose-100 bg-white text-slate-800 hover:bg-rose-50",
        variant === "ghost" && "text-slate-600 hover:bg-rose-50 hover:text-rose-600",
        className
      )}
      {...props}
    />
  );
}