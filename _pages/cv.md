---
layout: archive
title: "王印权｜个人简历"
permalink: /cv/
author_profile: false
cv_page: true
redirect_from:
  - /resume
---

<article class="cv-page" aria-label="王印权个人简历">
  <header class="cv-hero">
    <div class="cv-hero__identity">
      <h1>王印权</h1>
      <p class="cv-hero__focus">Agentic AI · 强化学习 · 工业智能化与模型部署</p>
      <p class="cv-hero__contact">
        <span>北京</span>
        <a href="tel:+8619801208423">+86-198-0120-8423</a>
        <a href="mailto:yinquanwang@qq.com">yinquanwang@qq.com</a>
        <a href="https://github.com/yqwang96">github.com/yqwang96</a>
        <a href="https://yqwang96.github.io">yqwang96.github.io</a>
      </p>
    </div>
    <div class="cv-hero__actions" aria-label="简历操作">
      <button type="button" onclick="window.print()">打印 / 保存 PDF</button>
      <a href="/files/WANGYinquan-CV-2026.html">独立打印版</a>
    </div>
  </header>

  <section class="cv-section cv-summary" aria-labelledby="cv-summary-title">
    <h2 id="cv-summary-title">个人简介</h2>
    <p>系统科学博士，聚焦 Agentic AI、强化学习与工业智能化落地。具备企业级 Agent Runtime / Harness、Context Engineering、RAG / GraphRAG、Agent RLVR 及 CUDA / 昇腾异构推理服务经验；完成供热控制、煤矿安全等项目从需求分析、数据治理、模型训练、服务部署、系统集成到生产效果复盘的端到端交付。博士阶段研究强化学习与运筹优化，发表 SCI 论文 4 篇。</p>
  </section>

  <section class="cv-section" aria-labelledby="cv-skills-title">
    <h2 id="cv-skills-title">专业技能</h2>
    <div class="cv-skill-grid">
      <p><strong>Agent 系统</strong><span>Agent Runtime / Harness、ReAct、CodeAct、Planner–Executor、Multi-Agent、Context Engineering、Tool Protocol、Skills、RAG / GraphRAG、Checkpoint、Human-in-the-loop</span></p>
      <p><strong>强化学习与后训练</strong><span>DQN、PPO、Actor-Critic、多智能体强化学习、GRPO、RLVR、LoRA / PEFT、Verifier、Reward Shaping、Curriculum、Trajectory Evaluation</span></p>
      <p><strong>数据科学与运筹</strong><span>LightGBM、XGBoost、时序预测、异常检测、PyTorch、PuLP / CBC、CPLEX / DOcplex、调度、匹配、策略优化与仿真评估</span></p>
      <p><strong>部署与工程</strong><span>Python、SQL、FastAPI / Flask、React、PostgreSQL / MySQL、Docker、vLLM、Ascend-vLLM、CUDA、CANN / torch-npu、WebSocket / SSE、OPC UA</span></p>
    </div>
  </section>

  <section class="cv-section" aria-labelledby="cv-experience-title">
    <h2 id="cv-experience-title">工作经历</h2>
    <div class="cv-compact-list">
      <article class="cv-compact-item">
        <div><h3>中国联合网络通信有限公司北京人工智能科技中心</h3><span>数据科学家</span></div>
        <time>2025.08 — 至今</time>
        <p>负责 Agent 系统架构、LLM 应用、预测模型与强化学习研发，参与业务需求梳理、系统集成、生产部署及上线效果评估。</p>
      </article>
      <article class="cv-compact-item">
        <div><h3>联通数科数据智能事业部</h3><span>数据科学家</span></div>
        <time>2024.07 — 2025.08</time>
        <p>参与工业互联网、时序预测、异常检测与智能体项目，完成算法原型、模型服务和业务应用的工程化落地。</p>
      </article>
    </div>
  </section>

  <section class="cv-section cv-projects" aria-labelledby="cv-projects-title">
    <h2 id="cv-projects-title">核心项目</h2>

    <article class="cv-entry">
      <header class="cv-entry__header">
        <div><h3>企业级数据科学 Agent 平台</h3><span>核心开发</span></div>
        <time>2025.06 — 至今</time>
      </header>
      <p class="cv-entry__tags">Agent Runtime · Context Engineering · Tool / Skill · Docker Sandbox · vLLM / Ascend-vLLM</p>
      <ul>
        <li>面向团队数据分析与业务交付研发企业级 Agent 平台，支持自然语言驱动的数据探索、代码执行、机器学习建模、可视化与报告生成，支撑团队 100+ 成员日常使用。</li>
        <li>在不同交付场景中实践单主 Agent Harness 与 Orchestrator 驱动的多 Agent 架构，设计任务规划、工具调度、状态管理、执行反馈、错误恢复与终止判断机制。</li>
        <li>构建分层 Context Engineering 体系，动态组织系统规则、工具 Schema、项目文件、执行输出、历史经验和压缩摘要，支撑长任务连续执行与上下文裁剪。</li>
        <li>设计 Tool Protocol、Skill 与 Workspace 机制，接入 Python、SQL、检索、文件、模型训练和报告工具，形成多用户、多项目及文件 / 数据集 / 模型 / Artifact 资产闭环。</li>
        <li>实现后台任务、WebSocket / SSE 进度推送、断线续传、检查点恢复和持久化审批；通过 Docker 沙箱、路径约束、危险操作拦截和资源限制保障自动执行安全。</li>
        <li>在 NVIDIA CUDA 和华为昇腾环境部署 vLLM / Ascend-vLLM 推理服务，以 OpenAI 兼容 API 接入 Agent，统一管理模型、Base URL、Context Window 与 Provider 配置。</li>
      </ul>
    </article>

    <article class="cv-entry">
      <header class="cv-entry__header">
        <div><h3>供热预测控制与工业智能体</h3><span>核心开发</span></div>
        <time>2025.05 — 至今</time>
      </header>
      <p class="cv-entry__tags">LightGBM · Qwen2.5 LoRA · Text-to-SQL · OPC UA · 安全控制闭环</p>
      <ul>
        <li>面向供热企业建设预测控制与工业智能体平台，打通 OPC UA、室温采集和气象 API，接入 8,000+ 工业点位，覆盖 130+ 换热站和 200+ 二次网回路。</li>
        <li>基于 LightGBM 构建站点级供水温度和循环泵频率小模型，融合历史工况、天气、室温、周期与相似工况特征；生产模型 R² 达 0.98，室温控制偏差 ≤ ±0.5°C。</li>
        <li>从 144 个站点、3 个供暖季构建 8,185 条领域样本，基于 Qwen2.5-0.5B 与 LoRA 开展领域适应；温度 MAE 由 3.43°C 降至 1.10°C、频率 MAE 由 2.12Hz 降至 0.51Hz，结构化解析率由 57% 提升至 100%。</li>
        <li>构建供热问数 Agent，支持 Schema 自动同步、业务知识维护、Text-to-SQL、多轮工具调用、结果解释和图表生成；以只读权限、SQL 校验、行数限制和审计日志控制查询风险。</li>
        <li>搭建异常诊断 Skill 框架，将异常记录与温度、压力、频率、能耗、天气、室温和历史控制指令关联，输出异常等级、可能根因和排查建议；知识规则与工具流程已完成，现场闭环验证持续迭代。</li>
        <li>建立“预测—策略生成—安全校验—人工审批—指令下发—运行监控—偏差诊断”闭环，通过 dry-run、调整步长、设备模式检查和失败回滚约束控制风险；系统实现约 7% 节热、至少 10% 节电、投诉量下降 5%。</li>
      </ul>
    </article>

    <article class="cv-entry cv-entry--page-2">
      <header class="cv-entry__header">
        <div><h3>OR-Agent-R1：面向运筹优化的 Agent RLVR 训练系统</h3><span>独立研究</span></div>
        <time>2026.06 — 至今</time>
      </header>
      <p class="cv-entry__tags">Qwen2.5-7B · LoRA / GRPO · RLVR · PuLP / CBC · Verifier · 6×A100</p>
      <ul>
        <li>构建运筹优化 Agent 的结构化执行环境，通过 XML Action Protocol 支持问题抽取、数学建模、PuLP 代码生成、CBC 求解、错误修正和最终回答。</li>
        <li>将动作格式、状态转移、代码执行、Solver Status 与 Objective Match 拆分为分层可验证奖励，并采用 solve_format → solver → objective Curriculum 缓解工具型 Agent 的奖励稀疏。</li>
        <li>基于 Qwen2.5-7B-Instruct、LoRA 与 GRPO 完成 6×A100 分布式训练，建立训练轨迹诊断、Checkpoint 选择、错误分类和逐题配对评估流程。</li>
        <li>针对环境依赖、动作解析、代码兼容、Verifier 偏差与 Reward Hacking 建立 Canary 测试；完善 grouped-question 切分、Split Manifest 和跨来源重复审计，降低评估泄漏风险。</li>
      </ul>
    </article>

    <article class="cv-entry">
      <header class="cv-entry__header">
        <div><h3>煤矿瓦斯异常征兆识别系统</h3><span>核心研发</span></div>
        <time>2025.02 — 2025.10</time>
      </header>
      <p class="cv-entry__tags">多传感器时序 · Recurrence Plot / CWT · ResNet18 · ClickHouse · Flask · Docker</p>
      <ul>
        <li>面向煤矿安全生产构建多传感器异常检测系统，识别煤与瓦斯突出、冒顶片帮等 6 类典型异常征兆，完成需求分析、数据治理、模型研发、服务部署和现场效果评估。</li>
        <li>将 72 小时多变量时序转换为递归图和 CWT 时频图，设计多路 ResNet18 双通道融合模型，刻画异常前兆的波动、极值和趋势演化；模型 AUC 达 96.65%，召回率较单视图基线提升 105%。</li>
        <li>将模型封装为在线预警服务，对接 ClickHouse 实时数据流，通过 Flask API 与 Docker 完成生产部署、日志监控和业务系统集成，覆盖全省 30+ 重点工作面。</li>
        <li>双通道融合模型 AUC 达 96.65%，召回率较单视图基线提升 105%，形成“实时接入—特征构建—在线推理—风险预警—现场反馈”的端到端闭环。</li>
      </ul>
    </article>
  </section>

  <section class="cv-section" aria-labelledby="cv-rl-title">
    <h2 id="cv-rl-title">强化学习与运筹优化研究</h2>
    <ul class="cv-research-list">
      <li>博士阶段围绕网约车订单派发、车辆调度和多平台协作开展强化学习与运筹优化研究，建立需求生成、订单匹配、车辆状态转移、策略训练和多算法对比的仿真评估体系。</li>
      <li>设计融合长期价值估计与业务约束的订单派发、车辆重调度策略，实验中将订单响应率提升 4.15%、平台收入提升 7.30%。</li>
      <li>研究路径由经典 DQN / PPO / Actor-Critic 与多智能体强化学习，延伸到工具型 Agent 的 GRPO / RLVR、可执行环境、Verifier 和可验证奖励。</li>
    </ul>
  </section>

  <section class="cv-section" aria-labelledby="cv-education-title">
    <h2 id="cv-education-title">教育背景</h2>
    <div class="cv-compact-list">
      <article class="cv-compact-item">
        <div><h3>北京交通大学｜系统科学学院</h3><span>系统科学 · 硕博连读</span></div>
        <time>2018.09 — 2024.06</time>
        <p>研究方向：网约出行市场运营管理、强化学习与运筹优化；系统科学一流学科。</p>
      </article>
      <article class="cv-compact-item">
        <div><h3>日本广岛大学｜国际协力研究科</h3><span>国家公派访问博士生</span></div>
        <time>2022.05 — 2023.05</time>
        <p>研究方向：网约出行市场运营管理与交通运输规划。</p>
      </article>
      <article class="cv-compact-item">
        <div><h3>青岛理工大学｜机械与汽车工程学院</h3><span>交通工程 · 本科</span></div>
        <time>2014.09 — 2018.06</time>
      </article>
    </div>
  </section>

  <section class="cv-section cv-bottom-grid" aria-label="论文与荣誉">
    <div>
      <h2>代表论文</h2>
      <ol class="cv-publications">
        <li><em>Reassignment Algorithm of the Ride-Sourcing Market Based on Reinforcement Learning</em>, IEEE T-ITS, 2023.</li>
        <li><em>Promoting Collaborative Dispatching in the Ride-Sourcing Market with a Third-Party Integrator</em>, IEEE T-ITS, 2024.</li>
        <li><em>Reinforcement Learning-Based Order-Dispatching Optimization in Ride-Sourcing Service</em>, C&amp;IE, 2024.</li>
        <li><em>Order Dispatching Optimization in Ride-Sourcing Market by Considering Cross Service Modes</em>, JCSU, 2023.</li>
      </ol>
    </div>
    <div>
      <h2>荣誉奖励</h2>
      <ul class="cv-honors">
        <li>2025 年度奋斗者，中国联通数科</li>
        <li>第二届数字中国创新大赛全国二等奖，2020</li>
        <li>中国研究生数学建模竞赛全国三等奖，2019</li>
        <li>国家留学基金委公派联合培养博士奖学金，2021</li>
      </ul>
    </div>
  </section>
</article>
