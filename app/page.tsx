"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  LockKeyhole,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const faqs = [
  ["恋爱契约是法律合同吗？", "不是。它是情侣之间的关系确认工具，不替代法律文件，也不改变任何人的法定权利。"],
  ["为什么解约需要双方同意？", "这是产品设定的关系确认机制：任何一方发起解约后，另一方需要确认，避免误触或单方面状态变化。"],
  ["注册一定要验证邮箱吗？", "正式产品建议必须验证邮箱，以减少冒用账号、垃圾账号和找回账号时的风险。"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [auth, setAuth] = useState<"login" | "register" | null>(null);
  const [faq, setFaq] = useState<number | null>(null);
  const [toast, setToast] = useState("");

  const demo = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-500 text-white shadow-lg shadow-rose-200">
              <Heart size={18} fill="currentColor" />
            </span>
            <span>恋爱契约</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-500 md:flex">
            <a href="#how" className="hover:text-rose-500">怎么运作</a>
            <a href="#safety" className="hover:text-rose-500">恋爱安全</a>
            <a href="#faq" className="hover:text-rose-500">常见问题</a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" onClick={() => setAuth("login")}>登录</Button>
            <Button onClick={() => setAuth("register")}>创建契约 <ArrowRight size={16}/></Button>
          </div>

          <button className="md:hidden" onClick={() => setMenu(!menu)} aria-label="菜单">
            {menu ? <X/> : <Menu/>}
          </button>
        </div>
        {menu && (
          <div className="border-t border-rose-100 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#how" onClick={() => setMenu(false)}>怎么运作</a>
              <a href="#safety" onClick={() => setMenu(false)}>恋爱安全</a>
              <a href="#faq" onClick={() => setMenu(false)}>常见问题</a>
              <Button onClick={() => {setMenu(false); setAuth("register")}}>开始使用</Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 shadow-sm">
              <Sparkles size={14}/> 给彼此一份认真而浪漫的约定
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              让喜欢，<br/><span className="bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-clip-text text-transparent">变成一份契约。</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              创建只属于你们两个人的恋爱契约。双方确认后生效；任何一方想结束契约，都需要另一方确认。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="px-6 py-3.5" onClick={() => setAuth("register")}>创建我的恋爱契约 <ArrowRight size={17}/></Button>
              <Button variant="outline" onClick={() => document.getElementById("how")?.scrollIntoView()}>了解怎么运作</Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-500"/> 双方确认</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-500"/> 邮箱验证</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-500"/> 双方解约</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-rose-200/50 to-violet-200/40 blur-3xl"/>
            <Card className="overflow-hidden p-2">
              <div className="rounded-[1.35rem] bg-gradient-to-br from-rose-50 via-white to-violet-50 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-rose-500 shadow-sm">LOVE PACT</span>
                  <span className="text-xs text-slate-400">#LP-8K2F9A</span>
                </div>
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-white text-rose-500 shadow-md shadow-rose-100">
                    <Heart size={27} fill="currentColor"/>
                  </div>
                  <h2 className="text-xl font-bold">我们的恋爱契约</h2>
                  <p className="mt-1 text-xs text-slate-400">双方已确认 · 契约进行中</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Alex", "Michelle"].map((name, i) => (
                    <div key={name} className="rounded-2xl border border-rose-100 bg-white/90 p-4 text-center">
                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-rose-300 to-fuchsia-300 font-bold text-white">{name[0]}</div>
                      <div className="mt-2 font-semibold">{name}</div>
                      <div className="mt-1 text-[11px] text-slate-400">{i === 0 ? "契约发起人" : "契约对象"}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 text-xs font-semibold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"/> 双方已确认
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-[.18em] text-rose-500">Simple & mutual</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">简单，但重要的四步。</h2>
            <p className="mt-3 leading-7 text-slate-500">把关系状态、双方确认和安全提醒放在一个清晰的空间里。</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {([
              [UserRound, "创建账号", "注册并验证邮箱，保护你的账号。"],
              [Heart, "创建契约", "输入对方用户名，发送专属契约邀请。"],
              [Check, "双方确认", "对方接受后，契约正式进入进行中。"],
              [LockKeyhole, "解约双确认", "任何一方申请解约，都需要另一方同意。"],
            ] as const).map(([Icon, title, text], i) => (
              <Card key={title as string} className="p-5">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-rose-50 text-rose-500"><Icon size={20}/></div>
                  <span className="text-xs font-bold text-slate-300">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-bold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text as string}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="safety" className="border-y border-rose-100 bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.18em] text-rose-500">Love Safety</div>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">认真谈恋爱，也要保护好自己。</h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400"><ShieldCheck size={18}/> 安全知识仅供参考</div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["🚩", "警惕“投资恋爱”", "刚认识不久就引导投资、充值、买币或“跟着他赚钱”，尤其要提高警惕。"],
                ["💳", "不要代付和转账", "不要因为“紧急情况”“保证金”“解冻账户”等理由向网络恋人转账。"],
                ["🪪", "独立验证身份", "照片、视频和聊天记录不能单独证明真实身份。涉及金钱前要通过可靠渠道核验。"],
              ].map(([emoji, title, text]) => (
                <Card key={title} className="p-6">
                  <div className="text-3xl">{emoji}</div>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[.18em] text-rose-500">FAQ</div>
            <h2 className="mt-3 text-3xl font-black">你可能会问</h2>
          </div>
          <div className="mt-8 divide-y overflow-hidden rounded-3xl border border-rose-100 bg-white">
            {faqs.map(([q, a], i) => (
              <button key={q} className="w-full p-5 text-left" onClick={() => setFaq(faq === i ? null : i)}>
                <div className="flex items-center justify-between font-semibold">
                  {q}<ChevronDown size={18} className={`transition ${faq === i ? "rotate-180 text-rose-500" : "text-slate-400"}`}/>
                </div>
                {faq === i && <p className="mt-3 pr-5 text-sm leading-7 text-slate-500">{a}</p>}
              </button>
            ))}
          </div>
        </section>

        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 px-7 py-12 text-white sm:px-12 sm:py-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-rose-300"><Heart size={17} fill="currentColor"/> Love Pact</div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">把你们的约定，认真保存下来。</h2>
              <p className="mt-4 leading-7 text-white/60">下一步，你们可以创建专属契约编号、邀请链接，以及属于两个人的契约空间。</p>
              <Button className="mt-7 bg-white text-slate-900 shadow-none hover:bg-rose-50" onClick={() => setAuth("register")}>开始创建 <ArrowRight size={17}/></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-100 py-8 text-center text-xs text-slate-400">
        © 2026 恋爱契约 · Love Pact · 关系确认不等于法律合同
      </footer>

      {auth && <AuthModal mode={auth} onClose={() => setAuth(null)} onDemo={demo}/>}

      {toast && (
        <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-2xl">
          {toast}
        </div>
      )}
    </div>
  );
}

function AuthModal({ mode, onClose, onDemo }: { mode: "login" | "register"; onClose: () => void; onDemo: (s: string) => void }) {
  const [login, setLogin] = useState(mode === "login");
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-5 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <div>
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-rose-50 text-rose-500"><Heart size={20} fill="currentColor"/></div>
            <h2 className="mt-5 text-2xl font-black">{login ? "欢迎回来" : "创建你的账号"}</h2>
            <p className="mt-1 text-sm text-slate-500">{login ? "登录后管理你的恋爱契约。" : "注册后需要验证邮箱。"}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-slate-400 hover:bg-slate-50"><X size={18}/></button>
        </div>
        <div className="mt-6 grid grid-cols-2 rounded-xl bg-rose-50 p-1 text-sm">
          <button className={`rounded-lg py-2 font-semibold ${!login ? "bg-white text-rose-600 shadow-sm" : "text-slate-500"}`} onClick={() => setLogin(false)}>注册</button>
          <button className={`rounded-lg py-2 font-semibold ${login ? "bg-white text-rose-600 shadow-sm" : "text-slate-500"}`} onClick={() => setLogin(true)}>登录</button>
        </div>
        {!login && <Field icon={<UserRound size={16}/>} label="用户名" placeholder="例如：Alex"/>}
        <Field icon={<Mail size={16}/>} label="邮箱" placeholder="you@example.com" type="email"/>
        <Field icon={<LockKeyhole size={16}/>} label="密码" placeholder="至少 8 位" type="password"/>
        <Button className="mt-2 w-full py-3.5" onClick={() => onDemo(login ? "演示登录成功：下一步接入 Supabase" : "演示注册成功：下一步接入邮箱验证")}>
          {login ? "登录" : "注册并验证邮箱"} <ArrowRight size={17}/>
        </Button>
        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] leading-5 text-slate-400">
          <ShieldCheck size={14}/> Demo 模式：当前不会真实创建账号或发送邮件
        </p>
      </div>
    </div>
  );
}

function Field({ icon, label, placeholder, type = "text" }: { icon: React.ReactNode; label: string; placeholder: string; type?: string }) {
  return (
    <label className="mt-4 block">
      <span className="mb-2 flex items-center gap-1.5 text-xs font-bold text-slate-700">{icon}{label}</span>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-rose-100 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-300 focus:border-rose-300 focus:ring-4 focus:ring-rose-50"/>
    </label>
  );
}
