import type { Config } from "tailwindcss";
const config: Config = {
  darkMode:["class"],
  content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme:{extend:{colors:{
    background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",
    card:"hsl(var(--card))","card-foreground":"hsl(var(--card-foreground))",
    primary:"hsl(var(--primary))","primary-foreground":"hsl(var(--primary-foreground))",
    muted:"hsl(var(--muted))","muted-foreground":"hsl(var(--muted-foreground))",
    border:"hsl(var(--border))"
  },borderRadius:{xl:"1rem"},boxShadow:{soft:"0 20px 60px rgba(15,23,42,.08)"}}},
  plugins:[]
};
export default config;