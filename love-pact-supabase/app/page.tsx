import Link from "next/link";
import {ArrowRight,Check,Heart,LockKeyhole,ShieldCheck,Sparkles} from "lucide-react";
const steps=[["01","创建账号","注册并验证邮箱，建立属于你的身份。"],["02","建立契约","输入另一半的用户名，发送专属契约邀请。"],["03","双方确认","对方接受后，契约正式生效并记录时间。"],["04","双确认解约","任何一方申请解约，都必须经过另一方同意。"]];
export default function Home(){
 return <main className="min-h-screen overflow-hidden">
  <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
   <Link href="/" className="flex items-center gap-2 font-black"><span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-500 text-white"><Heart size={18} fill="currentColor"/></span>Love Pact</Link>
   <div className="flex gap-2"><Link href="/login"><button className="h-10 rounded-xl px-4 text-sm font-semibold text-slate-600 hover:bg-white">登录</button></Link><Link href="/register"><button className="h-10 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white">开始使用</button></Link></div>
  </header>
  <section className="grid-bg"><div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:pt-24">
   <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 shadow-sm"><Sparkles size={14}/>Relationship, with boundaries.</div>
    <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">让承诺有边界，<span className="text-rose-500">让关系更坦诚。</span></h1>
    <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 md:text-lg">Love Pact 是一个情侣关系契约工具。双方确认后建立契约，一方想结束时，也必须获得另一方的确认。</p>
    <div className="mt-8 flex flex-wrap gap-3"><Link href="/register"><button className="inline-flex h-12 items-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-bold text-white">创建我的契约 <ArrowRight size={16}/></button></Link><a href="#safety"><button className="h-12 rounded-xl border border-slate-200 bg-white px-6 text-sm font-bold">恋爱防骗科普</button></a></div>
    <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500"><span className="flex items-center gap-2"><ShieldCheck size={17} className="text-emerald-500"/>邮箱验证</span><span className="flex items-center gap-2"><LockKeyhole size={17}/>RLS 数据权限</span></div>
   </div>
   <div className="relative"><div className="absolute -inset-10 rounded-full bg-rose-100/60 blur-3xl"/><div className="relative rounded-3xl border border-white bg-white p-6 shadow-soft">
    <div className="flex items-center justify-between border-b border-slate-100 pb-5"><div><p className="text-xs font-semibold text-slate-400">LOVE PACT</p><p className="mt-1 text-lg font-black">我们的契约</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">ACTIVE</span></div>
    <div className="my-8 flex items-center justify-center gap-5"><div className="text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-xl font-black">A</div><p className="mt-2 text-sm font-bold">Alex</p></div><Heart size={22} className="text-rose-500" fill="currentColor"/><div className="text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-rose-100 text-xl font-black text-rose-600">M</div><p className="mt-2 text-sm font-bold">Mia</p></div></div>
    <div className="rounded-2xl bg-slate-50 p-4"><div className="flex items-center gap-3"><Check size={18} className="text-emerald-500"/><span className="text-sm font-semibold">双方已确认关系契约</span></div><p className="mt-2 text-xs leading-5 text-slate-400">如果任何一方申请解约，另一方会收到确认请求。</p></div>
   </div></div>
  </div></section>
  <section className="mx-auto max-w-6xl px-5 py-20"><p className="text-sm font-bold text-rose-500">HOW IT WORKS</p><h2 className="mt-2 text-3xl font-black">四步建立一份清晰的承诺</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{steps.map(([n,t,d])=><div key={n} className="rounded-2xl border border-slate-200 bg-white p-5"><span className="text-xs font-black text-slate-300">{n}</span><h3 className="mt-8 font-black">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{d}</p></div>)}</div></section>
  <section id="safety" className="bg-slate-950 text-white"><div className="mx-auto max-w-6xl px-5 py-20"><p className="text-sm font-bold text-rose-300">SAFETY</p><h2 className="mt-2 text-3xl font-black">谈恋爱，也要保护自己。</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[["不要因为“恋爱”转账","感情不能成为借钱、投资、充值的理由。"],["警惕无法验证的身份","照片、语音、视频都不能单独证明真实身份。"],["遇到高收益先停下来","恋爱关系中的投资诱导，是高风险诈骗信号。"]].map(([t,d])=><div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5"><ShieldCheck className="text-rose-300" size={20}/><h3 className="mt-5 font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{d}</p></div>)}</div></div></section>
 </main>
}