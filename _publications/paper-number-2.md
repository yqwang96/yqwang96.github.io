---
title: "Order dispatching optimization in ride-sourcing market by considering cross service modes"
collection: publications
permalink: /publication/paper-number-2
excerpt: 'This study presents a multi-service mode dispatching framework, incorporating a simulator and a two-stage reinforcement learning algorithm, which successfully reduces vehicle idle time and improves passenger experience in ride-sourcing platforms, fulfilling additional basic requests without compromising premium ones, thereby demonstrating the feasibility and effectiveness of cross-mode dispatching in various scenarios'
date: 2023-04-20
venue: 'Journal of Central South University'
# paperurl: 'https://link.springer.com/article/10.1007/s11771-022-5193-4'
# citation: 'Wang, Yq., Wu, Jj., Sun, Hj. et al. Order dispatching optimization in ride-sourcing market by considering cross service modes. J. Cent. South Univ. 30, 642–653 (2023). https://doi.org/10.1007/s11771-022-5193-4'
---

In the world of ride-sourcing, meeting the ever-changing demands of passengers while optimizing driver efficiency remains a tough challenge. Our research dives deep into this issue and offers a novel approach that harnesses the power of **reinforcement learning (RL)** to improve the efficiency of ride-sourcing platforms. Specifically, we focus on optimizing **cross-service mode dispatching**, a strategy that allows premium vehicles to serve basic requests when appropriate, maximizing resource utilization across the platform.

## **Why Cross-Service Dispatching Matters**

Ride-sourcing platforms like Uber and DiDi offer multiple service modes, such as basic and premium tiers, to cater to diverse passenger needs. However, these service modes are typically operated independently, leading to inefficiencies. For instance, while basic-mode passengers might experience long wait times due to undersupply, premium-mode vehicles may cruise without passengers during off-peak periods.

Cross-service dispatching—allowing premium vehicles to serve basic requests—can address these mismatches. However, implementing this strategy is far from straightforward. Key challenges include ensuring premium passengers do not face delays and managing the dynamic and unpredictable nature of travel demand. These complexities are why I developed a **two-stage reinforcement learning framework** combined with a robust simulator to optimize cross-service dispatching.

---

## **How the Framework Works**

Our framework leverages **Reinforcement Learning (RL)** to model and solve the dispatching problem as a **Markov Decision Process (MDP)**, focusing on both immediate rewards and long-term system efficiency.

The methodology includes two main components:

1. **A Multi-Mode Dispatch Simulator**: 
   - This simulation environment enables vehicles to dynamically switch between modes while ensuring minimal disruption to premium services. It uses a virtual repositioning system to assign idle vehicles to hotspots when no suitable matches are found.
   
2. **Two-Stage Reinforcement Learning**:
   - **Stage 1: Virtual Request Generation**: Based on spatial and temporal characteristics, the RL model predicts the most suitable request for each vehicle to fulfill.
   - **Stage 2: Request Refinement**: Using the k-nearest neighbor (KNN) algorithm, the system refines the candidate request pool, selecting the most appropriate matches for dispatching.

By integrating these two stages, our framework dynamically adjusts dispatching strategies to balance the needs of passengers and drivers while optimizing system efficiency.


![Research Framework](/images/paper-2/Simulation-Framework.png)

---

## **Key Findings from the Research**

Using real-world ride-sourcing data from Beijing, we tested the effectiveness of our framework in handling multi-service mode dispatching. Here’s what we discovered:

1. **Increased System Efficiency**:
   - The framework enabled a **3.1% increase in fulfilled basic requests** without reducing premium service availability.
   - It also reduced idle cruising time for premium vehicles, improving resource utilization across the board.

2. **Enhanced Driver and Passenger Experiences**:
   - Drivers experienced higher incomes due to fewer repositioning tasks and more completed rides.
   - Passengers benefited from reduced wait times and improved service reliability.

3. **Economic and Sustainability Gains**:
   - By reducing unnecessary cruising and increasing completed requests, the framework improved platform revenue and contributed to lower emissions.

---

## **Breaking New Ground in Ride-Sourcing**

One of the most innovative aspects of this research is its focus on **cross-service mode dispatching**—a relatively unexplored area in ride-sourcing optimization. Unlike traditional algorithms that operate within a single service mode, our approach enables platforms to dynamically adapt to fluctuating demand across modes.

Additionally, the use of reinforcement learning allows the framework to continuously improve over time, learning from historical data and adapting to new patterns in travel demand.

---

## **Challenges and Future Directions**

Despite its success, our framework leaves room for further exploration:

- **Passenger Preferences**: Incorporating passenger preferences for specific service modes could improve the personalization of dispatching strategies.
- **Real-Time Traffic Dynamics**: Future versions of the framework could integrate live traffic data for even more accurate dispatching.
- **Multi-Platform Operations**: As ride-sourcing markets often feature multiple competing platforms, extending this approach to multi-platform scenarios would be a valuable next step.

These challenges represent exciting opportunities for future research, especially as urban mobility continues to evolve.

---

## **Conclusion**

This research marks a significant step forward in optimizing ride-sourcing operations, demonstrating how **reinforcement learning** can address the complexities of cross-service dispatching. By enabling platforms to dynamically balance supply and demand across service modes, we can create more efficient, sustainable, and user-friendly transportation systems.

As urban mobility demands grow, I believe this approach offers a scalable and adaptable solution for the ride-sourcing industry. For researchers, platform operators, and policymakers alike, this framework highlights the potential of AI-driven innovation to transform transportation.

Let’s reimagine the future of urban travel together—one optimized ride at a time.

[Download paper here](https://link.springer.com/article/10.1007/s11771-022-5193-4)
