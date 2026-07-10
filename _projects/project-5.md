---
title: "Intelligent District Heating Control and Heating Agent"
collection: projects
type: "Industrial Control, Agentic AI, and Optimization"
permalink: /projects/project-5
role: "Data Scientist and Developer"
date: 2025-09-01
excerpt: "An end-to-end district-heating intelligence system combining OPC data collection, LightGBM temperature/frequency models, safe control execution, and a tool-using heating agent across 130+ stations."
---

An industrial decision-support system that helps district-heating operators forecast demand, optimize equipment settings, and balance energy efficiency with operating safety.

---

## Project brief

Intelligent District Heating Control turns station telemetry, weather signals, and network operating data into daily control recommendations. The system forecasts heat load and supply-return temperatures, then evaluates pump-frequency and operating-setpoint choices against efficiency and safety constraints.

The project was designed for real operational environments where a recommendation must be explainable and conservative, not merely optimal on paper. It supports control-room teams with traceable forecasts, anomaly-aware suggestions, and scenario comparisons before settings are changed.

The system also includes a domain-specific heating agent. The agent turns natural-language questions and control requests into a governed workflow: it queries station and room-temperature data, retrieves heating knowledge, invokes prediction or control tools, asks for confirmation when an action is risky, and records the result for later review and model improvement.

## From OPC data to control action

<div class="project-flow" aria-label="Heating control workflow">
  <div><strong>OPC collection</strong><span>Station telemetry and equipment status</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Data pipeline</strong><span>Validation, aggregation, and features</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Model service</strong><span>Load and temperature prediction</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Control review</strong><span>Safety limits and operator approval</span></div>
</div>

<table class="project-data-table">
  <thead><tr><th>Layer</th><th>What it does</th><th>Operational output</th></tr></thead>
  <tbody>
    <tr><td>Data acquisition</td><td>Collects station and equipment telemetry through an OPC-connected workflow.</td><td>Reliable time-series inputs for analysis and control.</td></tr>
    <tr><td>Model training</td><td>Learns short-term load and temperature behavior from historical operating data.</td><td>Station-level forecasts and control targets.</td></tr>
    <tr><td>Optimization</td><td>Evaluates pump-frequency and setpoint choices against energy and safety constraints.</td><td>Auditable operating recommendations.</td></tr>
    <tr><td>Deployment</td><td>Applies safety checks and keeps an operator in the decision loop.</td><td>Controlled execution and traceable follow-up.</td></tr>
  </tbody>
</table>

## Heating agent architecture

<div class="project-flow" aria-label="Heating agent architecture">
  <div><strong>Interaction layer</strong><span>Web chat, Feishu/DingTalk notifications, and REST APIs</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>ReAct agent</strong><span>Intent parsing, planning, session context, and tool selection</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Domain tools</strong><span>Station query, room temperature, weather, database, OPC, control, and scheduling</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Heating systems</strong><span>PostgreSQL, heating-cli, OPC UA, model services, and knowledge base</span></div>
</div>

<table class="project-data-table">
  <thead><tr><th>Agent capability</th><th>Implementation focus</th><th>Governance and evidence</th></tr></thead>
  <tbody>
    <tr><td>Intelligent data QA</td><td>Schema-aware query generation, few-shot examples, SQL validation, and station/history lookup.</td><td>Returns structured answers grounded in operational data.</td></tr>
    <tr><td>Control planning</td><td>Combines model predictions, weather, room-temperature feedback, current device state, and control limits.</td><td>Produces a dry-run decision before any field write.</td></tr>
    <tr><td>OPC execution</td><td>Reads live state and writes temperature or pump-frequency targets through OPC UA.</td><td>Checks auto mode, value ranges, excluded zones, and adjustment steps.</td></tr>
    <tr><td>Approval and recovery</td><td>Routes multi-station, large-step, or high-risk actions to a pending confirmation queue.</td><td>Records who confirmed, what was executed, and whether rollback was needed.</td></tr>
    <tr><td>Scheduled operations</td><td>Parses natural-language tasks into cron-based checks and conditional actions.</td><td>Reuses the same confirmation and execution rules as interactive requests.</td></tr>
  </tbody>
</table>

## Control safety and execution

The control path is deliberately layered. A dry-run first resolves the station and loop, reads the live OPC state, applies temperature/frequency limits, checks automatic-control mode and excluded zones, and validates the permitted adjustment step. Only after the decision is ready can a controlled write proceed. Temperature is applied before frequency; if frequency execution fails, the executor attempts to roll back the temperature and records the outcome.

This makes the agent an operational coordinator rather than an unrestricted chatbot: the language model proposes and explains actions, while deterministic control services enforce the boundary around the physical system.

## Model deployment and continuous improvement

The deployment layer manages temperature and frequency model artifacts, model metadata, station/loop mappings, upload and version information, and runtime monitoring. The production services use LightGBM-based models for temperature and frequency prediction, with post-processing and target scaling before control instructions are generated.

After control execution, the instruction and observed response are recorded as training evidence. A post-training monitor can collect new control samples, combine them with similar historical samples, lock a model against concurrent updates, continue training when the sample threshold is met, and update the model metadata. This creates a feedback loop from field behavior to model maintenance instead of treating deployment as the end of the project.

<table class="project-data-table">
  <thead><tr><th>Evidence loop</th><th>System behavior</th></tr></thead>
  <tbody>
    <tr><td>Control sample</td><td>Stores control time, target temperature/frequency, model identity, and observed context.</td></tr>
    <tr><td>Training trigger</td><td>Checks available unused samples, model locks, feature completeness, and scheduling conditions.</td></tr>
    <tr><td>Continue training</td><td>Combines recent control samples with similar historical samples and continues the LightGBM model.</td></tr>
    <tr><td>Deployment record</td><td>Persists the updated artifact and model metadata for monitoring, rollback, and future comparison.</td></tr>
  </tbody>
</table>

## Core capabilities

- **Load and temperature forecasting:** estimates short-term heat demand and key temperature trajectories from historical operating and external signals.
- **Energy-aware optimization:** recommends pump-frequency and setpoint adjustments that reduce electricity use while respecting operational limits.
- **Safety-aware control support:** keeps recommendations within defined equipment and network constraints, with operator review before execution.
- **Operational monitoring:** brings station-level data, forecasts, and recommended actions into a common view for dispatch and follow-up analysis.

## Impact

The solution covers **130+ heat-exchange stations** and more than **8,000 industrial data points**. In deployment-oriented evaluation, it delivered at least **10% electricity savings** while supporting stable, safety-conscious operations.

## Model and deployment evidence

<div class="project-figure-grid">
  <figure>
    <img src="/images/project-5/room-temperature-comparison.png" alt="Heating-stage room-temperature comparison">
    <figcaption>Stage-level room-temperature comparison used to evaluate control performance.</figcaption>
  </figure>
  <figure>
    <img src="/images/project-5/room-temperature-window.png" alt="Fifteen-day rolling room-temperature statistics">
    <figcaption>15-day rolling-window statistics showing room-temperature performance over time.</figcaption>
  </figure>
</div>

## Technology and methods

Python, time-series forecasting, industrial data pipelines, optimization modeling, control rules, visualization, and human-in-the-loop operational workflows.
