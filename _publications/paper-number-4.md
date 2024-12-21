---
title: "Promoting collaborative dispatching in the ride-sourcing market with a third-party integrator. "
collection: publications
permalink: /publication/paper-number-4
excerpt: 'This research proposes a two-stage dispatching framework using a partially observable Markov decision process and a novel MGHMHA-DDPG algorithm to address dispatching inefficiencies in the integrated ride-sourcing market, resulting in enhanced market revenues and order response rates, thus improving overall market efficiency.'
date: 2024-01-16
venue: 'IEEE Transactions on Intelligent Transportation Systems'
# paperurl: 'https://ieeexplore.ieee.org/document/10400991'
# citation: 'Wang, Yq., Wu, Jj., Sun, Hj. et al. Order dispatching optimization in ride-sourcing market by considering cross service modes. J. Cent. South Univ. 30, 642–653 (2023). https://doi.org/10.1007/s11771-022-5193-4'
---

In the ever-evolving landscape of ride-sourcing, the integration of platforms through a third-party integrator is reshaping how we view collaboration and competition in the market. Recently, I delved into an intriguing study titled *"Promoting Collaborative Dispatching in the Ride-Sourcing Market With a Third-Party Integrator"* that explores innovative solutions to enhance market efficiency and passenger satisfaction. Here’s what I discovered and why I’m so excited to share it with you.

## Tackling Market Fragmentation

Traditionally, ride-sourcing platforms operated in silos, each managing its own fleet and customer base. While this model worked to some extent, it led to market fragmentation, inefficient resource allocation, and fierce competition between platforms. Enter the third-party integrator, a groundbreaking model where platforms like Didi, Shenzhou, and others collaborate under a unified system. This integrated mode allows passengers to book rides from any participating platform through a single application, simplifying the user experience and creating a larger pool of available drivers for customers.

But as with any innovation, challenges arise. The competition among platforms for passengers distributed by the integrator can lead to dispatching conflicts, ultimately reducing market efficiency. This is where the research I explored takes center stage.

## A Two-Stage Framework for Collaborative Dispatching

![Research Framework](/images/paper-4/research-framework.png)

The study introduces a sophisticated two-stage dispatching framework to address these challenges. At its core is a **Partially Observable Markov Decision Process (POMDP)**, which models the dispatching process as a blend of cooperative and competitive reinforcement learning. Within this framework, the researchers developed the **MGHMHA-DDPG algorithm**. This algorithm evaluates the generalized value of pairing drivers and passengers based on dynamic market factors, such as supply-demand distribution, vehicle cooperation potential, and temporal characteristics.

The beauty of this algorithm lies in its design. It integrates advanced technologies like multi-graph convolutional networks to capture spatial supply-demand patterns, hierarchical multi-head attention mechanisms to model vehicle cooperation, and gated recurrent units to analyze temporal trends. This multifaceted approach ensures that dispatching decisions are context-aware and optimized for market conditions.

## Real-World Applications in Beijing

Using data from Beijing, the researchers tested their model under real-world conditions. The results were compelling:

- **Order response rates** increased significantly, indicating that more passengers successfully secured rides.
- **Market revenues** soared as dispatching conflicts were minimized, and platforms could better serve customer demand.
- **Passenger satisfaction** improved with reduced waiting times and better matching efficiency.

Interestingly, the algorithm’s performance rivaled that of a hypothetical fully cooperative market scenario, where all platforms operated as one. This highlights the potential of collaborative frameworks to balance competition and cooperation effectively.

## Why This Matters

The implications of this research extend far beyond Beijing. As urban centers worldwide grapple with growing mobility demands, this collaborative approach could serve as a blueprint for integrating ride-sourcing services. It demonstrates that platforms can achieve better outcomes—for themselves and their customers—by embracing cooperation rather than purely competing.

Moreover, the study underscores the role of technology in solving complex logistical challenges. By leveraging cutting-edge machine learning techniques, the MGHMHA-DDPG algorithm showcases how data-driven decision-making can transform industries.

## Looking Ahead

While the research is groundbreaking, there’s room for growth. Future studies could explore:

1. **Carpooling Integration**: Expanding the model to include multi-passenger trips could enhance efficiency further.
2. **Fair Compensation Models**: Ensuring that all platforms benefit equitably in the integrated market is crucial for sustained collaboration.
3. **Scaling Across Cities**: Adapting the model for diverse urban landscapes will test its versatility and robustness.

## Final Thoughts

This study has redefined my understanding of the ride-sourcing market. It’s not just about moving people from point A to point B; it’s about creating a seamless, efficient, and collaborative ecosystem that benefits everyone involved. The integration of platforms through third-party systems and the application of advanced algorithms like MGHMHA-DDPG have the potential to revolutionize urban mobility. I can’t wait to see how this model evolves and impacts cities around the globe.

[Download paper here](https://link.springer.com/article/10.1007/s11771-022-5193-4)
