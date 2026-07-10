---
title: "Data Science and Operations Research Agents"
collection: projects
type: "Agentic AI and Post-training"
permalink: /projects/project-4
role: "Developer and Researcher"
date: 2025-06-01
excerpt: "Tool-using AI agents that connect data analysis, enterprise knowledge work, optimization solvers, artifacts, and verifier-driven post-training into reliable decision workflows."
---

Tool-using AI agents for data analysis, enterprise knowledge work, mathematical optimization, artifact generation, and verifier-driven post-training.

---

## Project brief

This project family builds AI agents that can do more than converse: they inspect files, query data, write and run code, invoke optimization solvers, create reports, and check whether an answer is actually valid. The focus is on reliable end-to-end work for data-science and operations-research tasks, including approval checkpoints and recovery when long-running tool calls are interrupted.

It combines practical agent systems with research on executable trajectories, verifiers, and reinforcement learning with verifiable rewards. The result is a platform for studying and deploying agents that can produce auditable artifacts and support real operational decisions.

## Architecture

<div class="agent-architecture" aria-label="Data science and operations research agents architecture">
  <section class="agent-architecture__context">
    <span>Context and data</span>
    <div>Project workspaces</div><div>Files and datasets</div><div>Enterprise knowledge</div><div>Domain APIs</div>
  </section>
  <section class="agent-architecture__core">
    <span>Agent runtime</span>
    <div class="agent-architecture__core-grid"><div><strong>Planner</strong><small>Task decomposition and tool selection</small></div><div><strong>Session and memory</strong><small>Persistent context, checkpoints, and recovery</small></div><div><strong>Policy layer</strong><small>Permissions, safety rules, and approval gates</small></div></div>
  </section>
  <section class="agent-architecture__tools">
    <span>Execution and reasoning tools</span>
    <div>Python and SQL</div><div>Retrieval and data QA</div><div>Optimization solvers</div><div>Reports, charts, and artifacts</div>
  </section>
  <section class="agent-architecture__trust">
    <div><strong>Verifier</strong><small>Feasibility, constraints, and output checks</small></div><i aria-hidden="true">↔</i><div><strong>Human approval</strong><small>Review state-changing or high-risk actions</small></div><i aria-hidden="true">↔</i><div><strong>Post-training</strong><small>CodeAct trajectories and RLVR signals</small></div>
  </section>
  <section class="agent-architecture__outputs">
    <span>Auditable outputs</span>
    <div>Analysis</div><div>Models</div><div>Optimization plans</div><div>Reusable artifacts</div>
  </section>
</div>

<table class="project-data-table">
  <thead><tr><th>Architecture layer</th><th>Role in a data-science and OR workflow</th></tr></thead>
  <tbody>
    <tr><td>Context and data</td><td>Keeps files, project state, knowledge, and business data available to the agent without losing ownership boundaries.</td></tr>
    <tr><td>Agent runtime</td><td>Plans multi-step work, preserves long-running sessions, and routes tasks to the right tool.</td></tr>
    <tr><td>Execution tools</td><td>Turns reasoning into runnable Python/SQL, retrieval, solver calls, visualizations, and deliverable artifacts.</td></tr>
    <tr><td>Trust loop</td><td>Verifies results, requests human approval where needed, and creates data for reliable post-training.</td></tr>
  </tbody>
</table>

## Overview

This project family explores how large language models can become reliable workers for data science and operations research tasks. Instead of treating the model as a pure chatbot, the agent is connected to files, Python/SQL execution, domain tools, optimization solvers, approval checkpoints, and persistent project context.

The goal is to make agents that can inspect data, formulate plans, call tools, verify intermediate outputs, recover from interrupted executions, and deliver reusable artifacts such as reports, code, charts, and optimization results.

## Core directions

1. **Data science agents**
   - File and folder upload, project-scoped workspaces, artifact rendering, and long-running tool execution.
   - Multi-provider model configuration, including API keys, base URLs, model names, and context-window settings.
   - Human approval flows for risky tool calls, with persistent recovery after page refresh or interrupted sessions.

2. **Enterprise data QA agents**
   - Single-agent chains for business data query, knowledge retrieval, artifact generation, and platform-function orchestration.
   - Integration with existing enterprise data APIs and permission-aware workflows.
   - Structured responses that support both question answering and operational actions.

3. **Operations research agents**
   - Agents that translate natural-language optimization tasks into mathematical programs.
   - Solver-backed execution using open-source and commercial optimization tools.
   - Verification loops that check feasibility, objective values, constraints, and result interpretation.

4. **RL post-training and verifiable rewards**
   - CodeAct-style trajectories for executable reasoning.
   - Tool-use environments and verifier-driven reward signals.
   - Data construction for SFT, RLVR, and agent reliability evaluation.

## Technical stack

- **Agent patterns:** CodeAct, ReAct, planning-execution loops, checkpoint recovery, and approval-gated tool use.
- **Tools:** Python, SQL, file-system operations, chart generation, document/report creation, retrieval, and optimization solvers.
- **Backend:** FastAPI/Django-style services, persistent sessions, project workspaces, and user-level settings.
- **Frontend:** React interfaces for chat, artifacts, model settings, approvals, and project management.

## Research value

The work connects agentic AI with classical decision intelligence. For data science, the agent must reason with messy files, execute code, and produce auditable outputs. For operations research, the agent must move from language to formal models, call solvers correctly, and verify whether a result is actually usable.

This creates a practical testbed for studying reliable tool use, verifiable rewards, and learning-augmented optimization.
