---
title: "Data Science and Operations Research Agents"
collection: projects
type: "Agentic AI and Post-training"
permalink: /projects/project-4
role: "Developer and Researcher"
date: 2025-06-01
---

Tool-using AI agents for data analysis, enterprise knowledge work, mathematical optimization, artifact generation, and verifier-driven post-training.

---

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
