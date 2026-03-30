# 🤖 Working with AI

> 一个关于开发者如何与 AI 协作的交互式演讲网站 — **整个项目由 Claude Code 通过 17 轮 Review 制成**，这本身就是最好的演示。

---

## [English](#english) | 中文

## 📖 项目介绍

「Working with AI」是一套面向开发者的实践分享幻灯片，记录了深度使用 AI 之后在工具选择、工作流程、思维方式和日常习惯上的真实感受与思考。它不是 best practice，而是个人的实践经验 — 因为 AI 进化速度太快，所有经验都只是暂时的，需要自己和 AI 不断磨合探索。

这个项目有一个独特的「元」属性：**它本身就是 AI 协作的产物**。从内容策划、视觉设计到代码实现，全部由 Claude Code 完成，经过 17 轮 Review 迭代（所有 Review 记录完整保留在 `journey/` 目录中），使用 Vite+ (VoidZero) 构建，零框架依赖。

### 🎯 核心主题（21 张幻灯片）

| 编号 | 主题 | 简介 |
|------|------|------|
| 0 | **标题页** | Working/Collaborating/Playing/Creating/Thinking with AI — 标题轮播动画 |
| 1 | **Tab → Agent** | AI 编程工具的演化路径：从行内补全到自主 Agent |
| 2 | **自动驾驶等级** | AI 编程的 L0–L5 自主等级划分（类比自动驾驶） |
| 3 | **knowledge.jpeg** | LLM 是人类知识的有损压缩 — 带有可拖动的压缩率模拟 Demo |
| 4 | **工具选择** | Codex（写代码）、Claude Code（创意工作）、ChatGPT（Research）、Playwright（MCP） |
| 5 | **关于 Skills** | Skills 如同棋谱 vs AlphaZero — 什么时候有用，什么时候可能是瓶颈 |
| 6 | **CLI vs MCP** | CLI（内环开发）与 MCP（外环集成）的协作关系 |
| 7 | **Workflow** | Research → Plan → Implement ⇄ Review 的工作循环 + journey/ 目录结构 |
| 8 | **Research 双模式** | Context-free（ChatGPT Deep Research）+ Context-rich（Claude Code / Codex） |
| 9 | **Prompt 经验** | 5 条个人 Prompt 原则：第一性原理、从根源解决、保持中立、先读再改、信任 AI |
| 10–13 | **Beyond Vibe Coding** | AI 不只写代码 — 设计协作、会议准备、辅助沟通的实战案例 |
| 14 | **AI 设计品味** | 交互式对比 4 种设计变体（Claude Code / OpenAI Skill / Anthropic Skill / Taste Skill） |
| 15–17 | **一些变化** | 信息获取方式的转变（Google ↓95%）、默认不信任「快」 |
| 18 | **AI 在生活中** | Coding Agent = 通用 Agent：整理相册、刷新简历、生成赛历... |
| 19 | **Emoji 猜影视** | AI 出题的 emoji 影视作品猜谜小游戏，支持复制 Prompt 到 ChatGPT |
| 20 | **Q&A** | 结束页，附项目技术栈说明 |

### ✨ 交互特性

- **渐进式 Fragment 揭示**：每张幻灯片支持多步 `data-f` 动画，逐步展示内容
- **Hash 路由导航**：通过 URL Hash 直达指定幻灯片和 Fragment（如 `#3.2`）
- **总览模式**：按 ESC 进入缩略图网格，快速定位任意幻灯片
- **JPEG 压缩模拟**：Canvas 驱动的质量滑块，直观模拟不同模型「压缩率」对知识保真度的影响
- **Emoji 影视猜谜**：6 部影视作品的 emoji 提示，可揭晓答案、自动下一题
- **AI 品味对比**：iframe 切换展示 4 种 AI 生成的设计风格变体
- **外部链接内嵌**：Showcase 卡片点击后在 iframe overlay 中预览外部网站
- **移动端适配**：底部固定导航栏 + 触摸友好的交互体验
- **FOUC 防护**：双重 `requestAnimationFrame` 确保初始状态完全就绪后再显示

### 🛠 技术栈

