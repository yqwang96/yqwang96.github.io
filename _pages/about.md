---
permalink: /
layout: archive
title: "Yinquan WANG / 王印权"
excerpt: "Reinforcement Learning · Operations Research · Agentic AI"
author_profile: true
classes: wide
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="hero-copy">
    <p class="home-eyebrow">DATA SCIENTIST · RESEARCHER</p>
    <h1>Learning and optimization for<br><span>real-world decision systems.</span></h1>
    <p class="home-lead">I work at the intersection of reinforcement learning, operations research, and agentic AI. My research turns complex decisions in transportation and industrial systems into models that can learn, optimize, and operate at scale.</p>
    <div class="home-actions">
      <a class="btn btn--primary" href="/projects/">Explore projects</a>
      <a class="btn btn--light-outline" href="/cv/">View CV</a>
    </div>
  </div>
  <aside class="hero-about">
    <div class="profile-contact">
      <img src="/images/profile.png" alt="Yinquan Wang">
      <div><span>About me</span><p>Beijing, China</p></div>
    </div>
    <p>I received my Ph.D. in System Science from Beijing Jiaotong University in June 2024. My doctoral research focused on passenger-driver matching and vehicle dispatch in ride-sourcing markets. I now work as a data scientist in Beijing, developing data-driven decision systems for industrial control, operational optimization, and agentic AI.</p>
    <p>I am interested in research collaborations around optimization agents, reinforcement learning with verifiable rewards, open-source solvers, and learning-augmented operations research.</p>
    <div class="contact-list">
      <a href="mailto:bjtuwangyq@bjtu.edu.cn">Email</a>
      <a href="https://github.com/yqwang96">GitHub</a>
      <a href="http://orcid.org/0000-0001-8845-9665">ORCID</a>
    </div>
  </aside>
</section>

## Research focus

<div class="focus-grid">
  <article class="focus-card">
    <span class="card-index">01</span>
    <h3>Agentic AI & RL Post-training</h3>
    <p>Tool-using agents for data science and optimization, with an emphasis on trajectory synthesis, verifiers, RLVR, and reliable execution.</p>
  </article>
  <article class="focus-card">
    <span class="card-index">02</span>
    <h3>Learning-augmented Optimization</h3>
    <p>Reinforcement learning, predict-then-optimize, and solver-based decision systems for dynamic and large-scale problems.</p>
  </article>
  <article class="focus-card">
    <span class="card-index">03</span>
    <h3>Transportation & Industrial Intelligence</h3>
    <p>Data-driven matching, dispatching, scheduling, industrial control, and simulation for operational systems.</p>
  </article>
</div>

## Selected work

<div class="work-grid">
  <article class="work-card work-card--blue">
    <p class="work-tag">URBAN MOBILITY</p>
    <h3><a href="/projects/project-1">Sharing mobility intelligence</a></h3>
    <p>Demand analysis, travel-pattern mining, forecasting, and reinforcement-learning dispatch for shared-mobility operations.</p>
    <div class="metric-row"><span><strong>+4.15%</strong> response rate</span><span><strong>+7.30%</strong> platform revenue</span></div>
  </article>
  <article class="work-card work-card--green">
    <p class="work-tag">INDUSTRIAL OPTIMIZATION</p>
    <h3>Production scheduling</h3>
    <p>Scheduling and decision-support systems deployed across multiple manufacturing plants, translating operational constraints into usable plans.</p>
    <div class="metric-row"><span><strong>3→1 months</strong> development</span><span><strong>+1%</strong> material utilization</span></div>
  </article>
  <article class="work-card work-card--orange">
    <p class="work-tag">INDUSTRIAL CONTROL</p>
    <h3><a href="/projects/project-5">Intelligent District Heating Control</a></h3>
    <p>Forecasting, pump-frequency optimization, and safety-aware control recommendations for heat-exchange stations and operators.</p>
    <div class="metric-row"><span><strong>7%</strong> heat saving</span><span><strong>10%</strong> electricity saving</span><span><strong>5%</strong> fewer complaints</span></div>
  </article>
  <article class="work-card work-card--purple">
    <p class="work-tag">AGENTIC AI</p>
    <h3><a href="/projects/project-4">Data Science & Operations Research Agents</a></h3>
    <p>Agent workflows for research automation, enterprise data QA, optimization modeling, tool execution, and verifiable post-training.</p>
    <div class="metric-row"><span><strong>CodeAct</strong> + tools</span><span><strong>Verifier</strong> + RLVR</span></div>
  </article>
</div>

<p class="section-link"><a href="/projects/">View all projects →</a></p>

## Selected publications

<div class="publication-list">
  <article>
    <span>2024 · IEEE T-ITS</span>
    <h3><a href="/publication/paper-number-4">Promoting Collaborative Dispatching in the Ride-Sourcing Market With a Third-Party Integrator</a></h3>
  </article>
  <article>
    <span>2024 · Computers & Industrial Engineering</span>
    <h3><a href="/publication/paper-number-3">Reinforcement Learning-Based Order-Dispatching Optimization in Ride-Sourcing Service</a></h3>
  </article>
  <article>
    <span>2023 · Journal of Central South University</span>
    <h3><a href="/publication/paper-number-2">Order Dispatching Optimization in Ride-Sourcing Market by Considering Cross Service Modes</a></h3>
  </article>
</div>

<p class="section-link"><a href="/publications/">View all publications →</a></p>

## Latest writing

<div class="latest-list">
{% for post in site.posts limit:5 %}
  <a href="{{ post.url }}">
    <time>{{ post.date | date: "%Y.%m.%d" }}</time>
    <span>{{ post.title }}</span>
  </a>
{% endfor %}
</div>
