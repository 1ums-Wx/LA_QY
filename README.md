# Love Pact · 恋爱契约

Next.js + Tailwind CSS + shadcn/ui 风格的单页产品原型。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## Vercel

GitHub 仓库根目录必须直接包含：

- `app/`
- `components/`
- `lib/`
- `package.json`
- `next.config.ts`
- `tsconfig.json`

Vercel Framework Preset 选择 **Next.js**，Root Directory 保持仓库根目录。

## 当前状态

这是前端产品原型，认证按钮目前为 Demo 行为。

下一阶段可以接入：
- Supabase Auth：注册、登录、邮箱验证、邮箱验证码登录
- Supabase Database：用户、情侣契约、邀请、解约申请
- Resend：事务邮件
- Middleware：登录保护
- 唯一契约编号和邀请链接
