# qian-family-site

`qianfamily.online` 当前是一个静态中文宗亲门户站，目标是先把“文化认同 -> 谱系归属 -> 宗亲连接 -> 参与行动 -> 内容回流”这条主逻辑站稳，再逐步接入登录、提交、报名与订单等真实能力。

## 当前已实现内容

- 门户首页：`/`
- 家谱中心：`/genealogy/`
- 文化传承：`/heritage/`
- 祭祖活动：`/events/`
- 宣传礼品：`/gifts/`
- 兼容专题页：`/topics/jiaxun/`、`/topics/wuyue/`、`/topics/figures/`

当前还没有这些能力：

- 登录
- 真实检索
- 评论
- 数据库
- 后台审核
- 小程序
- 真实提交表单
- 真实订单支付

## 技术栈

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- 静态导出部署
- Nginx 托管静态产物

## 开发与验证

安装依赖：

```bash
npm install
```

启动本地开发：

```bash
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:3000
```

当前最小验证闭环：

```bash
npm run typecheck
npm run build
```

说明：

1. 这是静态导出站点，`npm run build` 是上线前最关键的验证。
2. 当前仓库还没有正式接入 lint / test 流程，因此不要把现状描述为“全量自动化校验已完善”。
3. 构建成功后，静态产物输出到 `out/`。

## 当前目录结构

```text
.
├── AGENTS.md
├── README.md
├── app/
│   ├── events/**
│   ├── genealogy/**
│   ├── gifts/**
│   ├── heritage/**
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── materials/
│   └── topics/[slug]/page.tsx
├── components/
│   ├── portal/
│   ├── sections/
│   ├── topics/
│   └── ui/
├── deploy/
│   └── nginx.qianfamily.online.conf
├── docs/
│   ├── WORKFLOW_AUTOPILOT.md
│   └── collab/CODEX_TIPS.md
├── lib/
│   ├── portal-content.ts
│   ├── site-meta.ts
│   ├── topic-routes.ts
│   └── *-content.ts
├── output/
├── scripts/
├── .githooks/
├── .github/
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

目录职责：

- `app/`：门户各频道与页面路由入口
- `components/portal/`：门户首页和频道页核心模块
- `components/sections/`：首页迭代中保留的 section 组件
- `components/topics/`：兼容专题页模块
- `components/ui/`：基础 UI 组件
- `lib/portal-content.ts`：门户导航、频道卡片与主文案数据
- `lib/*-content.ts`：专题内容数据与文案
- `lib/topic-routes.ts`：专题路由与摘要元数据
- `deploy/`：Nginx 配置
- `docs/`：协作、工作流和长期项目记忆
- `output/`：本地截图、预览结果与临时检查产物，不是正式源码目录

## 协作约定

新线程或新协作者进入仓库后，先读根目录 `AGENTS.md`，再开始动代码。

`AGENTS.md` 负责约束：

- 项目定位
- 沟通格式
- Git 与分支协作方式
- 当前代码泳道
- 对外契约边界
- 最小验证规则
- 小程序结构升级边界

如果任务会改变门户信息架构、路由、部署模型或未来工程结构，不要默认拍板，先在任务说明里显式确认。

## 部署说明

当前线上继续使用 Nginx 托管静态文件，根目录指向构建产物：

```text
/usr/share/nginx/html/qianfamily.online/out
```

服务器沿用现有机器：

```text
43.160.239.62
```

服务器初始化参考：

```bash
sudo mkdir -p /usr/share/nginx/html/qianfamily.online/out
sudo dnf install -y nginx certbot
sudo cp deploy/nginx.qianfamily.online.conf /etc/nginx/conf.d/qianfamily.online.conf
sudo nginx -t
sudo systemctl reload nginx
```

首次证书申请前，可先保留 HTTP 可访问版本，再执行：

```bash
sudo certbot certonly --webroot -w /usr/share/nginx/html/qianfamily.online/out -d qianfamily.online -d www.qianfamily.online --agree-tos --register-unsafely-without-email --non-interactive
sudo nginx -t
sudo systemctl reload nginx
```

手工部署：

```bash
npm ci
npm run build
rsync -az --delete ./out/ root@43.160.239.62:/usr/share/nginx/html/qianfamily.online/out/
```

线上域名策略：

```text
https://qianfamily.online      主站内容域名
https://www.qianfamily.online  301 跳转到主站
```

## 发布模型

当前只有生产发布，没有 preview 环境。

现有工作流：

- `.github/workflows/deploy.yml`：`main` 推送后的生产部署
- `.github/workflows/quality-gate.yml`：PR 到 `dev` 或 `main` 时的最小质量门禁

需要在 GitHub 仓库配置这些 Secrets：

1. `DEPLOY_SSH_HOST`
2. `DEPLOY_SSH_USER`
3. `DEPLOY_SSH_PRIVATE_KEY`
4. `DEPLOY_REMOTE_BASE`
5. `DEPLOY_REMOTE_PORT`

建议值：

```text
DEPLOY_SSH_HOST=43.160.239.62
DEPLOY_SSH_USER=root
DEPLOY_REMOTE_BASE=/usr/share/nginx/html/qianfamily.online
DEPLOY_REMOTE_PORT=22
```

当前自动发布行为是：

1. push 到 `main`
2. GitHub Actions 执行 `npm ci`
3. GitHub Actions 执行 `npm run build`
4. 同步 `out/` 到服务器
5. 同步 Nginx 配置并 reload
6. 对 `https://qianfamily.online` 和 `https://www.qianfamily.online` 做健康检查

## 轻量工作流

初始化一次：

```bash
export AGENT_ID=<your-agent-id>
bash scripts/setup_agent_workflow.sh
```

日常固定流程：

```bash
bash scripts/task_start.sh <topic>
bash scripts/task_check.sh
bash scripts/task_commit.sh "中文备注"
bash scripts/task_pr.sh
```

说明：

1. 目标分支策略是 `dev` 集成、`main` 发布。
2. 当前远端若还没有 `dev`，脚本会临时回退到 `main` 作为 base，并给出提示。
3. 等 `dev` 正式建立后，工作流会自然切换到 `dev -> main` 的结构，不需要再重写脚本。

## 未来演进

未来如果真实启动小程序，再把仓库升级为双端结构，例如：

```text
apps/web
apps/miniapp
packages/shared
```

在那之前，仓库继续保持单体 Next.js 结构。不要为了“未来可能会做小程序”而提前引入空目录、空脚手架或复杂工程层级。
