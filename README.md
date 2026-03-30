<p align="center">
  <img src="public/favicon.svg" alt="Working with AI" width="80" height="80" />
</p>

<h1 align="center">🤖 Working with AI</h1>

<p align="center">
  <strong>一个关于开发者如何与 AI 协作的交互式演讲网站</strong><br/>
  <em>整个项目由 Claude Code 通过 17 轮 Review 制成 — 这本身就是最好的演示</em>
</p>

<p align="center">
  <a href="#english">English</a> | 中文
</p>

---

## 📖 项目介绍

「Working with AI」是一套面向开发者的实践分享幻灯片，记录了深度使用 AI 之后在工具选择、工作流程、思维方式和日常习惯上的真实感受与思考。它不是 best practice，而是个人的实践经验 — 因为 AI 进化速度太快，所有经验都只是暂时的，需要自己和 AI 不断磨合探索。

这个项目有一个独特的「元」属性：**它本身就是 AI 协作的产物**。从内容策划、视觉设计到代码实现，全部由 Claude Code 完成，经过 17 轮 Review 迭代（所有 Review 记录完整保留在 `journey/` 目录中），使用 Vite+ (VoidZero) 构建，零框架依赖。可以说，这个 slides 既是关于 AI 的分享，也是 AI 能力的实证 — 一种 self-referential 的演示方式。

演讲的设计理念强调「渐进式揭示」（Progressive Disclosure），每张幻灯片的内容都不是一次性全部展示，而是通过键盘操作逐步显现，模拟演讲者在台上逐步展开论点的节奏。交互功能（如 JPEG 压缩模拟器、Emoji 猜影视、AI 品味对比等）不是噱头，而是为了在分享过程中让听众参与、产生共鸣，加深对抽象概念的理解。

项目同时提供**中文**和**英文**两个完整版本，内容结构完全对应，通过 Vite+ 的多页面构建分别生成。

### 🎯 核心主题（21 张幻灯片）

整个演讲分为 6 个章节，共 21 张幻灯片，从 AI 编程工具的演化说起，逐步深入到工作方法论和思维方式的转变：

#### 第一章：AI 编程的现在

| 编号 | 主题 | 简介 |
|------|------|------|
| 0 | **标题页** | Working/Collaborating/Playing/Creating/Thinking with AI — 标题中的动词通过垂直轮播动画循环切换，暗示 AI 关系的多样性 |
| 1 | **Tab → Agent** | AI 编程工具的演化路径：从 TabNine 的行内自动补全（Tab），到 Cursor 的多光标同时补全（Tab Tab），再到 Claude Code / Codex / OpenCode 等 Coding Agent（你说目的地，AI 开车）。配有两张微信朋友圈截图的叠化动画，展示了作者从 2025 年初「一路 tab 到底」到 2026 年初「tab 到底还是过于保守了」的心态转变 |
| 2 | **自动驾驶等级** | 借用自动驾驶 L0–L5 的类比，将 AI 编程划分为 6 个等级：L0 完全人工（「古法编程，非遗传承」）→ L1 行内补全 → L2 代码片段+IDE Chat → L3 Coding Agent（人 Review）→ L4 Agent+AI Review → L5 AI 工程团队完全自主。每个等级标注了对应的代表工具，并用分隔线标注了两个关键拐点：「Byebye IDE」和「Byebye Human」 |

#### 第二章：理解 AI

| 编号 | 主题 | 简介 |
|------|------|------|
| 3 | **knowledge.jpeg** | 核心隐喻：LLM 是对人类知识的一种**有损压缩**，类似于 JPEG 图片压缩。人脑/全部知识是 RAW 格式（无损），教科书/文档是 PNG（高保真），而 LLM 是 JPEG（实用但有损失）。你看到的「幻觉」不是 bug — 是压缩率的代价。幻灯片内嵌了一个**可交互的 Canvas 演示**：拖动滑块模拟不同压缩质量（对应不同大小模型的「知识保真度」），实时显示猩猩照片的压缩效果变化 |
| 4 | **工具选择** | 作者个人的工具矩阵：Codex 用于写代码（「靠谱才是真的快」）、Claude Code 用于创意工作、ChatGPT 用于 Research（Deep Research）、Playwright 用于 MCP。配有 Codex 配置截图和社区 Agent 使用率投票截图 |

#### 第三章：方法论

| 编号 | 主题 | 简介 |
|------|------|------|
| 5 | **关于 Skills** | 用国际象棋的比喻来讨论 AI Skills：传统 Skill 如同人类总结的「棋谱」（Best Practice），但模型进化太快，今天的棋谱在下一代面前可能是次优解 — LLM 也会有自己的 AlphaZero 时刻。讨论了 Skills 什么时候有用（让 AI 快速掌握特殊工具、自己不熟悉的领域）和什么时候不太有用（模型已经很熟的领域、可能限制灵活性、模型更新后变成瓶颈） |
| 6 | **CLI vs MCP** | 深入对比 CLI（人/Agent → Shell → 工具）和 MCP（模型 → 协议 → 工具）两种 Agent 工具接入方式。CLI 适合开发内环（快、可组合、透明可调试），MCP 适合集成外环（可发现、跨客户端、结构化输入输出）。结论是两者都很有用，多数团队最终二者并存 |
| 7 | **Workflow** | 作者的外循环工作流：Research → Plan → Implement ⇄ Review（loop），这与 Codex 文档中描述的 Agent 内循环（Plan → Edit → Run tests → Observe → Repair → Update）形成互补。特别推荐 `journey/` 目录结构来持久化开发过程和决策，跨 session 不丢失上下文 |
| 8 | **Research 双模式** | Context-free（ChatGPT Deep Research，不带先入为主的 bias，基于第一性原理调研）和 Context-rich（Claude Code / Codex，理解当前设计决策和限制，在现有架构内找方案）。两种模式结合使用，先不带预设调研，再结合项目上下文落地 |
| 9 | **Prompt 经验** | 5 条实战提炼的个人 Prompt 原则：① 基于第一性原理思考，不要套用模式 ② 从根源解决，避免 ad-hoc patch ③ 对我的思路保持中立，该挑战就挑战 ④ 先理解现有代码再动手 ⑤ 相信 AI 的基础能力，不限定文件路径，让 AI 自己去找去判断 |

#### 第四章：Beyond Vibe Coding

| 编号 | 主题 | 简介 |
|------|------|------|
| 10 | **章节标题页** | 过渡页：AI 不只能写代码 — 它能帮你沟通、协作、探索想法 |
| 11 | **设计协作** | 开发者用 AI 快速出原型 → 和设计师一起看效果 → 迭代。交互细节不再靠文字描述和想象，配有真实案例演示链接（Flow Editor 原型） |
| 12 | **会议准备** | Deep Research 调研 → 结合自己的 key observation 和 insight 整理成文档 → 丢给 Claude Code 制作可交互的讨论材料。配有案例链接（Vibe Hand-off 讨论页） |
| 13 | **辅助沟通** | 复杂的技术方案用文字描述容易有理解偏差，做个可交互的文档出来比说一百句都清楚。团队成员直接看、直接操作，减少反复确认 |

#### 第五章：思考与变化

