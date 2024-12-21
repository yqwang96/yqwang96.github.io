---
title: "Ride-sourcing Gym"
collection: projects
type: "Simulation and Training Reinforcement Learning Environment"
permalink: /projects/project-2
role: "Developer"
date: 2022-11-30
---

A simulation environment for the ride-sourcing system that supports reinforcement learning-based dispatching algorithms, reposition algorithms, and space-time pricing algorithms.

---

With the rapid development of ride-hailing services, optimizing vehicle dispatching, order matching, and dynamic pricing models using intelligent methods has become a key focus for researchers. In this field, Reinforcement Learning (RL) has proven to be a powerful tool for tackling complex decision-making problems. However, most current research focuses on optimizing individual models, lacking a unified platform to explore the interactions and performance of multiple models working together. To address this gap, we have developed a specialized RL simulation environment for ride-hailing services, providing researchers with a unified, open, and flexible tool for their studies.

## **Project Background: Challenges and Opportunities**

In ride-hailing research, RL has been widely applied to the following three core problems:

1. **Vehicle Dispatching**: How to allocate vehicles to appropriate locations to meet future demand.
2. **Order Matching**: How to match users with the most suitable drivers to enhance service efficiency and user experience.
3. **Dynamic Pricing**: How to adjust prices based on the spatiotemporal distribution of demand to achieve market balance.

Although RL algorithms have shown excellent performance in these areas, researchers often study these problems independently, ignoring their interactions. For instance, dispatching strategies can influence the effectiveness of order matching models, while changes in dynamic pricing can create ripple effects on vehicle distribution and order matching. Currently, there is a lack of a research environment capable of considering these factors comprehensively, posing challenges to multi-model collaborative optimization research.

## **Key Features and Innovations of the Simulation Environment**

To address these challenges, we have designed and implemented a simulation environment that supports various RL-based dispatching and order-matching strategies. The key features and innovations of this simulation environment are as follows:

1. **Support for Multiple Order-Matching Paradigms**:
   - **Two-Stage Matching**: A dual-layer decision-making process based on preliminary order filtering and subsequent optimization.
   - **Value-Based Matching**: Matching decisions based on the long-term rewards of pairing orders with drivers, estimated through RL.

2. **Flexible Vehicle Dispatching Strategies**:
   - **Region-to-Region Dispatching**: Optimizing vehicle flows by analyzing order distribution across different regions.
   - **Point-to-Point Dispatching**: Creating precise vehicle distribution strategies for high-demand locations.

3. **Diverse Pricing Models**:
   - **Dynamic Spatiotemporal Pricing**: Real-time price adjustments to balance supply and demand.
   - **Order-Heterogeneity-Based Pricing**: Differentiated pricing strategies based on order characteristics such as trip distance and time of day.

4. **Open Algorithm Design and Benchmarking**:
   - The simulation environment provides researchers with flexible interfaces to design custom RL algorithms.
   - It includes various standard RL algorithms as benchmarks, enabling researchers to compare the performance of their innovations.

## **Research Value and Application Prospects**

This simulation environment is designed to offer researchers an efficient and flexible platform to explore advanced algorithms and strategies in the context of multi-model collaborative optimization. Its value is primarily reflected in the following aspects:

1. **Unified Research Platform**: Integrates research on vehicle dispatching, order matching, and pricing models, reducing the time researchers spend developing experimental environments.
2. **Algorithm Evaluation and Comparison**: Provides reliable benchmark models to help researchers evaluate the effectiveness of new algorithms.
3. **Enhanced Research Efficiency**: Enables rapid testing of different algorithms in complex dynamic environments, accelerating the translation of theoretical research into practice.

## **Future Work and Outlook**

In the future, we plan to further expand the functionality of the simulation environment in the following directions:
- **User Behavior Modeling**: Incorporating more realistic simulations of user decision-making behaviors (e.g., sensitivity to waiting times and price elasticity) to enhance the realism of the environment.
- **Multi-Agent Collaboration Research**: Supporting researchers in exploring multi-agent RL algorithms for ride-hailing applications.
- **Open Community and Collaboration**: Open-sourcing the simulation environment to attract more researchers and foster innovation in the ride-hailing domain.

Through this project, we aim to provide a powerful, flexible, and efficient research tool for researchers in the ride-hailing field, driving further advancements in RL technologies within this domain.
