---
title: "Reassignment Algorithm of the Ride-Sourcing Market Based on Reinforcement Learning"
collection: publications
permalink: /publication/paper-number-1
excerpt: 'This research proposes a two-stage reassignment framework for ride-sourcing markets, integrating a reinforcement learning algorithm and a bilateral matching model, which has been demonstrated to enhance passenger experience, reduce driving costs, and contribute to eco-friendly travel by learning passenger travel patterns and adjusting vehicle reassignment timings.'
date: 2023-05-15
venue: 'IEEE Transactions on Intelligent Transportation Systems'
paperurl: 'https://ieeexplore.ieee.org/document/10128792'
# citation: 'Y. Wang, J. Wu, H. Sun, Y. Lv and G. Xu, "Reassignment Algorithm of the Ride-Sourcing Market Based on Reinforcement Learning," in IEEE Transactions on Intelligent Transportation Systems, doi: 10.1109/TITS.2023.3274636.'

---

As a researcher deeply involved in improving ride-sourcing systems, I am excited to share insights from my latest work, where we tackle some of the most pressing challenges in the industry. The rapid growth of ride-sourcing services such as Uber and DiDi has revolutionized urban transportation, but persistent issues like extended passenger wait times, inefficient dispatching, and unnecessary driving distances remain. My research introduces a cutting-edge reassignment algorithm based on **Reinforcement Learning (RL)**, offering a dynamic, future-ready solution to these challenges.

#### **Understanding the Problem**
Ride-sourcing platforms face significant hurdles in matching drivers and passengers effectively, especially in real-time dynamic urban environments. Existing reassignment strategies often focus on short-term optimization, neglecting potential opportunities for long-term efficiency improvements. Additionally, these solutions sometimes prioritize system-wide benefits over individual user experiences, leading to increased passenger wait times or assigning drivers to distant pick-up points.

![Problem Description](/images/problem-background.png)

To address these limitations, we developed a novel **two-stage reassignment framework** called RL-BMR (Reinforcement Learning-Bilateral Matching Reassignment). This framework dynamically optimizes the reassignment process by integrating reinforcement learning with a personalized matching model, ensuring a balance between passenger satisfaction, system efficiency, and long-term benefits.

---

#### **How Does It Work?**
The framework leverages **Reinforcement Learning (RL)** to dynamically learn travel patterns and spatiotemporal dynamics from historical ride-sourcing data. By modeling the reassignment problem as a **Markov Decision Process (MDP)**, the RL algorithm evaluates not only immediate rewards—such as reduced matching distances—but also long-term returns, including overall system efficiency.

The RL-BMR framework operates in two stages:
1. **Reinforcement Learning (RL) for Decision-Making**:
   - The RL model identifies optimal vehicles and passengers for reassignment by analyzing the dynamic state of the system.
   - Using the Proximal Policy Optimization (PPO) algorithm, the RL model ensures effective action selection while avoiding unnecessary changes.

2. **Bilateral Matching Reassignment (BMR)**:
   - The BMR model adjusts matching relationships between vehicles and passengers to minimize driving distances and waiting times.
   - To enhance individual satisfaction, we developed a **personalized BMR-Pareto model**, ensuring no participant’s experience is worsened during the reassignment process.

![Research Framework of RL-BMR](/images/research-framework.png)

---

#### **Key Findings**
Through extensive experiments conducted in Beijing using real-world ride-sourcing data across a 440-square-kilometer area, our results highlight the transformative potential of the RL-BMR framework:

1. **Enhanced Passenger and Driver Experiences**:
   - The framework reduced passenger pick-up times and driver mileage by over 20%, significantly improving satisfaction levels.
   - It achieved **up to a 30% reduction in reassignment counts**, minimizing disruptions for both drivers and passengers.

2. **Improved System Efficiency**:
   - By dynamically adjusting reassignment moments, the RL-BMR framework increased completed requests by 0.4%-1.5% and platform revenue by 0.48%-1.5%.
   - The framework also reduced the average matching distance by 9%-29%, ensuring faster matches and reduced travel costs.

3. **Sustainability Benefits**:
   - The framework's ability to optimize reassignment decisions led to lower driving distances, reducing carbon emissions and supporting eco-friendly urban travel.

---

#### **A Future-Ready Solution**
One of the most innovative aspects of our study is its adaptability to various dispatching scenarios and algorithms. Whether using simple nearest-distance matching or advanced multi-agent reinforcement learning methods, the RL-BMR framework consistently outperformed traditional models, proving its versatility and robustness. Furthermore, its focus on **Pareto efficiency** ensures that no individual suffers a loss in experience, making it a sustainable and user-friendly solution.

---

#### **Challenges and Future Directions**
Despite the success of this framework, there are some limitations we aim to address in future work:
- It assumes that all vehicles travel the shortest path, which may not always be the fastest due to traffic congestion.
- The study focuses on single-platform operations, whereas real-world markets often involve competition between multiple ride-sourcing platforms.
- Passenger and driver preferences for reassignment strategies remain unaddressed, presenting opportunities for more personalized solutions.

Future research could explore mixed fleets of autonomous and conventional vehicles, incorporate real-time traffic data, and develop strategies for multi-platform ecosystems.

---

### **Conclusion**

The RL-BMR framework represents a transformative step forward for the ride-sourcing industry, combining cutting-edge AI with practical applications to create more efficient, sustainable, and user-friendly systems. As urban transportation continues to evolve, I believe this framework paves the way for a future where ride-sourcing services are faster, greener, and more satisfying for everyone involved.

For platform operators, policymakers, and researchers alike, I hope this work serves as a beacon for how AI-driven innovation can revolutionize mobility and address the ever-changing demands of urban transportation

<!-- [Download paper here](https://ieeexplore.ieee.org/document/10128792) -->