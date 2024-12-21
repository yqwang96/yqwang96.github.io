---
title: "Reinforcement learning-based order-dispatching optimization in ride-sourcing service"
collection: publications
permalink: /publication/paper-number-3
excerpt: 'This research addresses the heterogeneity of passenger cancellation behavior and drivers work patterns in ride-sourcing dispatching problems by utilizing a discrete choice model and Gaussian mixture model, proposing a cooperative deep deterministic policy gradient (DDPG) algorithm for improved dispatching, and implementing a price incentive strategy for enhancing passenger loyalty, resulting in a 2% to 6% improvement in order response rate, a 3% to 9% increase in platform revenue, and a better passenger experience.'
date: 2024-05-10
venue: 'Computers and Industrial Engineering'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S0360835224003425'
# citation: 'Yinquan Wang, Huijun Sun, Ying Lv, Ximing Chang, Jianjun Wu, Reinforcement learning-based order-dispatching optimization in the ride-sourcing service, Computers & Industrial Engineering, 2024,110221.https://doi.org/10.1016/j.cie.2024.110221.'
---


I’m thrilled to share insights from my latest study: **"Reinforcement Learning-Based Order-Dispatching Optimization in Ride-Sourcing Services."** Published in *Computers & Industrial Engineering*, this work tackles one of the most persistent challenges in ride-sourcing platforms such as Uber, Lyft, and Didi—efficient order dispatching.

Let me take you behind the scenes of this research to discuss what we aimed to solve, the novel approaches we adopted, and why this study matters to the broader transportation and AI communities.

---

## The Problem at Hand

At its core, ride-sourcing platforms serve as the backbone of modern urban mobility. These platforms match passengers with drivers in real time, aiming to optimize both customer satisfaction and platform profitability. However, this seemingly simple process is fraught with challenges. Two key issues motivated this study:

1. **Passenger Cancellation Behavior:** Many dispatch algorithms ignore the fact that passengers have varying levels of tolerance for waiting times, leading to higher cancellation rates. For instance, a passenger traveling to a meeting may have a lower tolerance for delays compared to someone on a leisure trip.

2. **Driver Heterogeneity:** Drivers exhibit different working patterns based on their preferences and geographic locations. Some may work part-time in business districts during peak hours, while others drive full-time across broader areas.

Traditional dispatching algorithms often treat passengers and drivers as homogenous groups, leading to suboptimal matching and operational inefficiencies.

---

## A Novel Solution

![Research Framework](/images/paper-3/research-framework.png)

To address these challenges, my team proposed a **Reinforcement Learning (RL)-Based Dispatching Framework** using advanced models and algorithms to simulate real-world behaviors and optimize dispatching decisions. Here’s how we approached it:

### 1. Modeling Passenger Behavior with a Discrete Choice Model
We designed a **Discrete Choice Model** to simulate passengers’ cancellation decisions. The model incorporates factors such as waiting time, trip cost, and available alternatives (e.g., public transit). This approach recognizes the variability in passenger preferences and captures their likelihood of staying with the platform.

### 2. Capturing Driver Patterns with Gaussian Mixture Models (GMM)
Using trajectory data, we employed **Gaussian Mixture Models** to classify drivers into distinct groups based on their historical working patterns. This classification allowed us to design personalized dispatching strategies tailored to each driver group.

### 3. Cooperative Deep Deterministic Policy Gradient (DDPG) Algorithm
At the heart of our system is a **Cooperative DDPG Algorithm** that uses multiple neural networks to:
- Learn optimal dispatching strategies for each driver group.
- Coordinate all vehicles through a centralized network, ensuring global efficiency.

This multi-agent RL framework empowers the system to adapt to dynamic market conditions while balancing platform revenue, driver satisfaction, and passenger experience.

### 4. Price Incentives for Passenger Retention
To reduce cancellations, we introduced a **price incentive strategy** that offers reduced fares to passengers with extended waiting times. This approach improved passenger loyalty and stabilized the system during peak periods.

---

## Key Findings

Our experimental setup included real-world data from Beijing’s central region. Here are some of the highlights from our results:

1. **Improved Dispatch Efficiency:** The cooperative DDPG algorithm increased the order response rate by **2% to 6%** and platform revenue by **3% to 9%** compared to traditional methods.

2. **Enhanced Passenger Experience:** Matching distances and durations were reduced significantly, leading to faster pickups and improved customer satisfaction.

3. **Better Driver Outcomes:** Drivers experienced a **6% to 9% increase in income** due to higher-quality matches and reduced idle times.

4. **Effective Incentive Strategies:** The price incentive strategy successfully reduced passenger cancellations, especially in scenarios with long wait times.

---

## Broader Implications

This research contributes to several fields:

- **Urban Mobility:** By improving dispatching systems, cities can reduce traffic congestion and carbon emissions, making ride-sourcing services more sustainable.
- **Artificial Intelligence:** The use of cooperative RL showcases the potential for multi-agent systems to solve complex optimization problems.
- **Platform Economics:** Balancing passenger and driver satisfaction with profitability is a critical challenge for ride-sourcing platforms, and our approach demonstrates a path forward.

---

## Limitations and Future Directions

While the results are promising, there’s room for improvement:
- Our study focused on data from Beijing; applying this framework to other cities will require further calibration to account for differences in passenger behavior and urban layouts.
- The algorithm prioritizes higher-paying trips, raising questions about fairness in dispatching.
- Drivers’ historical data was not included in the MDP framework, which could further enhance personalization.

Future research could explore:
1. **Cross-Platform Cooperation:** Optimizing dispatching across multiple competing platforms.
2. **Enhanced Models:** Developing more accurate representations of passenger and driver behavior.
3. **New RL Techniques:** Experimenting with alternative algorithms to further improve efficiency.

---

## Final Thoughts

This journey into RL-based optimization has been both challenging and rewarding. I’m excited about the potential applications of this research and look forward to collaborating with others to push the boundaries of what’s possible in ride-sourcing services. Let’s continue to innovate and create smarter, more efficient urban mobility solutions!


[Download paper here](https://www.sciencedirect.com/science/article/pii/S0360835224003425)

