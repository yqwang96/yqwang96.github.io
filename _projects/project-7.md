---
title: "Xiaoshan Traffic Simulation and Prediction Platform"
collection: projects
type: "Traffic Simulation, Forecasting, and Decision Support"
permalink: /projects/project-7
role: "Data Scientist and Developer"
date: 2025-08-13
excerpt: "A city-intersection simulation and prediction platform that connects road-network data, signal-control scenarios, traffic forecasts, anomaly warnings, and report-oriented decision support."
---

A data-driven traffic operations platform for simulating intersection strategies, monitoring traffic conditions, evaluating forecasts, and producing decision-ready reports.

---

## Project brief

The Xiaoshan Traffic Simulation and Prediction Platform brings network data, intersection geometry, signal-control scenarios, traffic observations, and model forecasts into one operational workflow. Users can inspect road and intersection conditions, compare simulation plans, evaluate prediction quality, and identify abnormal traffic-flow patterns from a dashboard-facing API layer.

The platform is designed for repeated planning and operations work rather than a one-off simulation. It supports scenario-based evaluation across workdays, weekends, and holiday contexts, with traceable results at the intersection and directional-flow level.

## Platform workflow

<div class="project-flow" aria-label="Xiaoshan traffic platform workflow">
  <div><strong>Network and road data</strong><span>Intersections, lanes, directions, and road links</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Scenario simulation</strong><span>Signal plans, policies, and day-type settings</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Prediction and statistics</strong><span>Directional flow, accuracy, and warnings</span></div>
  <i aria-hidden="true">→</i>
  <div><strong>Decision reports</strong><span>Intersection comparison and operational insights</span></div>
</div>

<table class="project-data-table">
  <thead><tr><th>Capability</th><th>Platform contribution</th></tr></thead>
  <tbody>
    <tr><td>Intersection and road modeling</td><td>Maintains road-network topology, road status, route geometry, lane counts, and directional attributes for scenario analysis.</td></tr>
    <tr><td>Scenario simulation</td><td>Evaluates traffic-control and signal-plan alternatives under workday, weekend, and holiday conditions.</td></tr>
    <tr><td>Forecasting and evaluation</td><td>Provides directional-flow forecasts, history, and report-oriented accuracy metrics for comparing model behavior.</td></tr>
    <tr><td>Operational alerts</td><td>Surfaces abnormal traffic-flow intervals from actual and forecast signals to help teams focus investigation.</td></tr>
  </tbody>
</table>

<figure class="project-feature-figure project-feature-figure--traffic">
  <img src="/images/project-7/traffic-intersection-simulation.png" alt="Xiaoshan traffic intersection simulation visualization">
  <figcaption>Intersection-level traffic-simulation visualization from the Xiaoshan platform.</figcaption>
</figure>

## Technology and methods

FastAPI services, MySQL-backed traffic data, simulation inputs and scenario management, directional-flow statistics, forecasting evaluation APIs, anomaly warnings, and dashboard-oriented reporting.
