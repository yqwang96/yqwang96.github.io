---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<p class="cv-download">Download: <a href="https://yqwang96.github.io/files/WANGYinquan-CV.pdf">Chinese CV</a> · <a href="https://yqwang96.github.io/files/WANGYinquan-CV-En.pdf">English CV</a></p>

## Profile

Data scientist and researcher working at the intersection of reinforcement learning, operations research, and agentic AI. Experienced in translating research prototypes into decision systems for transportation, manufacturing, district heating, industrial analytics, and tool-using AI agents.

## Experience

**Data Scientist, R&D Department, Beijing Medical Health Large Model Co., Ltd.** <span class="cv-date">2024.07-present</span><br>
Industrial internet, operational optimization, deep learning, large language models, and data-science agents.

**Assistant Engineer, Beijing Transportation Commission** <span class="cv-date">2019.03–2019.06</span><br>
Contributed to the *Specifications for Labeling Text Information of Transportation Video Images*.

## Education

**Ph.D. in System Science, Beijing Jiaotong University** <span class="cv-date">2019–2024</span><br>
Dissertation: passenger–driver matching and vehicle dispatch algorithms in ride-sourcing markets.

**Visiting Ph.D. Researcher, Hiroshima University** <span class="cv-date">2022–2023</span>

**M.S. in Transportation Planning and Management, Beijing Jiaotong University** <span class="cv-date">2018–2019</span><br>
Continued in the combined master's and doctoral program.

**B.Eng. in Traffic Engineering, Qingdao University of Technology** <span class="cv-date">2014–2018</span>

## Research and engineering

- **Agentic AI and post-training:** CodeAct, ReAct, MCP-style tool integration, tool-use environments, trajectory synthesis, verifiers, SFT, RLHF, PPO, GRPO, and RLVR.
- **Operations research:** mathematical programming, scheduling, matching, vehicle routing, column generation, predict-then-optimize, CPLEX/DOcplex, and open-source solvers.
- **Machine learning:** PyTorch, scikit-learn, LightGBM, time-series forecasting, causal inference, and reinforcement learning.
- **Systems and applications:** Python, SQL, Spark, Hadoop, vLLM, RAG, Django, React, simulation, and data visualization.

## Agentic AI projects

- **Data science agent platform:** multi-user agent workflow with project workspaces, model/provider configuration, file upload, artifact rendering, and human approval recovery for long-running tool calls.
- **Business data QA agent:** single-agent chain for enterprise data query, knowledge QA, artifact generation, and platform-function orchestration.
- **OR-Agent / solver agent research:** tool-using optimization agents that translate natural-language tasks into mathematical models, call solvers, inspect outputs, and learn from verifier-driven feedback.
- **Post-training environments:** CodeAct-style trajectories, executable tools, verifiable rewards, and RLVR-oriented data construction for reliable research and analysis agents.

## Selected impact

- Developed reinforcement-learning dispatch methods that improved ride-sourcing response rate by **4.15%** and platform revenue by **7.30%**.
- Built industrial scheduling systems deployed across multiple factories, reducing development time from **three months to one** and improving steel utilization by **1%**.
- Developed an intelligent district-heating solution covering **130+ heat-exchange stations** and **8,000+ industrial data points**, achieving at least **10% electricity savings**.
- Delivered a gas-anomaly detection solution whose false-alarm rate decreased by **25%**, subsequently expanded to **33+ mines** and **340+ working faces**.
- Built agentic AI prototypes that combine file/context management, tool execution, approval checkpoints, artifact generation, and optimization/data-analysis workflows.

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Projects

<ul>{% for post in site.projects %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Honors

- National Second Prize, Digital China Innovation Competition, 2020.
- National Third Prize, Mathematical Contest in Modeling for Chinese Graduate Students, 2019.
- Beijing Jiaotong University Doctoral Scholarship, 2019–2021.