| 技术 | 说明 |
|------|------|
| [Vite+](https://vite-plus.dev/) (VoidZero) | 统一前端工具链，替代原生 Vite |
| TypeScript 6.0 | 严格模式 + ES2023 target |
| 原生 CSS | CSS 变量驱动的暗色主题，渐进式动画系统 |
| [@lobehub/icons](https://github.com/lobehub/lobe-icons) | 工具图标集（Claude Code、Codex、Cursor 等） |
| pnpm 10.33 | 包管理器 |
| Renovate | 自动依赖更新 |

### 📁 项目结构

```
working-with-ai/
├── index.html              # 中文版幻灯片（主页）
├── en/index.html           # 英文版幻灯片
├── src/
│   ├── main.ts             # 幻灯片引擎 + 所有交互逻辑
│   └── style.css           # 完整样式（暗色主题 + 动画 + 响应式）
├── public/
│   ├── ai-taste.html       # AI 品味对比：默认 AI 设计变体
│   ├── no-ai-taste-2.html  # OpenAI Skill 设计变体
│   ├── no-ai-taste-3.html  # Anthropic Skill 设计变体
│   ├── no-ai-taste-4.html  # Taste Skill 设计变体
│   ├── icons/              # 工具图标（来自 lobehub/icons）
│   ├── moments-*.jpg       # 演示截图（中/英双语版）
│   └── favicon.svg         # 网站图标
├── journey/                # 📝 完整开发过程记录
│   ├── IDEAS.md            # 初始头脑风暴（18 个主题）
│   ├── REVIEW_1~17.md      # 17 轮 Review 迭代记录
│   ├── frontend-design.md  # Anthropic frontend-design skill 参考
│   ├── frontend-skill.md   # OpenAI frontend-skill 参考
│   ├── taste-skill.md      # Taste skill 参考
│   └── mcp-vs-cli.md       # MCP vs CLI 深度研究报告
├── AGENTS.md               # Vite+ Agent 开发指南
├── renovate.json           # Renovate 依赖更新配置
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 使用方法

### 在线访问

直接打开对应页面即可浏览幻灯片：

- **中文版**：访问根路径 `/` 或 `index.html`
- **英文版**：访问 `/en/` 或 `en/index.html`

### 键盘快捷键

| 按键 | 功能 |
|------|------|
| `←` `→` | 翻页（上一张 / 下一张） |
| `↑` `↓` | 步进（上一步 / 下一步 Fragment） |
| `ESC` | 切换总览模式 |
| `Space` / `PageDown` | 下一张 |
| `PageUp` | 上一张 |

### 触摸设备

底部固定导航栏提供 5 个按钮：◀ 上一页、▲ 上一步、⊞ 总览、▼ 下一步、▶ 下一页。

### URL 路由

支持通过 URL Hash 直接跳转到指定幻灯片和 Fragment：

- `#5` → 跳转到第 5 张幻灯片（初始状态）
- `#5.3` → 跳转到第 5 张幻灯片的第 3 步 Fragment
- `#5.` → 跳转到第 5 张幻灯片并展示所有 Fragment

## 💻 本地开发

### 环境要求

- **Node.js**：建议 v20+
- **包管理器**：pnpm 10.33+（通过 Vite+ 自动管理）
- **Vite+ CLI**：`vp` 全局命令

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/88lin/working-with-ai.git
cd working-with-ai

# 2. 安装依赖（使用 Vite+ 的 vp 命令）
vp install

# 3. 启动开发服务器
vp dev
```

开发服务器启动后，默认会在本地提供两个页面的访问地址：

- 中文版：`http://localhost:5173/`
- 英文版：`http://localhost:5173/en/`

### 常用命令

```bash
# 开发
vp dev          # 启动开发服务器（支持 HMR 热更新）
vp check        # 运行格式化 + Lint + TypeScript 类型检查
vp test         # 运行测试

# 构建
vp build        # 构建生产版本（输出到 dist/）
vp preview      # 预览生产构建结果

# 依赖管理
vp add <pkg>    # 添加依赖包
vp remove <pkg> # 移除依赖包
vp update       # 更新所有依赖
```

> **注意**：本项目使用 Vite+ 统一工具链，不要直接使用 pnpm/npm/yarn 命令，所有操作请通过 `vp` 命令进行。

## 🌐 部署

项目构建后生成纯静态文件，可以部署到任何静态托管服务。

### 构建生产版本

```bash
vp build
```

构建产物输出到 `dist/` 目录，包含两个入口：

```
dist/
├── index.html          # 中文版
├── en/
│   └── index.html      # 英文版
├── assets/             # JS/CSS 资源
└── ...                 # 其他静态文件
```

### 部署到 Vercel / Netlify / Cloudflare Pages

这些平台都支持开箱即用的静态站点部署：

1. 连接你的 GitHub 仓库
2. 构建命令设置为 `vp build`（或确保 Vite+ 已安装）
3. 输出目录设置为 `dist`
4. 部署完成

### 部署到 GitHub Pages

```bash
# 构建
vp build

# 使用 gh-pages 工具部署
npx gh-pages -d dist
```

或者使用 GitHub Actions 自动部署 — 在仓库设置中开启 Pages，选择 GitHub Actions 模式，添加以下 workflow：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

---

## 🔍 关于 journey/ 目录

`journey/` 目录完整记录了这个项目从构思到成型的全过程，是项目最有价值的「元」内容之一：

- **IDEAS.md**：最初的 18 个主题头脑风暴
- **REVIEW_1.md ~ REVIEW_17.md**：与 Claude Code 的 17 轮 Review 迭代记录，涵盖内容重构、交互设计、移动端适配、性能优化等方方面面
- **mcp-vs-cli.md**：对 MCP vs CLI 的深度技术对比研究
- **frontend-design.md / frontend-skill.md / taste-skill.md**：AI 设计 Skill 的调研参考

这些记录真实展现了使用 AI 进行创意开发的全过程 — 包括方向调整、设计取舍和反复打磨。

## 📄 License

MIT

---

---

# 🤖 Working with AI

> An interactive presentation website about how developers collaborate with AI — **this entire project was built by Claude Code through 17 rounds of review**, which is itself the best demo.

---

## 中文 | [English](#english-1)

## 📖 About

「Working with AI」is a set of interactive presentation slides for developers, sharing real experiences and reflections on tool choices, workflows, mindsets, and daily habits after deeply integrating AI into the development process. It's not about best practices — it's about personal exploration. Because AI evolves so fast, all experiences are temporary, and everything requires your own experimentation and collaboration with AI.

This project has a unique meta-property: **it is itself a product of AI collaboration**. From content planning and visual design to code implementation, everything was done by Claude Code through 17 rounds of review iterations (all review records are preserved in the `journey/` directory). Built with Vite+ (VoidZero) and zero framework dependencies.

### 🎯 Slide Topics (21 Slides)

| # | Topic | Summary |
|---|-------|---------|
| 0 | **Title** | Working/Collaborating/Playing/Creating/Thinking with AI — title carousel animation |
| 1 | **Tab → Agent** | The evolution of AI coding tools: from inline autocomplete to autonomous agents |
| 2 | **Autonomy Levels** | L0–L5 autonomy levels for AI coding (analogous to self-driving) |
| 3 | **knowledge.jpeg** | LLMs as lossy compression of human knowledge — with an interactive compression simulator |
| 4 | **Tool Choices** | Codex (coding), Claude Code (creative work), ChatGPT (research), Playwright (MCP) |
| 5 | **About Skills** | Skills are like opening books vs AlphaZero — when useful, when they become bottlenecks |
| 6 | **CLI vs MCP** | CLI (inner dev loop) and MCP (outer integration loop) working together |
| 7 | **Workflow** | Research → Plan → Implement ⇄ Review loop + journey/ directory structure |
| 8 | **Research Two Modes** | Context-free (ChatGPT Deep Research) + Context-rich (Claude Code / Codex) |
| 9 | **Prompt Tips** | 5 personal prompt principles: first principles, fix at root, stay neutral, read first, trust AI |
| 10–13 | **Beyond Vibe Coding** | AI doesn't just write code — real cases in design collaboration, meeting prep, and communication |
| 14 | **AI for Design** | Interactive comparison of 4 design variants (Claude Code / OpenAI Skill / Anthropic Skill / Taste Skill) |
| 15–17 | **Some Changes** | Shifts in information retrieval (Google ↓95%), default distrust of "fast" |
| 18 | **AI in Daily Life** | Coding Agent = General-purpose Agent: photo organizing, resume refresh, schedule generation... |
| 19 | **Emoji Movie Quiz** | AI-crafted emoji movie guessing game with ChatGPT prompt sharing |
| 20 | **Q&A** | Closing page with project tech stack details |

### ✨ Interactive Features

- **Progressive Fragment Reveals**: Each slide supports multi-step `data-f` animations for staged content delivery
- **Hash-based Navigation**: Jump directly to any slide and fragment via URL hash (e.g., `#3.2`)
- **Overview Mode**: Press ESC to enter a thumbnail grid for quick slide navigation
- **JPEG Compression Simulator**: Canvas-driven quality slider simulating how different model "compression rates" affect knowledge fidelity
- **Emoji Movie Quiz**: 6 movies with emoji hints — reveal answers, auto-advance, copy prompt to ChatGPT
- **AI Taste Comparison**: Iframe-based toggle showing 4 AI-generated design style variants
- **External Link Embeds**: Showcase cards open external sites in an iframe overlay
- **Mobile Responsive**: Fixed bottom navigation bar with touch-friendly interactions
- **FOUC Prevention**: Double `requestAnimationFrame` ensures initial state is fully painted before revealing

### 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| [Vite+](https://vite-plus.dev/) (VoidZero) | Unified frontend toolchain replacing raw Vite |
| TypeScript 6.0 | Strict mode + ES2023 target |
| Vanilla CSS | CSS variable-driven dark theme with progressive animation system |
| [@lobehub/icons](https://github.com/lobehub/lobe-icons) | Tool icon pack (Claude Code, Codex, Cursor, etc.) |
| pnpm 10.33 | Package manager |
| Renovate | Automated dependency updates |

### 📁 Project Structure

```
working-with-ai/
├── index.html              # Chinese slides (main page)
├── en/index.html           # English slides
├── src/
│   ├── main.ts             # Slide engine + all interactive logic
│   └── style.css           # Complete styles (dark theme + animations + responsive)
├── public/
│   ├── ai-taste.html       # AI taste comparison: default AI design variant
│   ├── no-ai-taste-2.html  # OpenAI Skill design variant
│   ├── no-ai-taste-3.html  # Anthropic Skill design variant
│   ├── no-ai-taste-4.html  # Taste Skill design variant
│   ├── icons/              # Tool icons (from lobehub/icons)
│   ├── moments-*.jpg       # Demo screenshots (Chinese/English versions)
│   └── favicon.svg         # Site favicon
├── journey/                # 📝 Complete development process records
│   ├── IDEAS.md            # Initial brainstorm (18 topics)
│   ├── REVIEW_1~17.md      # 17 rounds of review iteration records
│   ├── frontend-design.md  # Anthropic frontend-design skill reference
│   ├── frontend-skill.md   # OpenAI frontend-skill reference
│   ├── taste-skill.md      # Taste skill reference
│   └── mcp-vs-cli.md       # MCP vs CLI deep-dive research report
├── AGENTS.md               # Vite+ Agent development guide
├── renovate.json           # Renovate dependency update config
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Usage

### Online Access

Simply open the corresponding page to browse the slides:

- **Chinese version**: Root path `/` or `index.html`
- **English version**: `/en/` or `en/index.html`

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` | Previous / Next slide |
| `↑` `↓` | Previous / Next fragment step |
| `ESC` | Toggle overview mode |
| `Space` / `PageDown` | Next slide |
| `PageUp` | Previous slide |

### Touch Devices

A fixed bottom navigation bar provides 5 buttons: ◀ Previous, ▲ Step Back, ⊞ Overview, ▼ Step Forward, ▶ Next.

### URL Routing

Navigate directly to specific slides and fragments via URL hash:

- `#5` → Jump to slide 5 (initial state)
- `#5.3` → Jump to slide 5, fragment 3
- `#5.` → Jump to slide 5 with all fragments revealed

## 💻 Local Development

### Requirements

- **Node.js**: v20+ recommended
- **Package manager**: pnpm 10.33+ (managed automatically via Vite+)
- **Vite+ CLI**: `vp` global command

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/88lin/working-with-ai.git
cd working-with-ai

# 2. Install dependencies (using Vite+ vp command)
vp install

# 3. Start the development server
vp dev
```

The dev server provides two pages:

- Chinese: `http://localhost:5173/`
- English: `http://localhost:5173/en/`

### Common Commands

```bash
# Development
vp dev          # Start dev server (with HMR)
vp check        # Run format + lint + TypeScript type checking
vp test         # Run tests

# Build
vp build        # Build for production (outputs to dist/)
vp preview      # Preview production build

# Dependency management
vp add <pkg>    # Add a package
vp remove <pkg> # Remove a package
vp update       # Update all dependencies
```

> **Note**: This project uses the Vite+ unified toolchain. Do not use pnpm/npm/yarn directly — use `vp` commands for all operations.

## 🌐 Deployment

The project builds to pure static files, deployable to any static hosting service.

### Build for Production

```bash
vp build
```

Build output goes to `dist/` with two entry points:

```
dist/
├── index.html          # Chinese version
├── en/
│   └── index.html      # English version
├── assets/             # JS/CSS assets
└── ...                 # Other static files
```

### Deploy to Vercel / Netlify / Cloudflare Pages

These platforms support out-of-the-box static site deployment:

1. Connect your GitHub repository
2. Set build command to `vp build` (or ensure Vite+ is installed)
3. Set output directory to `dist`
4. Deploy

### Deploy to GitHub Pages

```bash
# Build
vp build

# Deploy using gh-pages
npx gh-pages -d dist
```

Or set up automatic deployment via GitHub Actions — enable Pages in repo settings (GitHub Actions mode) and add this workflow:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

---

## 🔍 About the journey/ Directory

The `journey/` directory contains the complete record of this project from concept to completion — one of the most valuable "meta" contents of this project:

- **IDEAS.md**: The original brainstorm of 18 slide topics
- **REVIEW_1.md ~ REVIEW_17.md**: 17 rounds of review iteration records with Claude Code, covering content restructuring, interaction design, mobile adaptation, performance optimization, and more
- **mcp-vs-cli.md**: An in-depth technical comparison of MCP vs CLI
- **frontend-design.md / frontend-skill.md / taste-skill.md**: Research references for AI design skills

These records authentically showcase the full process of creative development with AI — including direction changes, design trade-offs, and iterative refinement.

## 📄 License

MIT
