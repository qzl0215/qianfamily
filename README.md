# qian-family-site

钱氏文化入口站第一版。当前目标不是做家谱工具，而是先用一个稳定、克制、可预览的静态中文网站，建立“家训、历史、人物”这条叙事主线。

## 技术栈

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- 静态导出部署

## 本地开发

```bash
npm install
npm run dev
```

默认访问：

```text
http://127.0.0.1:3000
```

## 构建静态产物

```bash
npm run build
```

构建后产物输出到：

```text
out/
```

## 当前目录结构

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── topics/[slug]/page.tsx
├── components/
│   ├── sections/
│   └── ui/
├── deploy/
│   └── nginx.qianfamily.online.conf
├── lib/
│   ├── site-meta.ts
│   └── topic-routes.ts
├── public/
│   └── textures/paper-noise.svg
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── next-env.d.ts
```

## 部署说明

线上继续使用 Nginx 托管静态文件，根目录指向构建产物：

```text
/usr/share/nginx/html/qianfamily.online/out
```

服务器是参考 `ranking_app_parallel` 的现有机器：

```text
43.160.239.62
```

推荐初始化步骤：

```bash
sudo mkdir -p /usr/share/nginx/html/qianfamily.online/out
sudo dnf install -y nginx certbot
sudo cp deploy/nginx.qianfamily.online.conf /etc/nginx/conf.d/qianfamily.online.conf
sudo nginx -t
sudo systemctl reload nginx
```

第一次申请证书前，先把 80 端口配置成仅 HTTP 可访问版本，或者暂时注释掉 `443 ssl` 这一段，再执行：

```bash
sudo certbot certonly --webroot -w /usr/share/nginx/html/qianfamily.online/out -d qianfamily.online -d www.qianfamily.online --agree-tos --register-unsafely-without-email --non-interactive
sudo nginx -t
sudo systemctl reload nginx
```

手工部署当前版本：

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

## GitHub 自动部署

仓库已包含 `main` 分支自动部署工作流：

```text
.github/workflows/deploy.yml
```

需要在 GitHub 仓库里配置这些 Secrets：

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

之后每次 push 到 `main`，GitHub Actions 会自动：

1. `npm ci`
2. `npm run build`
3. `rsync out/` 到服务器
4. 同步 Nginx 配置并 reload
5. 对 `https://qianfamily.online` 和 `https://www.qianfamily.online` 做健康检查

## 当前范围

- 已实现：首页 `/`
- 已实现：未来专题统一占位页 `/topics/[slug]/`
- 未实现：登录、数据库、后台、家谱树、评论、检索
