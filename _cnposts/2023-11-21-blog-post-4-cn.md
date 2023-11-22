---
title: 'Tugboat scheduling under ship arrival and tugging process time uncertainty论文 学习整理'
date: 2023-11-21
permalink: /cnposts/2023/11/blog-post-4/
tags:
  - 论文精读
  - 海上交通安全
  - 运筹优化
---

因为找工作的原因，最近阅读了一些研究主题为“海上交通安全”，研究方法偏向于运筹优化的论文。恰巧，实验室师兄在博后期间做过相关研究，所以首先了解了一下师兄所做的内容。这篇论文的信息如下：
Liujiang Kang, Qiang Meng, Kok Choon Tan,
Tugboat scheduling under ship arrival and tugging process time uncertainty,
Transportation Research Part E: Logistics and Transportation Review, 144,2020, 102125, https://doi.org/10.1016/j.tre.2020.102125.

# 摘要


## 研究背景
因为浅水区的航行限制和船舶的巨大惯性，船舶往往需要拖船的帮助才能从锚地停靠到泊位。在这一过程中，拖船需要从泊位前往船舶所在区域，再将船舶拖往泊位中。然而由于船舶的航行受天气条件和海洋状况的影响，船舶到达港口的时间和拖船作业所需时间往往具有巨大的不确定性。这两方面将直接影响到拖船开始工作的时间和拖船结束工作的时间。将受影响的拖船分配给其他集装箱船变得不确定。因此，有必要对船舶到达时间不确定和拖船作业时间不确定的场景下的拖船分配优化问题进行研究。

## 研究贡献
作者所提到的论文的研究贡献分为三个方面：
1. 构建了一个考虑不确定的船舶到达时间和拖船作业时间的拖船调度模型。
2. 为解决所提出的这个模型，分别提出了主动式和被动式的调度策略。主动式调度策略考虑调度过程中的预期可变性和不确定性，而被动调度策略则适当调整初始调度，以最小恢复成本应对意外情况。
3. 针对所提出的拖船调度问题，建立了一个有效的混合整数线性规划（MILP）模型，目标是在不确定条件下最小化拖船作业的总加权服务时间和回收成本的期望值。对于大型实例，设计了一种自组织算法来生成牵引链。

## 研究方法

### 模型构建
拖船的典型工作流程分为两个部分，即锚地到泊位和泊位到锚地。在这篇文章的研究中，拖船的服务网络由一个锚地区域、五个泊位、五条双向港口航道和一个拖船基地组成。船舶从深水区驶到锚地区域等待拖船服务。对于锚地到泊位的行程，船舶可以由几只拖船按照既定的时间表拖到泊位，而后进行装卸操作。数小时后，船舶将由拖船拖回锚地，即泊位到锚地的行程。这篇文章更关注于锚地到泊位的行程。应为这一行程一旦被安排，泊位到锚地的行程就可以看做是单位的形成并分开安排。这个流程在文中表示如图1所示。

### 确定性模型(MILP-D)
  作者首先构建了一个不考虑不确定性的给定船舶到达时间的拖船调度模型。
  
  在模型中：
  + 目标为

  $$
  \min \sum_{g} \sum_{j} \sum_{k} \epsilon_{j} \left( t_{gj}^k + c_{gj}^k - A_j \cdot x_{gj}^k \right)
  $$
  
  该目标旨在最小化拖船在锚地到泊位的工作过程中的总加权工作时长。

  + 约束1
  
  $$
  \sum_{g} \sum_{k} x_{gj}^k = 1, \forall j \in J
  $$ 
  
  该约束确保每个船舶在研究时间范围$T$内应当被分配且只能分配到一个拖船。

  + 约束2
  
  $$
  \sum_{j} x_{gj}^k = 1, \forall g \in G, \forall k \in K
  $$ 
  
  该约束确保每个拖船在每个时刻最多只能为一只船舶提供服务。

  + 约束3
  
  $$
  \sum_{j} x_{gj}^{k-1} - \sum_{j} x_{gj}^{k} \geq 0,  \forall g \in G,  \forall k \in \{2, \ldots, m\}
  $$ 
  
  该约束限制拖船只有在完成上一工作流程后才能投入下一工作流程的工作。如果拖船$g$在$k-1$时刻没有为任一船舶提供服务，那么其在$k$时刻就不能提供服务。在这一情况下，如果拖船要提供服务，那么实际上$k$时刻的任务就是该船舶在$k-1$时刻的任务。

  + 约束4
  
  $$
  A_j + M \cdot (x_{gj}^{k} - 1) \leq t_{gj}^{k} \leq A_j + \tau_j, \forall g \in G, \forall j \in J, \forall k \in K
  $$

  该约束计算拖船的工作开始时间$t_{gj}^{k}$。特别地，当$x_{gj}^{k}$为0时，$t_{gj}^{k}$的值被强制为0；反之，$t_{gj}^{k}$的值介于$A_j$和$A_j + \tau_j$之间。

  + 约束5
  
  $$
  C_j + M \cdot (x_{gj}^{k} - 1) \leq c_{gj}^{k} \leq C_j + \pi_j,  \forall g \in G, \forall j \in J, \forall k \in K
  $$

  类似的，该约束计算拖船的工作时长$c_{gj}^{k}$。特别地，当$x_{gj}^{k}$为0时，$c_{gj}^{k}$的值被强制为0；反之，$t_{gj}^{k}$的值介于$C_j$和$C_j + \pi_j$之间。

  + 约束6
  
  $$
  t_{gj}^k - \sum_{j'} \left( t_{gj'}^{k-1} + c_{gj'}^{k-1} \right) - \Delta C \geq M \cdot \left( x_{gj}^{k} - 1 \right), \forall g \in G, \forall j \in J, \forall k \in \{2, \ldots, m\}
  $$

  该约束确保拖船在为新到达的船舶$j$提供服务器之前，必须完成它之前的任务$j'$，并且留有一定的空闲时间$\Delta C$。当$x_{gj}^{k}$为0时，上式右侧为一个很大的负值，该约束就不起作用。该约束是一个'U-turn'约束

  + 约束7
  
  $$
  \sum_{g} \sum_{k} (m_g - w_j) \cdot x_{gj}^{k} \geq 0, \forall j \in J
  $$

  该约束为船舶马力限制。只有拖船$g$的马力超过船舶$j$的吨位时，拖船$g$才能为船舶$j$提供服务。
  
  + 约束8-约束10
  
  $$
  x_{gj}^{k} \in \{0, 1\}, \forall g \in G, \forall j \in J, \forall k \in K
  $$
  
  $$
  t_{gj}^{k} \geq 0,  \forall g \in G, \forall j \in J, \forall k \in K
  $$
  
  $$
  c_{gj}^{k} \geq 0, \forall g \in G, \forall j \in J, \forall k \in K
  $$
  
  上述约束为决策变量的范围约束。



### 不确定性模型

## 知识整理
+ 考虑不确定性的建模方法

+ 

Aren't headings cool?
------