| 编号 | 主题 | 简介 |
|------|------|------|
| 14 | **AI 设计品味** | 交互式对比 Demo：同一个虚构的 SaaS 产品「NexusAI」，分别用 4 种方式生成 Landing Page — Claude Code 默认输出（紫色渐变 + 玻璃态 + emoji，典型的「AI 味」）、OpenAI Skill 版本（极简 mono 风格）、Anthropic Skill 版本（编辑式奢侈品美学）、Taste Skill 版本（不对称 Bento 布局）。核心论点：AI 味的本质 = 平均设计，什么都有但缺少取舍和个性；用 Skill 能去除 AI 味，但基于 Skill 做出来的版式会不会成为新的 AI 味？ |
| 15 | **章节标题页** | 过渡页：深度使用 AI 之后，一些习惯和心态上的感受 |
| 16 | **信息获取在变** | 从「构造 query」到「直接表达需求」的转变。用一个具体场景（React 项目打包后首屏白屏）对比搜索引擎方式（多次换 query → 扫 StackOverflow → 自己筛选）和 LLM + Web Search 方式（描述问题和上下文 → 一次给出诊断+方案）。结论：单次搜索可能更快，但拿到答案的整体速度后者更快。作者个人 Google 使用量下降了 95%，剩下 5% 是肌肉记忆 |
| 17 | **默认不信任「快」** | 用了 AI 以后反而开始信任「慢」—「快」给人不踏实的感觉（AI 是不是跳过了什么？），「慢」说明它在认真思考、做 research、在 plan。三秒给你答案的人，你信吗？ |

#### 第六章：生活与趣味

| 编号 | 主题 | 简介 |
|------|------|------|
| 18 | **AI 在生活中** | Coding Agent 本质上是一个用代码解决问题的方法论实现，最擅长写代码但对数字世界的其他场景同样有广阔的用武之地。实战案例：用 Codex 按日期/人物自动分类整理相册、用 Claude Code 帮妻子 refresh 简历、用 Codex 自动生成女儿足球赛 .ics 订阅日历 |
| 19 | **Emoji 猜影视** | AI 也可以是你的玩伴。AI 用 22 个 emoji 描述一部影视作品的经典桥段，你来猜。内置 6 部电影/剧集（盗梦空间、星际穿越、寻梦环游记、你的名字、鱿鱼游戏、蝙蝠侠黑暗骑士），可揭晓答案、自动下一题，还能一键复制 Prompt 到 ChatGPT 自己玩 |
| 20 | **Q&A** | 结束页，展示项目技术栈（Claude Code + Vite+），附 GitHub 仓库链接 |

### ✨ 交互特性

本项目实现了丰富的交互功能，远超传统幻灯片工具的能力：

- **渐进式 Fragment 揭示**：每张幻灯片通过 `data-f` 属性标记内容片段，按下 `↓` 键逐步展示，模拟演讲者的节奏控制。每个 Fragment 支持独立编号，前进时从 0 开始逐步显现，后退时自动恢复到最后一步的状态
- **Hash 路由导航**：通过 URL Hash 支持精确的幻灯片定位 — `#5` 跳转到第 5 张（初始状态），`#5.3` 跳转到第 5 张第 3 步 Fragment，`#5.` 展示第 5 张所有 Fragment。支持浏览器前进/后退按钮，便于分享特定幻灯片链接
- **总览模式**：按 `ESC` 进入缩略图网格视图，所有 21 张幻灯片以固定桌面尺寸（1280×800）渲染后等比缩放展示，点击任意缩略图即可跳转。在总览模式中也可用方向键移动当前标记
- **JPEG 压缩模拟器**：基于 Canvas 的实时交互演示。加载一张猩猩照片（来自 Unsplash），通过滑块控制压缩质量（使用 `(v/100)^4` 的陡峭衰减曲线），直观展示「知识压缩率」从 1%（小模型，严重失真）到 100%（人脑，理论无损）的变化过程，标签实时显示对应的模型等级（小模型 → 中等模型 → 大模型 → Claude-class → Frontier → 人脑）
- **Emoji 影视猜谜**：完整的问答小游戏，6 部影视作品，每部用 22 个 emoji 描述经典桥段。支持开始/揭晓答案/下一题操作，底部提供「在 ChatGPT 里试试」链接（预填 Prompt）和「复制 Prompt」按钮（写入剪贴板，2 秒后自动恢复按钮文字）
- **AI 品味对比展示**：使用 iframe 嵌入 4 个独立 HTML 文件，展示同一个虚构 SaaS 产品「NexusAI」在不同 AI/Skill 下生成的 Landing Page 风格。点击按钮切换时 iframe 动态加载对应页面，移动端自动缩放适配
- **外部链接 Overlay**：Showcase 案例卡片（设计协作、会议准备、辅助沟通）点击后弹出全屏 iframe overlay，带有浏览器 Chrome 模拟边框和关闭按钮，支持移动端 iPhone 框架模式
- **标题轮播动画**：标题「___ with AI」中的动词（Working / Collaborating / Playing / Creating / Thinking）通过垂直轮播动画无限循环切换
- **移动端适配**：768px 断点响应式布局，底部固定导航栏提供 5 个触控按钮（◀ 上一页、▲ 上一步、⊞ 总览、▼ 下一步、▶ 下一页），AI 品味对比 iframe 在移动端以 430×580 参考尺寸渲染后等比缩放
- **FOUC 防护**：初始状态 `opacity: 0` + `#app:not(.ready) { transition: none !important }` 防止首次加载时的样式闪烁，双重 `requestAnimationFrame` 确保初始布局完全渲染后才启用过渡动画并显示内容
- **进度条与页码**：顶部进度条实时反映当前位置（宽度 = `(当前页+1) / 总页数 * 100%`），底部显示 `当前页 / 总页数` 计数器

### 🛠 技术栈

