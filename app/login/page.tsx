 "use client";
import Link from "next/link";
import {FormEvent,useState} from "react";
import {createClient} from "@/lib/supabase/client";
import {Button,Input} from "@/components/ui";
import {Heart,MailCheck} from "lucide-react";
export default function LoginPage(){
 const supabase=createClient(); const [mode,setMode]=useState<"password"|"magic">("password"); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [message,setMessage]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
 async function submit(e:FormEvent){e.preventDefault();setLoading(true);setError("");setMessage("");
  if(mode==="password"){const {error}=await supabase.auth.signInWithPassword({email,password});if(error)setError(error.message);else window.location.href="/dashboard";}
  else {const {error}=await supabase.auth.signInWithOtp({email,options:{emailRedirectTo:`${window.location.origin}/auth/callback?next=/dashboard`}});if(error)setError(error.message);else setMessage("登录链接已发送到邮箱，请打开邮件完成登录。");}
  setLoading(false);
 }
 return <main className="grid min-h-screen place-items-center bg-slate-50 px-5 py-10"><div className="w-full max-w-md">
  <Link href="/" className="mx-auto mb-8 flex w-fit items-center gap-2 font-black"><span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-500 text-white"><Heart size={18} fill="currentColor"/></span>Love Pact</Link>
  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><h1 className="text-2xl font-black">欢迎回来</h1><p className="mt-2 text-sm text-slate-500">登录你的 Love Pact 账号。</p>
   <div className="mt-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold"><button onClick={()=>setMode("password")} className={`rounded-lg py-2 ${mode==="password"?"bg-white shadow-sm":"text-slate-500"}`}>密码登录</button><button onClick={()=>setMode("magic")} className={`rounded-lg py-2 ${mode==="magic"?"bg-white shadow-sm":"text-slate-500"}`}>邮箱验证登录</button></div>
   <form onSubmit={submit} className="mt-6 space-y-4"><div><label className="mb-2 block text-sm font-semibold">邮箱</label><Input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com"/></div>
   {mode==="password"&&<div><label className="mb-2 block text-sm font-semibold">密码</label><Input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} placeholder="至少 6 位"/></div>}
   {error&&<p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</p>}{message&&<p className="flex gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700"><MailCheck size={17}/>{message}</p>}
   <Button type="submit" className="w-full" disabled={loading}>{loading?"处理中...":mode==="password"?"登录":"发送登录链接"}</Button></form>
   <p className="mt-6 text-center text-sm text-slate-500">还没有账号？ <Link href="/register" className="font-bold text-rose-500">立即注册</Link></p>
  </div></div></main>
}