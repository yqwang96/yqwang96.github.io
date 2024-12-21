---
title: "Urban Transportation System Emergency"
collection: projects
type: "Simulation and Training Reinforcement Learning Environment"
permalink: /projects/project-3
role: "Developer"
date: 2022-11-30
---

Deduction and simulation platform for urban transportation system under planned events and unplanned events.

---

## **1. Background and Motivation**

In modern cities, road disruption events occur frequently and vary widely, posing significant challenges to urban traffic systems. These events disrupt the daily lives of countless individuals, from commuters struggling to reach work to families planning recreational outings. Broadly, such events can be categorized as follows:  
- **Planned Events**: Large-scale activities, such as concerts or sports events, that result in road closures and traffic congestion.  
- **Unplanned Events**: Natural disasters or emergencies, such as fires or floods, that cause road interruptions unexpectedly.

These disruptions lead to several critical problems:  
- **Unmet travel demand**: Certain destinations become inaccessible due to road closures.  
- **Increased detours**: Road users are forced to choose longer alternative routes.  
- **Mode shift in travel**: Travelers may switch from driving to public transit, such as subways or buses.

Beyond mere data, the human impact is undeniable. People miss important meetings, emergencies are delayed, and communities experience heightened frustration. A systematic platform that analyzes the consequences of these events while keeping people's needs at its core can help create more empathetic and efficient urban systems.

---

## **2. System Overview**

This system is a multi-modal traffic simulation and forecasting platform based on a **super-network model**. It is designed to assess the multidimensional impacts of various road disruption events on urban traffic. By integrating and modeling subway, car, and bus networks, the system dynamically simulates behavioral changes in travel patterns under different event scenarios and provides actionable insights to mitigate inconvenience for everyday travelers.

![Simulation Visualization](/images/project-3/Simulation%20Visualization.png)

---

## **3. Core Functions of the System**

 **3.1 Event Simulation**
- **Planned Events**: Simulating the impacts of planned activities, such as traffic controls or localized congestion caused by large-scale events.  
- **Unplanned Events**: Evaluating how road disruptions caused by disasters like fires or floods affect overall travel demand and redistribution.

 **3.2 Impact Assessment**
- **Unmet travel volume**: Quantifying the proportion of travel demand unmet due to the event.  
- **Detour analysis**: Assessing the detour behavior caused by road closures and its impact on travel time and economic costs.  
- **Mode shift**: Analyzing changes in demand across different modes of transport (e.g., cars, subways, buses) post-event.

 **3.3 Decision Support**
- **Traffic pressure prediction**: Forecasting areas of potential congestion under event conditions to optimize traffic control strategies.  
- **Emergency response planning**: Offering optimized plans for events, such as additional bus routes, adjusted subway schedules, or temporary traffic networks.

---

## **4. Technical Framework and Methodology**

 **4.1 Super-Network Construction**
- The system integrates urban networks across various modes of transportation, including subway, bus, and private car networks, into a unified super-network.  
- Connectivity between modes is achieved through transfer nodes, such as walking links between subway stations and bus stops or parking facilities connected to subway hubs.

 **4.2 Multi-Modal Traffic Simulation**
- Using the super-network, the system accounts for the unique characteristics of each mode of transport (e.g., flexibility of private cars, capacity limits of subways, route dependence of buses) and applies dynamic traffic assignment algorithms to simulate flow changes during events.

 **4.3 Dynamic Event Modeling**
- By inputting different event scenarios (e.g., area closures, sudden disasters), the system dynamically simulates the short- and long-term impacts on the traffic system using traffic flow models and demand data.

 **4.4 Multidimensional Analysis and Outputs**
- The system provides results from multiple perspectives, including:  
  - **Travel demand changes**: Evaluating unmet demand and the redirection of travel flows.  
  - **Travel time impacts**: Calculating additional time costs due to detours or congestion.  
  - **Economic cost evaluation**: Estimating societal losses from the event, such as increased time and fuel consumption.

---

## **5. Application Scenarios**

 **5.1 Urban Planning and Traffic Management**
- Predicting potential traffic pressure before large-scale events and preemptively optimizing traffic control and organization plans.  
- Assessing the impact of new infrastructure on urban traffic systems during the planning phase.

 **5.2 Emergency Response Planning**
- Simulating the impact of unplanned events (e.g., floods, earthquakes) on urban traffic networks to support emergency preparedness.  
- Providing real-time traffic adjustment and emergency optimization plans to minimize disruptions to public mobility.

 **5.3 Behavioral Analysis and Optimization**
- Analyzing travel behavior changes during events to support improvements in public transportation services and better distribution of travel modes.

 **5.4 Policy Support and Evaluation**
- Evaluating the effectiveness of policies, such as congestion pricing or public transport prioritization, during special events and offering data-driven recommendations for policy design.

---

## **6. System Innovations and Advantages**

 **6.1 Multi-Modal Integration**
- By leveraging a super-network model, the system seamlessly integrates multiple transport modes (e.g., subway, bus, private car), reflecting the complexity of multi-modal travel behavior.

 **6.2 Event Simulation and Dynamic Forecasting**
- The system can simulate both planned and unplanned events with high precision, offering real-time and scenario-specific insights for decision-makers.

 **6.3 Comprehensive Evaluation**
- The system provides a multidimensional assessment of event impacts, including unmet travel demand, economic costs, and behavioral changes, giving a complete picture of the event's consequences.

 **6.4 Flexible Scalability**
- The system's architecture supports the integration of emerging modes of transport (e.g., shared mobility, autonomous vehicles) and can expand to include more detailed functionalities as needed.

---

## **7. Conclusion and Future Directions**

This system integrates multi-modal transportation networks to establish a comprehensive platform for simulating and analyzing the impacts of road disruption events, both planned and unplanned. By offering dynamic simulations and multidimensional assessments, it quantifies the impacts on urban traffic systems and provides evidence-based support for urban planning, management, and emergency responses.

 **Future Directions**
1. **Data Refinement**: Incorporating higher-resolution real-time traffic and travel behavior data to enhance simulation accuracy.  
2. **Algorithm Optimization**: Improving the efficiency of simulation algorithms to handle large-scale, city-wide event analyses.  
3. **Incorporation of Emerging Modes**: Considering the potential impacts of autonomous driving, shared mobility, and other new transport modes on event response strategies.  
4. **Stochastic Travel Behavior Modeling**: Introducing more stochastic travel choice behavior models to better reflect the diverse decision-making processes of individuals under unexpected circumstances.

This system is not just a tool for improving traffic management but a step towards creating urban environments that prioritize the well-being of their citizens. By addressing the daily frustrations caused by traffic disruptions, it contributes to building smarter, more empathetic cities.