| 技术 | 说明 |
|------|------|
| [Vite+](https://vite-plus.dev/) (VoidZero) | 统一前端工具链，封装了 Vite、Rolldown、Vitest、Oxlint、Oxfmt 等底层工具，通过全局 `vp` 命令提供从开发到构建的完整生命周期管理 |
| TypeScript 6.0 | 启用严格模式，ES2023 target + bundler module resolution，配置了 `noUnusedLocals`、`noUnusedParameters`、`erasableSyntaxOnly` 等严格检查项 |
| 原生 CSS | 全部样式手写，零 CSS 框架。使用 CSS 自定义属性（`--bg: #0a0a0f`、`--accent: #7c6aef`、`--accent2: #ef4444`、`--accent3: #14b8a6`）驱动暗色主题，所有动画和过渡通过 CSS transition/keyframe 实现 |
| Google Fonts | Space Grotesk（英文标题）、Noto Sans SC（中文正文）、JetBrains Mono（代码/标签） |
| [@lobehub/icons](https://github.com/lobehub/lobe-icons) | 开源 AI 工具图标集，提供 Claude Code、Codex、Cursor、OpenAI、GitHub Copilot、TabNine、Playwright 等工具的 SVG 图标 |
| pnpm 10.33 | 包管理器，通过 `packageManager` 字段声明版本，Vite+ 自动检测并封装其命令 |
| Renovate | 自动依赖更新机器人，配置了推荐预设、每周调度、7 天最小发布年龄、分组 patch/minor 更新 |

### 📁 项目结构

```
working-with-ai/
├── index.html                # 中文版幻灯片（主页入口）
├── en/
│   └── index.html             # 英文版幻灯片
├── src/
│   ├── main.ts                # 核心逻辑（~600 行）
│   │   ├── i18n 系统           # 根据 lang 属性检测语言，加载对应字符串
│   │   ├── 幻灯片引擎          # Fragment 追踪、前进/后退、slide 切换动画
│   │   ├── Hash 路由           # #slide.fragment 格式，支持浏览器前进后退
│   │   ├── 总览模式            # 缩略图网格构建、缩放、点击跳转
│   │   ├── iframe overlay      # 外部链接嵌入式预览
│   │   ├── JPEG 压缩 Demo      # Canvas 渲染 + 质量滑块 + 模型等级标签
│   │   ├── Emoji 猜谜          # 6 部影视作品、答案揭示、ChatGPT 链接
│   │   ├── AI 品味切换         # iframe 动态加载 4 种设计变体
│   │   ├── 移动端导航           # 底部固定导航栏事件绑定
│   │   └── FOUC 防护           # 双 rAF 初始化守卫
│   └── style.css               # 完整样式（~460 行）
│       ├── CSS 变量与主题       # 暗色主题色板 + 字体栈
│       ├── 幻灯片布局           # slide 容器 + active/exit-left/exit-right 状态
│       ├── Fragment 系统        # data-f 隐藏/显示 + f-visible 过渡
│       ├── 标题动画             # 垂直轮播 keyframe
│       ├── 组件样式             # 演化步骤、自动驾驶等级、压缩条、工具卡片...
│       ├── 响应式               # 768px 断点 + 移动端布局覆盖
│       ├── 总览模式             # 网格布局 + 缩略图缩放
│       └── 交互元素             # 按钮、滑块、iframe overlay、导航栏
├── public/
│   ├── ai-taste.html           # AI 品味默认变体（紫色渐变 + 玻璃态 + emoji）
│   ├── no-ai-taste-2.html      # OpenAI Skill 变体（极简 mono + teal 点缀）
│   ├── no-ai-taste-3.html      # Anthropic Skill 变体（编辑式 + 衬线字体 + 金色调）
│   ├── no-ai-taste-4.html      # Taste Skill 变体（不对称 Bento + 铜色调）
│   ├── icons/                  # 工具图标 SVG/PNG
│   │   ├── claudecode-color.svg
│   │   ├── codex-color.svg
│   │   ├── cursor.svg
│   │   ├── githubcopilot.svg
│   │   ├── openai.svg
│   │   ├── opencode.svg
│   │   ├── playwright.svg
│   │   ├── tabnine.png
│   │   ├── viteplus.svg
│   │   └── ...
│   ├── moments-2025.jpg        # 2025 年朋友圈截图（中文）
│   ├── moments-2026.jpg        # 2026 年朋友圈截图（中文）
│   ├── moments-2025-en.jpg     # 2025 年朋友圈截图（英文）
│   ├── moments-2026-en.jpg     # 2026 年朋友圈截图（英文）
│   ├── codex-config.png        # Codex 配置截图
│   ├── agent-poll.png          # 社区 Agent 使用率投票截图
│   ├── mike-arney-gorilla.jpg  # JPEG 压缩演示用猩猩照片（Unsplash）
│   └── favicon.svg             # 网站图标
├── journey/                    # 📝 完整开发过程记录（项目的「灵魂」）
│   ├── IDEAS.md                # 初始头脑风暴：18 个候选主题的详细描述
│   ├── REVIEW_1.md             # 第 1 轮 Review：整体结构重组
│   ├── REVIEW_2.md             # 第 2 轮 Review：knowledge.jpeg 隐喻
│   ├── REVIEW_3.md             # 第 3 轮 Review：query→intent 可视化
│   ├── REVIEW_4.md             # 第 4 轮 Review：新增工具选择、Research 双模式
│   ├── REVIEW_5.md             # 第 5 轮 Review：AI 品味对比概念
│   ├── REVIEW_6.md             # 第 6 轮 Review：lobehub/icons 集成
│   ├── REVIEW_7.md             # 第 7 轮 Review：Fragment 渐进揭示系统
│   ├── REVIEW_8.md             # 第 8 轮 Review：FOUC 修复 + 步进展示
│   ├── REVIEW_9.md             # 第 9 轮 Review：内容精炼 + moment 截图
│   ├── REVIEW_10.md            # 第 10 轮 Review：「不信任快」概念
│   ├── REVIEW_11.md            # 第 11 轮 Review：moment 截图叠加 + 等级颜色
│   ├── REVIEW_12.md            # 第 12 轮 Review：质量衰减曲线 + 猩猩图
│   ├── REVIEW_13.md            # 第 13 轮 Review：标题轮播动画
│   ├── REVIEW_14.md            # 第 14 轮 Review：总览模式（ESC）
│   ├── REVIEW_15.md            # 第 15 轮 Review：Fragment 状态保持
│   ├── REVIEW_16.md            # 第 16 轮 Review：移动端布局修复
│   ├── REVIEW_17.md            # 第 17 轮 Review：移动端总览 + 底部导航栏
│   ├── frontend-design.md      # Anthropic frontend-design skill 完整参考
│   ├── frontend-skill.md       # OpenAI frontend-skill 完整参考
│   ├── taste-skill.md          # design-taste-frontend skill 完整参考
│   └── mcp-vs-cli.md           # MCP vs CLI 深度研究报告（含架构图）
├── AGENTS.md                   # Vite+ Agent 开发指南（含工作流和常见陷阱）
├── renovate.json               # Renovate 自动更新配置
├── .vscode/
│   └── extensions.json         # 推荐 VS Code 扩展（VoidZero.vite-plus-extension-pack）
├── .gitignore                  # 忽略 node_modules、dist、logs 等
├── package.json                # 项目配置 + 依赖声明
├── tsconfig.json               # TypeScript 编译配置
└── vite.config.ts              # Vite+ 多页面构建配置（index.html + en/index.html）
```

## 🚀 使用方法

### 在线访问

直接打开对应页面即可浏览幻灯片：

- **中文版**：访问根路径 `/` 或 `index.html`
- **英文版**：访问 `/en/` 或 `en/index.html`

### 键盘快捷键

完整的键盘导航支持，适合演讲时使用：

| 按键 | 功能 | 说明 |
|------|------|------|
| `→` | 下一张幻灯片 | 跳到下一张，所有 Fragment 重置为隐藏 |
| `←` | 上一张幻灯片 | 跳到上一张，所有 Fragment 显示为已完成状态 |
| `↓` | 下一步 | 展示当前幻灯片的下一个 Fragment（如果还有），否则跳到下一张 |
| `↑` | 上一步 | 隐藏当前幻灯片的最后一个可见 Fragment（如果已显示多个），否则跳到上一张 |
| `Space` | 下一张幻灯片 | 等同于 `→` |
| `PageDown` | 下一张幻灯片 | 等同于 `→` |
| `PageUp` | 上一张幻灯片 | 等同于 `←` |
| `ESC` | 切换总览模式 | 进入/退出缩略图网格视图；在总览模式中 `Enter` 或 `Space` 返回当前幻灯片 |
| 方向键（总览中） | 移动标记 | 在总览模式下用方向键移动当前选中的幻灯片 |

### 触摸设备

移动端底部固定导航栏提供 5 个按钮：

| 按钮 | 功能 |
|------|------|
| ◀ | 上一张幻灯片 |
| ▲ | 隐藏上一个 Fragment |
| ⊞ | 切换总览模式 |
| ▼ | 展示下一个 Fragment |
| ▶ | 下一张幻灯片 |

### URL 路由

支持通过 URL Hash 直接跳转到指定幻灯片和 Fragment，方便分享和收藏特定页面：

| Hash | 效果 |
|------|------|
| `#5` | 跳转到第 5 张幻灯片，Fragment 初始状态（全部隐藏） |
| `#5.3` | 跳转到第 5 张幻灯片，展示到第 3 步 Fragment |
| `#5.` | 跳转到第 5 张幻灯片，展示所有 Fragment（尾部圆点表示全部） |

URL Hash 会随幻灯片切换自动更新，浏览器的前进/后退按钮完全可用。

## 💻 本地开发

### 环境要求

| 依赖 | 版本要求 | 说明 |
|------|----------|------|
| **Node.js** | v20+ | 推荐使用 LTS 版本 |
| **pnpm** | 10.33+ | 通过 `package.json` 中 `packageManager` 字段声明，Vite+ 自动检测 |
| **Vite+ CLI** | 最新版 | 全局 `vp` 命令，运行 `npm i -g vite-plus` 安装 |

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/88lin/working-with-ai.git
cd working-with-ai

# 2. 安装依赖
vp install

# 3. 启动开发服务器
vp dev
```

`vp install` 会自动检测系统中的 pnpm/npm/yarn 并使用对应包管理器安装依赖（本项目声明了 pnpm 10.33）。开发服务器启动后：

- **中文版**：`http://localhost:5173/`
- **英文版**：`http://localhost:5173/en/`

开发服务器支持 HMR 热模块替换，修改 `src/main.ts`、`src/style.css` 或 HTML 文件后会自动刷新浏览器。Vite+ 的多页面配置（`vite.config.ts` 中的 `build.rollupOptions.input`）会同时服务两个入口页面。

### 常用命令

```bash
# === 开发 ===
vp dev          # 启动开发服务器（默认端口 5173，支持 --port 自定义）
vp check        # 运行完整的代码质量检查（格式化 + Lint + TypeScript 类型检查）
vp test         # 运行测试（如有）

# === 构建 ===
vp build        # 构建生产版本（先运行 tsc 类型检查，再执行 vite build，输出到 dist/）
vp preview      # 本地预览生产构建结果（启动静态文件服务器）

# === 依赖管理 ===
vp add <pkg>            # 添加依赖包到 dependencies
vp add -D <pkg>         # 添加开发依赖到 devDependencies
vp remove <pkg>         # 移除依赖包
vp update               # 更新所有依赖到最新版本
vp outdated             # 检查过期的依赖包
vp dedupe               # 去重依赖

# === 代码质量 ===
vp lint         # 运行 Oxlint 代码检查
vp lint --type-aware  # 运行类型感知的 Lint（开箱即用，无需安装额外插件）
vp fmt          # 运行 Oxfmt 代码格式化

# === 其他 ===
vp dlx <pkg>    # 临时执行一个包的二进制（类似 npx，但使用 Vite+ 封装）
vp run <script> # 执行 package.json 中定义的 scripts
```

> ⚠️ **重要提示**：本项目使用 Vite+ 统一工具链。请不要直接使用 pnpm/npm/yarn 命令。Vite+ 的 `vp` 命令会自动封装底层包管理器和工具链。例如，不要运行 `pnpm install`，而应该用 `vp install`；不要运行 `pnpm build`，而应该用 `vp build`。如果 `package.json` 中的 scripts 名称与 `vp` 内置命令冲突（如 `test`），需要用 `vp run test` 来执行。

## 🌐 部署

项目构建后生成纯静态文件（HTML + CSS + JS + 图片），可以部署到任何支持静态文件托管的平台。

### 构建生产版本

```bash
vp build
```

构建流程：先执行 `tsc`（TypeScript 编译器）进行类型检查，然后通过 Vite+ 执行生产构建。构建产物输出到 `dist/` 目录：

```
dist/
├── index.html                  # 中文版入口
├── en/
│   └── index.html              # 英文版入口
├── assets/
│   ├── main-xxxxx.js           # 打包后的 JS（含幻灯片引擎和所有交互逻辑）
│   ├── main-xxxxx.css          # 打包后的 CSS（含所有样式）
│   └── ...
├── icons/                      # 工具图标（直接复制）
├── moments-*.jpg               # 演示截图（直接复制）
├── *.html                      # AI 品味对比页面（直接复制）
├── *.png / *.jpg / *.svg       # 其他静态资源（直接复制）
└── favicon.svg                 # 网站图标
```

### 部署到 Vercel

1. 登录 [Vercel](https://vercel.com/) 并连接你的 GitHub 仓库
2. 在项目设置中配置：
   - **Framework Preset**：Vite（或选择 Other）
   - **Build Command**：`npx vp build`（如果 Vite+ 未全局安装，可使用 `npx vite-plus build` 或在 CI 中先 `npm i -g vite-plus`）
   - **Output Directory**：`dist`
3. 点击 Deploy

> 💡 **提示**：如果 Vercel 环境中没有全局安装 Vite+，可以在项目根目录创建 `vercel.json` 配置安装脚本，或者在 `package.json` 中添加一个 build script：`"build": "vp build"`

### 部署到 Netlify

1. 登录 [Netlify](https://www.netlify.com/) 并连接 GitHub 仓库
2. 配置构建设置：
   - **Build command**：`vp build`
   - **Publish directory**：`dist`
3. 可能需要在 Netlify 的 Build Environment 中安装 Vite+ CLI

### 部署到 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → 创建项目
2. 连接 GitHub 仓库
3. 配置：
   - **Build command**：`vp build`
   - **Build output directory**：`dist`

### 部署到 GitHub Pages

**方式一：手动部署**

```bash
# 构建
vp build

# 使用 gh-pages 工具部署（临时安装，不写入依赖）
npx gh-pages -d dist
```

**方式二：GitHub Actions 自动部署**

在仓库设置中开启 Pages（Settings → Pages → Source: GitHub Actions），然后创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时运行一个部署
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install Vite+
        run: npm i -g vite-plus

      - name: Install dependencies
        run: vp install

      - name: Build
        run: vp build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🔍 关于 journey/ 目录

`journey/` 目录是这个项目最有价值的「元」内容之一 — 它完整记录了从一张白纸到最终成品的全部过程。如果你对「AI 如何做创意工作」感兴趣，这些文件比任何教程都更真实。

### 文件概览

| 文件 | 内容 | 价值 |
|------|------|------|
| `IDEAS.md` | 最初的 18 个候选主题头脑风暴，每个主题都有 2–3 行的详细描述和灵感来源 | 展示了项目初期的发散思考过程，有些主题最终被采纳，有些被放弃或合并 |
| `REVIEW_1.md ~ REVIEW_17.md` | 与 Claude Code 的 17 轮 Review 迭代记录 | 完整的「人机协作」过程档案。每轮 Review 包含具体反馈、设计决策和实现方案的讨论。从整体结构重组（R1）到细节打磨如 FOUC 防护（R8）、猩猩照片选择（R12）、标题轮播动画（R13）等，展现了真实的迭代节奏 |
| `frontend-design.md` | Anthropic 官方的 frontend-design skill 完整文档 | 作为 AI 品味对比幻灯片的参考材料，包含了 Anthropic 推荐的设计原则：禁止使用 Inter/Roboto/Arial、禁止紫色渐变、强调排版层级等 |
| `frontend-skill.md` | OpenAI 官方的 frontend-skill 完整文档 | 同样作为参考材料，包含 OpenAI 的设计方法论：Working Model（视觉论点 + 内容计划 + 交互论点）、美丽默认值、Linear 风格应用默认值等 |
| `taste-skill.md` | design-taste-frontend skill（Taste Skill）完整文档 | 高自主性的前端 Skill，定义了设计方差、运动强度、视觉密度等参数，以及反 AI 味规则和创意工具箱（磁吸按钮、Bento 网格、玻璃态等） |
| `mcp-vs-cli.md` | MCP vs CLI 的深度技术研究报告 | 独立的技术分析文档，涵盖了术语定义、历史演化、核心架构、决策矩阵、安全考量、可扩展性和开发者体验对比，包含 Mermaid 架构图 |

这些记录真实展现了使用 AI 进行创意开发的完整图景 — 不只是最终成品，更是过程中的方向调整、设计取舍、反复打磨和偶尔的弯路。对于想要了解「和 AI 一起做项目到底是什么体验」的开发者来说，这是最有参考价值的部分。

## 📄 License

MIT

---

<a id="english"></a>

<p align="center">
  <img src="public/favicon.svg" alt="Working with AI" width="80" height="80" />
</p>

<h1 align="center">🤖 Working with AI</h1>

<p align="center">
  <strong>An interactive presentation about how developers collaborate with AI</strong><br/>
  <em>This entire project was built by Claude Code through 17 rounds of review — which is itself the best demo</em>
</p>

<p align="center">
  <a href="#-chinese-version">中文</a> | English
</p>

---

## 📖 About

「Working with AI」is a set of interactive presentation slides designed for developers, sharing real experiences and reflections on tool choices, workflows, mindsets, and daily habits after deeply integrating AI into the development process. It's not about best practices — it's about personal exploration. Because AI evolves so fast, all experiences are temporary, and everything requires your own experimentation and collaboration with AI.

This project has a unique meta-property: **it is itself a product of AI collaboration**. From content planning and visual design to code implementation, everything was done by Claude Code through 17 rounds of review iterations (all review records are preserved in the `journey/` directory). Built with Vite+ (VoidZero) and zero framework dependencies. In a way, these slides are both a talk *about* AI and a *demonstration* of AI capabilities — a self-referential format.

The presentation is designed around the principle of **Progressive Disclosure**: content on each slide is not revealed all at once, but gradually exposed through keyboard navigation, simulating the rhythm of a speaker unfolding arguments step by step. Interactive features (such as the JPEG compression simulator, Emoji movie quiz, and AI taste comparison) aren't gimmicks — they're designed to engage the audience during the talk and make abstract concepts tangible.

The project provides both **Chinese** and **English** versions with completely parallel content structures, built as separate pages via Vite+'s multi-page build system.

### 🎯 Slide Topics (21 Slides)

The presentation is organized into 6 chapters with 21 slides, starting from the evolution of AI coding tools and progressively diving into methodology and mindset shifts:

#### Chapter 1: The Present State of AI Coding

| # | Topic | Summary |
|---|-------|---------|
| 0 | **Title** | Working/Collaborating/Playing/Creating/Thinking with AI — the verb in the title cycles through a vertical carousel animation, hinting at the diversity of human-AI relationships |
| 1 | **Tab → Agent** | The evolution path of AI coding tools: from TabNine's inline autocomplete (Tab), to Cursor's multi-cursor completion (Tab Tab), to Coding Agents like Claude Code / Codex / OpenCode (you set the destination, AI drives). Features a dissolve animation between two WeChat Moments screenshots showing the author's mindset shift from "tab all the way" (Jan 2025) to "tab-only was too conservative" (Feb 2026) |
| 2 | **Autonomy Levels** | Using the L0–L5 self-driving analogy to classify AI coding into 6 levels: L0 Fully Manual ("Artisan coding, heritage craft") → L1 Inline Autocomplete → L2 Code Generation + IDE Chat → L3 Coding Agent (Human Review) → L4 Agent + AI Review → L5 AI Engineering Team (Fully Autonomous). Each level is annotated with representative tools, and two key inflection points are marked: "Byebye IDE" and "Byebye Human" |

#### Chapter 2: Understanding AI

| # | Topic | Summary |
|---|-------|---------|
| 3 | **knowledge.jpeg** | Core metaphor: LLMs are a form of **lossy compression** of human knowledge, analogous to JPEG image compression. The human brain / all knowledge is RAW (lossless), textbooks / docs are PNG (high fidelity), and LLMs are JPEG (practical but lossy). "Hallucinations" aren't bugs — they're the cost of compression. The slide includes an **interactive Canvas demo**: drag a slider to simulate different compression quality levels (corresponding to different model "knowledge fidelity"), with real-time display of a gorilla photo's compression artifacts |
| 4 | **Tool Choices** | The author's personal tool matrix: Codex for coding ("Reliable is the real fast"), Claude Code for creative work, ChatGPT for Research (Deep Research), Playwright for MCP. Includes screenshots of Codex configuration and a community Agent usage poll |

#### Chapter 3: Methodology

| # | Topic | Summary |
|---|-------|---------|
| 5 | **About Skills** | Uses a chess analogy to discuss AI Skills: traditional Skills are like human-curated "opening books" (Best Practices), but models evolve so fast that today's opening book may be suboptimal for the next generation — LLMs will have their own AlphaZero moment. Discusses when Skills are useful (helping AI quickly learn specialized tools, unfamiliar domains) and when they're less useful (domains the model already knows well, may limit flexibility, become bottlenecks after model updates) |
| 6 | **CLI vs MCP** | In-depth comparison of CLI (Human/Agent → Shell → Tool) and MCP (Model → Protocol → Tool) as two approaches for Agent tool integration. CLI suits the inner dev loop (fast, composable, transparent/debuggable), MCP suits the outer integration loop (discoverable, cross-client, structured I/O). Conclusion: both are valuable, most teams end up using both |
| 7 | **Workflow** | The author's outer loop workflow: Research → Plan → Implement ⇄ Review (loop), which complements the Codex-documented Agent inner loop (Plan → Edit → Run tests → Observe → Repair → Update). Particularly recommends the `journey/` directory structure to persist development process and decisions across sessions |
| 8 | **Research Two Modes** | Context-free (ChatGPT Deep Research, no preconceived bias, first-principles research) and Context-rich (Claude Code / Codex, understanding current design decisions and constraints, finding best solutions within existing architecture). Combining both modes: first research without assumptions, then ground findings in project context |
| 9 | **Prompt Tips** | 5 personally distilled prompt principles: ① Think from first principles, don't apply patterns blindly ② Fix at the root, avoid ad-hoc patches ③ Stay neutral about my approach — challenge when needed ④ Understand existing code before changing it ⑤ Trust AI's foundational capabilities — don't specify file paths or fixed context, let AI find and judge on its own |

#### Chapter 4: Beyond Vibe Coding

| # | Topic | Summary |
|---|-------|---------|
| 10 | **Chapter Title** | Transition slide: AI doesn't just write code — it helps you communicate, collaborate, and explore ideas |
| 11 | **Design Collaboration** | Developers use AI to quickly prototype → review effects with designers → iterate. Interaction details no longer rely on text descriptions and imagination. Includes a real case study link (Flow Editor prototype) |
| 12 | **Meeting Preparation** | Deep Research → combine with personal key observations and insights → hand to Claude Code to create interactive discussion materials. Includes a case study link (Vibe Hand-off discussion page) |
| 13 | **Communication Aid** | Complex technical proposals are easily misunderstood through text. An interactive document is worth a thousand words — team members can see and interact directly, reducing back-and-forth |

#### Chapter 5: Reflections and Changes

| # | Topic | Summary |
|---|-------|---------|
| 14 | **AI for Design** | Interactive comparison demo: the same fictional SaaS product "NexusAI" rendered as Landing Pages by 4 different approaches — Claude Code default output (purple gradients + glassmorphism + emoji, the typical "AI taste"), OpenAI Skill variant (minimalist mono style), Anthropic Skill variant (editorial luxury aesthetic), Taste Skill variant (asymmetric Bento layout). Core argument: "AI taste" = average design, has everything but lacks taste and personality. Skills can remove AI taste, but will skill-based output become the new AI taste? |
| 15 | **Chapter Title** | Transition slide: after using AI extensively — some shifts in habits and mindset |
| 16 | **Information Retrieval is Changing** | The shift from "crafting queries" to "expressing intent directly". Uses a concrete scenario (React app blank page after build) to compare search engine approach (multiple query attempts → scan StackOverflow → filter yourself) vs LLM + Web Search approach (describe problem with context → get diagnosis + solution in one go). Conclusion: a single search might be faster, but overall time-to-answer is faster with LLM. The author's personal Google usage dropped 95%, the remaining 5% is muscle memory |
| 17 | **Default Distrust of "Fast"** | After using AI, the author actually started trusting "slow" — "fast" gives an uneasy feeling (did AI skip something?), "slow" means it's thinking carefully, researching, planning. Would you trust someone who answers in 3 seconds? |

#### Chapter 6: Life and Fun

| # | Topic | Summary |
|---|-------|---------|
| 18 | **AI in Daily Life** | A coding agent is essentially a methodology for solving problems with code. Best at coding, but equally useful for other digital-world scenarios. Real examples: using Codex to auto-classify photos by date/person, Claude Code to refresh wife's resume, Codex to auto-generate daughter's soccer .ics subscription calendar |
| 19 | **Emoji Movie Quiz** | AI can also be your playmate. AI uses 22 emoji to depict an iconic scene from a movie/TV show, you guess. Built-in 6 movies/series (Inception, Interstellar, Coco, Your Name, Squid Game, The Dark Knight), with reveal answer, auto-advance, and one-click ChatGPT prompt copy |
| 20 | **Q&A** | Closing page showing project tech stack (Claude Code + Vite+), with GitHub repo link |

### ✨ Interactive Features

This project implements a rich set of interactive features far beyond traditional presentation tools:

- **Progressive Fragment Reveals**: Each slide uses `data-f` attributes to mark content fragments. Press `↓` to reveal them step by step, simulating a speaker's pacing control. Each Fragment has an independent number — forward navigation starts from 0 and progressively reveals, backward navigation auto-restores to the last step
- **Hash-based Navigation**: URL hash supports precise slide targeting — `#5` jumps to slide 5 (initial state), `#5.3` jumps to slide 5 fragment 3, `#5.` reveals all fragments on slide 5. Browser back/forward buttons are fully supported for easy sharing of specific slides
- **Overview Mode**: Press `ESC` to enter a thumbnail grid view. All 21 slides are rendered at a fixed desktop size (1280×800) and proportionally scaled. Click any thumbnail to jump directly. Arrow keys navigate the current marker within the overview
- **JPEG Compression Simulator**: A real-time interactive Canvas demo. Loads a gorilla photo (from Unsplash), controls compression quality via a slider (using a `(v/100)^4` steep decay curve), visually demonstrating how "knowledge compression rate" varies from 1% (small model, severe artifacts) to 100% (human brain, theoretically lossless). Labels dynamically display corresponding model tiers (small model → mid-size → large → Claude-class → Frontier → human brain)
- **Emoji Movie Quiz**: A complete quiz game with 6 movies/TV shows, each depicted by 22 emoji. Supports start / reveal answer / next actions. Bottom area provides "Try it in ChatGPT" link (pre-filled prompt) and "Copy Prompt" button (writes to clipboard, auto-restores button text after 2 seconds)
- **AI Taste Comparison**: Uses iframes to embed 4 independent HTML files showing the same fictional SaaS product "NexusAI" Landing Page in different AI/Skill-generated styles. Clicking buttons dynamically loads the corresponding page. On mobile, iframes auto-scale to fit screen width
- **External Link Overlay**: Showcase case cards (design collaboration, meeting prep, communication aid) open a fullscreen iframe overlay on click, with a simulated browser Chrome border and close button. Supports mobile iPhone frame mode
- **Title Carousel Animation**: The verb in the title "___ with AI" (Working / Collaborating / Playing / Creating / Thinking) cycles infinitely through a vertical carousel animation
- **Mobile Responsive**: 768px breakpoint responsive layout with a fixed bottom navigation bar providing 5 touch buttons (◀ Previous, ▲ Step Back, ⊞ Overview, ▼ Step Forward, ▶ Next). AI taste comparison iframe renders at 430×580 reference size and scales proportionally on mobile
- **FOUC Prevention**: Initial state `opacity: 0` + `#app:not(.ready) { transition: none !important }` prevents style flash on first load. Double `requestAnimationFrame` ensures initial layout is fully rendered before enabling transitions and revealing content
- **Progress Bar and Page Counter**: Top progress bar reflects current position (width = `(current + 1) / total * 100%`), bottom displays `current / total` counter

### 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| [Vite+](https://vite-plus.dev/) (VoidZero) | Unified frontend toolchain wrapping Vite, Rolldown, Vitest, Oxlint, Oxfmt, and more. Provides the complete development lifecycle through the global `vp` command |
| TypeScript 6.0 | Strict mode enabled, ES2023 target + bundler module resolution. Configured with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` and other strict checks |
| Vanilla CSS | All styles hand-written, zero CSS frameworks. Uses CSS custom properties (`--bg: #0a0a0f`, `--accent: #7c6aef`, `--accent2: #ef4444`, `--accent3: #14b8a6`) to drive the dark theme. All animations and transitions implemented via CSS transition/keyframe |
| Google Fonts | Space Grotesk (English titles), Noto Sans SC (Chinese body text), JetBrains Mono (code/labels) |
| [@lobehub/icons](https://github.com/lobehub/lobe-icons) | Open-source AI tool icon pack providing SVG icons for Claude Code, Codex, Cursor, OpenAI, GitHub Copilot, TabNine, Playwright, etc. |
| pnpm 10.33 | Package manager declared via `packageManager` field in `package.json`, auto-detected and wrapped by Vite+ |
| Renovate | Automated dependency update bot, configured with recommended preset, weekly schedule, 7-day minimum release age, and grouped patch/minor updates |

### 📁 Project Structure

```
working-with-ai/
├── index.html                # Chinese slides (main entry)
├── en/
│   └── index.html             # English slides
├── src/
│   ├── main.ts                # Core logic (~600 lines)
│   │   ├── i18n system        # Detects language from lang attribute, loads corresponding strings
│   │   ├── Slide engine       # Fragment tracking, forward/backward, slide transition animations
│   │   ├── Hash routing       # #slide.fragment format, browser back/forward support
│   │   ├── Overview mode      # Thumbnail grid construction, scaling, click-to-jump
│   │   ├── iframe overlay     # Embedded preview for external links
│   │   ├── JPEG compression   # Canvas rendering + quality slider + model tier labels
│   │   ├── Emoji quiz         # 6 movies/TV shows, answer reveal, ChatGPT link
│   │   ├── AI taste toggle    # iframe dynamic loading of 4 design variants
│   │   ├── Mobile navigation  # Fixed bottom nav bar event binding
│   │   └── FOUC guard         # Double rAF initialization guard
│   └── style.css               # Complete styles (~460 lines)
│       ├── CSS variables       # Dark theme palette + font stack
│       ├── Slide layout        # slide container + active/exit-left/exit-right states
│       ├── Fragment system     # data-f hidden/visible + f-visible transition
│       ├── Title animation     # Vertical carousel keyframe
│       ├── Component styles    # Evolution steps, autonomy levels, compression bars, tool cards...
│       ├── Responsive          # 768px breakpoint + mobile layout overrides
│       ├── Overview mode       # Grid layout + thumbnail scaling
│       └── Interactive elements # Buttons, sliders, iframe overlay, navigation bar
├── public/
│   ├── ai-taste.html           # AI taste default variant (purple gradient + glassmorphism + emoji)
│   ├── no-ai-taste-2.html      # OpenAI Skill variant (minimalist mono + teal accent)
│   ├── no-ai-taste-3.html      # Anthropic Skill variant (editorial + serif font + gold accent)
│   ├── no-ai-taste-4.html      # Taste Skill variant (asymmetric Bento + copper accent)
│   ├── icons/                  # Tool icons SVG/PNG
│   │   ├── claudecode-color.svg
│   │   ├── codex-color.svg
│   │   ├── cursor.svg
│   │   ├── githubcopilot.svg
│   │   ├── openai.svg
│   │   ├── opencode.svg
│   │   ├── playwright.svg
│   │   ├── tabnine.png
│   │   ├── viteplus.svg
│   │   └── ...
│   ├── moments-2025.jpg        # 2025 WeChat Moments screenshot (Chinese)
│   ├── moments-2026.jpg        # 2026 WeChat Moments screenshot (Chinese)
│   ├── moments-2025-en.jpg     # 2025 WeChat Moments screenshot (English)
│   ├── moments-2026-en.jpg     # 2026 WeChat Moments screenshot (English)
│   ├── codex-config.png        # Codex configuration screenshot
│   ├── agent-poll.png          # Community Agent usage poll screenshot
│   ├── mike-arney-gorilla.jpg  # Gorilla photo for JPEG compression demo (Unsplash)
│   └── favicon.svg             # Site favicon
├── journey/                    # 📝 Complete development process records
│   ├── IDEAS.md                # Initial brainstorm: detailed descriptions of 18 candidate topics
│   ├── REVIEW_1.md             # Round 1: Overall structure reorganization
│   ├── REVIEW_2.md             # Round 2: knowledge.jpeg metaphor
│   ├── REVIEW_3.md             # Round 3: query→intent visualization
│   ├── REVIEW_4.md             # Round 4: New tool choices, Research dual modes
│   ├── REVIEW_5.md             # Round 5: AI taste comparison concept
│   ├── REVIEW_6.md             # Round 6: lobehub/icons integration
│   ├── REVIEW_7.md             # Round 7: Fragment progressive disclosure system
│   ├── REVIEW_8.md             # Round 8: FOUC fix + step-by-step reveals
│   ├── REVIEW_9.md             # Round 9: Content refinement + moment screenshots
│   ├── REVIEW_10.md            # Round 10: "Distrust fast" concept
│   ├── REVIEW_11.md            # Round 11: Moment screenshot overlay + level colors
│   ├── REVIEW_12.md            # Round 12: Quality decay curve + gorilla image
│   ├── REVIEW_13.md            # Round 13: Title carousel animation
│   ├── REVIEW_14.md            # Round 14: Overview mode (ESC)
│   ├── REVIEW_15.md            # Round 15: Fragment state preservation
│   ├── REVIEW_16.md            # Round 16: Mobile layout fixes
│   ├── REVIEW_17.md            # Round 17: Mobile overview + bottom nav bar
│   ├── frontend-design.md      # Anthropic frontend-design skill reference
│   ├── frontend-skill.md       # OpenAI frontend-skill reference
│   ├── taste-skill.md          # design-taste-frontend skill reference
│   └── mcp-vs-cli.md           # MCP vs CLI deep-dive research report (with architecture diagrams)
├── AGENTS.md                   # Vite+ Agent development guide (workflow + common pitfalls)
├── renovate.json               # Renovate auto-update configuration
├── .vscode/
│   └── extensions.json         # Recommended VS Code extension (VoidZero.vite-plus-extension-pack)
├── .gitignore                  # Ignores node_modules, dist, logs, etc.
├── package.json                # Project config + dependency declarations
├── tsconfig.json               # TypeScript compilation config
└── vite.config.ts              # Vite+ multi-page build config (index.html + en/index.html)
```

## 🚀 Usage

### Online Access

Simply open the corresponding page to browse the slides:

- **Chinese version**: Root path `/` or `index.html`
- **English version**: `/en/` or `en/index.html`

### Keyboard Shortcuts

Full keyboard navigation support, designed for presentation use:

| Key | Action | Description |
|-----|--------|-------------|
| `→` | Next slide | Jump to next slide, all fragments reset to hidden |
| `←` | Previous slide | Jump to previous slide, all fragments shown as completed |
| `↓` | Next step | Reveal the next fragment on the current slide (if available), otherwise jump to next slide |
| `↑` | Previous step | Hide the last visible fragment on the current slide (if multiple shown), otherwise jump to previous slide |
| `Space` | Next slide | Same as `→` |
| `PageDown` | Next slide | Same as `→` |
| `PageUp` | Previous slide | Same as `←` |
| `ESC` | Toggle overview | Enter/exit thumbnail grid view. In overview mode, `Enter` or `Space` returns to current slide |
| Arrow keys (in overview) | Move marker | Navigate the current selected slide in overview mode |

### Touch Devices

A fixed bottom navigation bar on mobile provides 5 buttons:

| Button | Action |
|--------|--------|
| ◀ | Previous slide |
| ▲ | Hide previous fragment |
| ⊞ | Toggle overview mode |
| ▼ | Reveal next fragment |
| ▶ | Next slide |

### URL Routing

Navigate directly to specific slides and fragments via URL hash — useful for sharing and bookmarking:

| Hash | Effect |
|------|--------|
| `#5` | Jump to slide 5, initial state (all fragments hidden) |
| `#5.3` | Jump to slide 5, reveal up to fragment 3 |
| `#5.` | Jump to slide 5, reveal all fragments (trailing dot means all) |

URL hash updates automatically as you navigate. Browser back/forward buttons work fully.

## 💻 Local Development

### Requirements

| Dependency | Version | Notes |
|------------|---------|-------|
| **Node.js** | v20+ | LTS version recommended |
| **pnpm** | 10.33+ | Declared via `packageManager` field, auto-detected by Vite+ |
| **Vite+ CLI** | Latest | Global `vp` command, install via `npm i -g vite-plus` |

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/88lin/working-with-ai.git
cd working-with-ai

# 2. Install dependencies
vp install

# 3. Start the development server
vp dev
```

`vp install` auto-detects the system's pnpm/npm/yarn and uses the corresponding package manager (this project declares pnpm 10.33). After the dev server starts:

- **Chinese**: `http://localhost:5173/`
- **English**: `http://localhost:5173/en/`

The dev server supports HMR (Hot Module Replacement) — changes to `src/main.ts`, `src/style.css`, or HTML files trigger automatic browser refresh. Vite+'s multi-page config (`build.rollupOptions.input` in `vite.config.ts`) serves both entry pages simultaneously.

### Common Commands

```bash
# === Development ===
vp dev          # Start dev server (default port 5173, supports --port for custom port)
vp check        # Run full code quality check (format + lint + TypeScript type checking)
vp test         # Run tests (if any)

# === Build ===
vp build        # Build for production (runs tsc type check first, then vite build, outputs to dist/)
vp preview      # Preview production build locally (starts a static file server)

# === Dependency Management ===
vp add <pkg>            # Add package to dependencies
vp add -D <pkg>         # Add package to devDependencies
vp remove <pkg>         # Remove a package
vp update               # Update all dependencies to latest
vp outdated             # Check for outdated packages
vp dedupe               # Deduplicate dependencies

# === Code Quality ===
vp lint         # Run Oxlint code linting
vp lint --type-aware  # Run type-aware linting (works out of the box, no extra plugins needed)
vp fmt          # Run Oxfmt code formatting

# === Other ===
vp dlx <pkg>    # Execute a package binary without installing (like npx, but Vite+ wrapped)
vp run <script> # Execute scripts defined in package.json
```

> ⚠️ **Important**: This project uses the Vite+ unified toolchain. Do NOT use pnpm/npm/yarn directly. Vite+'s `vp` command auto-wraps the underlying package manager and tools. For example, don't run `pnpm install` — use `vp install` instead; don't run `pnpm build` — use `vp build` instead. If a script name in `package.json` conflicts with a built-in `vp` command (like `test`), use `vp run test` to execute it.

## 🌐 Deployment

The project builds to pure static files (HTML + CSS + JS + images), deployable to any static hosting platform.

### Build for Production

```bash
vp build
```

Build process: first runs `tsc` (TypeScript compiler) for type checking, then executes the Vite+ production build. Output goes to `dist/`:

```
dist/
├── index.html                  # Chinese entry
├── en/
│   └── index.html              # English entry
├── assets/
│   ├── main-xxxxx.js           # Bundled JS (slide engine + all interactive logic)
│   ├── main-xxxxx.css          # Bundled CSS (all styles)
│   └── ...
├── icons/                      # Tool icons (copied as-is)
├── moments-*.jpg               # Demo screenshots (copied as-is)
├── *.html                      # AI taste comparison pages (copied as-is)
├── *.png / *.jpg / *.svg       # Other static assets (copied as-is)
└── favicon.svg                 # Site favicon
```

### Deploy to Vercel

1. Log in to [Vercel](https://vercel.com/) and connect your GitHub repository
2. Configure project settings:
   - **Framework Preset**: Vite (or select Other)
   - **Build Command**: `npx vp build` (or ensure Vite+ is installed globally in the CI environment)
   - **Output Directory**: `dist`
3. Click Deploy

> 💡 **Tip**: If Vite+ isn't globally installed in Vercel's environment, you can create a `vercel.json` config with an install script, or add a build script in `package.json`: `"build": "vp build"`

### Deploy to Netlify

1. Log in to [Netlify](https://www.netlify.com/) and connect your GitHub repository
2. Configure build settings:
   - **Build command**: `vp build`
   - **Publish directory**: `dist`
3. You may need to install the Vite+ CLI in Netlify's Build Environment

### Deploy to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create project
2. Connect your GitHub repository
3. Configure:
   - **Build command**: `vp build`
   - **Build output directory**: `dist`

### Deploy to GitHub Pages

**Option 1: Manual deployment**

```bash
# Build
vp build

# Deploy using gh-pages (temp install, not added to dependencies)
npx gh-pages -d dist
```

**Option 2: GitHub Actions auto-deployment**

Enable Pages in repository settings (Settings → Pages → Source: GitHub Actions), then create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install Vite+
        run: npm i -g vite-plus

      - name: Install dependencies
        run: vp install

      - name: Build
        run: vp build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🔍 About the journey/ Directory

The `journey/` directory is one of the most valuable "meta" contents of this project — it contains the complete record from blank page to final product. If you're interested in "what does it actually look like to do creative work with AI?", these files are more authentic than any tutorial.

### File Overview

| File | Content | Value |
|------|---------|-------|
| `IDEAS.md` | Original brainstorm of 18 candidate topics, each with 2–3 lines of detailed description and inspiration sources | Shows the initial divergent thinking process — some topics were adopted, others abandoned or merged |
| `REVIEW_1.md ~ REVIEW_17.md` | 17 rounds of review iteration records with Claude Code | Complete "human-AI collaboration" process archive. Each review contains specific feedback, design decisions, and implementation discussions. From structural reorganization (R1) to detail polishing like FOUC prevention (R8), gorilla photo selection (R12), title carousel animation (R13), showing the real iteration rhythm |
| `frontend-design.md` | Anthropic's official frontend-design skill complete documentation | Reference material for the AI taste comparison slide, containing Anthropic's recommended design principles: no Inter/Roboto/Arial, no purple gradients, emphasis on typography hierarchy |
| `frontend-skill.md` | OpenAI's official frontend-skill complete documentation | Reference material including OpenAI's design methodology: Working Model (visual thesis + content plan + interaction thesis), beautiful defaults, Linear-style app defaults |
| `taste-skill.md` | design-taste-frontend skill (Taste Skill) complete documentation | High-agency frontend Skill defining design variance, motion intensity, visual density parameters, anti-AI-slop rules, and creative toolbox (magnetic buttons, bento grids, glassmorphism, etc.) |
| `mcp-vs-cli.md` | In-depth technical research report on MCP vs CLI | Standalone technical analysis covering terminology, historical evolution, core architecture, decision matrix, security considerations, scalability, and developer experience comparison, with Mermaid architecture diagrams |

These records authentically showcase the full picture of creative development with AI — not just the final product, but the process of direction changes, design trade-offs, iterative refinement, and occasional detours. For developers curious about "what's it actually like to build something with AI?", this is the most valuable reference material.

## 📄 License

MIT
