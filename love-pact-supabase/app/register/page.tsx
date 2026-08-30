 "use client";
import Link from "next/link";
import {FormEvent,useState} from "react";
import {createClient} from "@/lib/supabase/client";
import {Button,Input} from "@/components/ui";
import {Heart,MailCheck} from "lucide-react";
export default function RegisterPage(){
 const supabase=createClient(); const [username,setUsername]=useState(""); const [displayName,setDisplayName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [message,setMessage]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
 async function submit(e:FormEvent){e.preventDefault();setLoading(true);setError("");setMessage("");const clean=username.trim().toLowerCase();
  if(!/^[a-z0-9_]{3,20}$/.test(clean)){setError("用户名只能包含英文小写字母、数字和下划线，长度 3-20。");setLoading(false);return;}
  const {error}=await supabase.auth.signUp({email,password,options:{emailRedirectTo:`${window.location.origin}/auth/callback?next=/dashboard`,data:{username:clean,display_name:displayName.trim()||clean}}});
  if(error)setError(error.message);else setMessage("注册成功！请打开邮箱，点击验证链接完成账号验证。");setLoading(false);
 }
 return <main className="grid min-h-screen place-items-center bg-slate-50 px-5 py-10"><div className="w-full max-w-md">
  <Link href="/" className="mx-auto mb-8 flex w-fit items-center gap-2 font-black"><span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-500 text-white"><Heart size={18} fill="currentColor"/></span>Love Pact</Link>
  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><h1 className="text-2xl font-black">创建账号</h1><p className="mt-2 text-sm text-slate-500">先验证邮箱，再开始建立你的恋爱契约。</p>
   <form onSubmit={submit} className="mt-6 space-y-4">
    <div><label className="mb-2 block text-sm font-semibold">用户名</label><Input value={username} onChange={e=>setUsername(e.target.value)} required placeholder="例如 alex_01"/></div>
    <div><label className="mb-2 block text-sm font-semibold">显示名称</label><Input value={displayName} onChange={e=>setDisplayName(e.target.value)} placeholder="例如 Alex"/></div>
    <div><label className="mb-2 block text-sm font-semibold">邮箱</label><Input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com"/></div>
    <div><label className="mb-2 block text-sm font-semibold">密码</label><Input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} placeholder="至少 6 位"/></div>
    {error&&<p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</p>}{message&&<p className="flex gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700"><MailCheck size={17}/>{message}</p>}
    <Button type="submit" className="w-full" disabled={loading}>{loading?"创建中...":"注册并验证邮箱"}</Button>
   </form>
   <p className="mt-6 text-center text-sm text-slate-500">已有账号？ <Link href="/login" className="font-bold text-rose-500">去登录</Link></p>
  </div></div></main>
}