# Love Pact · Supabase 版

已经接入 Supabase Auth / Database，适合直接部署到 Vercel。

## 环境变量
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

## Supabase
保持 Email provider 开启、Confirm email 开启。
URL Configuration:
- Site URL: https://love-pact.vercel.app
- Redirect: https://love-pact.vercel.app/**
- Local: http://localhost:3000/**

## 注意
此版本的“邮箱验证登录”使用 Supabase Magic Link。
如果要改成 6 位数字 OTP，需要在 Supabase Email Template 中配置 OTP 模板。

数据库依赖你之前已经执行成功的 SQL：profiles、contracts、contract_members、dissolution_requests、safety_articles，以及相关 RPC 函数。
