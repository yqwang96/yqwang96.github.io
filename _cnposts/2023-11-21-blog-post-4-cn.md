---
title: '《Tugboat scheduling under ship arrival and tugging process time uncertainty》学习整理'
date: 2023-11-21
permalink: /cnposts/2023/11/blog-post-4/
tags:
  - 论文精读
  - 海上交通安全
  - 运筹优化
---

因为找工作的原因，最近阅读了一些研究主题为“海上交通安全”，研究方法偏向于运筹优化的论文。恰巧，实验室师兄在博后期间做过相关研究，所以首先了解了一下师兄所做的内容。这篇论文的信息如下：

Kang, L., Meng, Q., &#38; Tan, K. C. (2020). Tugboat scheduling under ship arrival and tugging process time uncertainty. <i>Transportation Research Part E: Logistics and Transportation Review</i>, <i>144</i>. https://doi.org/10.1016/j.tre.2020.102125


## 摘要
这项研究解决了有趣的拖船调度问题，该问题考虑了大型集装箱港口船舶到达和拖船过程时间的不确定性。不确定的船舶到达和拖船过程时间被制定为一组可以从历史港口交通数据生成的离散场景。通过整合主动和反应式调度策略来处理不确定性，使得这项研究与现有文献中的大多数研究不同。主动调度策略考虑了拖船船队日程执行期间的预期变化度，而反应式调度策略则适当调整初始日程以应对意外场景并最小化恢复成本。为所提出的拖船调度问题建立了一个混合整数线性规划模型。为了处理大规模问题，设计了一种特设算法来生成拖船链，以便有效地解决大规模问题。最后，进行了广泛的数值实验来展示本研究开发的模型和算法的实际意义。

## 研究背景
因为浅水区的航行限制和船舶的巨大惯性，船舶往往需要拖船的帮助才能从锚地停靠到泊位。在这一过程中，拖船需要从泊位前往船舶所在区域，再将船舶拖往泊位中。然而由于船舶的航行受天气条件和海洋状况的影响，船舶到达港口的时间和拖船作业所需时间往往具有巨大的不确定性。这两方面将直接影响到拖船开始工作的时间和拖船结束工作的时间。将受影响的拖船分配给其他集装箱船变得不确定。因此，有必要对船舶到达时间不确定和拖船作业时间不确定的场景下的拖船分配优化问题进行研究。

## 研究贡献
作者所提到的论文的研究贡献分为三个方面：
1. 构建了一个考虑不确定的船舶到达时间和拖船作业时间的拖船调度模型。
2. 为解决所提出的这个模型，分别提出了主动式和被动式的调度策略。主动式调度策略考虑调度过程中的预期可变性和不确定性，而被动调度策略则适当调整初始调度，以最小恢复成本应对意外情况。
3. 针对所提出的拖船调度问题，建立了一个有效的混合整数线性规划（MILP）模型，目标是在不确定条件下最小化拖船作业的总加权服务时间和回收成本的期望值。对于大型实例，设计了一种自组织算法来生成牵引链。

## 研究方法

### 模型构建
拖船的典型工作流程分为两个部分，即锚地到泊位和泊位到锚地。在这篇文章的研究中，拖船的服务网络由一个锚地区域、五个泊位、五条双向港口航道和一个拖船基地组成。船舶从深水区驶到锚地区域等待拖船服务。对于锚地到泊位的行程，船舶可以由几只拖船按照既定的时间表拖到泊位，而后进行装卸操作。数小时后，船舶将由拖船拖回锚地，即泊位到锚地的行程。这篇文章更关注于锚地到泊位的行程。因为这一行程一旦被安排，泊位到锚地的行程就可以看做是单位的行程并分开安排。这个流程在文中表示如图1所示。

![Tugging processes with time uncertainty](https://github.com/yqwang96/yqwang96.github.io/blob/master/images/TuggingProcess.jpg?raw=true)

### 确定性模型(MILP-D)
  作者首先构建了一个不考虑不确定性的给定船舶到达时间的拖船调度模型。
  
  在模型中：
  + 目标（最小化总加权工作时长）

  $$
  \min \sum_{g} \sum_{j} \sum_{k} \epsilon_{j} \left( t_{gj}^k + c_{gj}^k - A_j \cdot x_{gj}^k \right)
  $$
  
  该目标旨在最小化拖船在锚地到泊位的工作过程中的总加权工作时长。

  + 约束1（船舶分配约束）
  
  $$
  \sum_{g} \sum_{k} x_{gj}^k = 1, \forall j \in J
  $$ 
  
  该约束确保每个船舶在研究时间范围$T$内应当被分配且只能分配到一个拖船。

  + 约束2（拖船分配约束）
  
  $$
  \sum_{j} x_{gj}^k = 1, \forall g \in G, \forall k \in K
  $$ 
  
  该约束确保每个拖船在每个时刻最多只能为一只船舶提供服务。

  + 约束3（拖船工序约束）
  
  $$
  \sum_{j} x_{gj}^{k-1} - \sum_{j} x_{gj}^{k} \geq 0,  \forall g \in G,  \forall k \in \{2, \ldots, m\}
  $$ 
  
  该约束限制拖船只有在完成上一工作流程后才能投入下一工作流程的工作。如果拖船$g$在$k-1$时刻没有为任一船舶提供服务，那么其在$k$时刻就不能提供服务。在这一情况下，如果拖船要提供服务，那么实际上$k$时刻的任务就是该船舶在$k-1$时刻的任务。

  + 约束4（工作开始时间计算）
  
  $$
  A_j + M \cdot (x_{gj}^{k} - 1) \leq t_{gj}^{k} \leq A_j + \tau_j, \forall g \in G, \forall j \in J, \forall k \in K
  $$

  该约束计算拖船的工作开始时间$t_{gj}^{k}$。特别地，当$x_{gj}^{k}$为0时，$t_{gj}^{k}$的值被强制为0；反之，$t_{gj}^{k}$的值介于$A_j$和$A_j + \tau_j$之间。

  + 约束5（工作时长计算）
  
  $$
  C_j + M \cdot (x_{gj}^{k} - 1) \leq c_{gj}^{k} \leq C_j + \pi_j,  \forall g \in G, \forall j \in J, \forall k \in K
  $$

  类似的，该约束计算拖船的工作时长$c_{gj}^{k}$。特别地，当$x_{gj}^{k}$为0时，$c_{gj}^{k}$的值被强制为0；反之，$t_{gj}^{k}$的值介于$C_j$和$C_j + \pi_j$之间。

  + 约束6（任务完成约束）
  
  $$
  t_{gj}^k - \sum_{j'} \left( t_{gj'}^{k-1} + c_{gj'}^{k-1} \right) - \Delta C \geq M \cdot \left( x_{gj}^{k} - 1 \right), \forall g \in G, \forall j \in J, \forall k \in \{2, \ldots, m\}
  $$

  该约束确保拖船在为新到达的船舶$j$提供服务器之前，必须完成它之前的任务$j'$，并且留有一定的空闲时间$\Delta C$。当$x_{gj}^{k}$为0时，上式右侧为一个很大的负值，该约束就不起作用。该约束是一个'U-turn'约束

  + 约束7（拖船马力约束）
  
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

上述模型是一个拖船运行过程的单向（锚地到泊位）模型。另外，这个模型在拖船双向工作场景（锚地到泊位作业，泊位到锚地作业。）中也同样有效。因为这两个作业工程之间的时间差大概是几个小时（新加坡港口平均12小时）。在该情况下，更改船只集合$J$的输入和每条船$A_j$的预计到达时间即可。除了上述模型外，文中还讨论了另外两种情况

1. 如果锚地到泊位作业与泊位到锚地作业之间的时间差很小，那么没有必要将这两个作业过程分开处理。相应地，拖船可以在泊位等待船舶卸载或装载货物，一旦完成，拖船立即进行下一个流程的作业。在这种情况下，可以对模型进行以下修改。
   
$$
min \sum_{g} \sum_{j} \sum_{k} \varepsilon_j \cdot (t_{gj}^k + 2 \cdot c_{gj}^k - A_j \cdot x_{gj}^k)
$$

$$
t_{gj}^k - \sum_{j'} (t_{gj}^{k-1} + 2 \cdot c_{gj}^{k-1}) - \Delta C \geq M \cdot (x_{gj}^k - 1), \forall g \in G, \forall j \in J, \forall k \in \{2, \ldots, m\}
$$

2. 如果考虑两个作业过程之间的时间差，但也不需要将这两个作业过程分开处理。在这一情况下，拖船同样需要等待船舶完成泊位的装载/卸载作业的完成。因此，作者在模型中引入了装载/卸载作业时长$L_j$。总的加权服务时长就包括了$L_j$。因此，可以对模型进行以下修改。

$$
min \sum_{g} \sum_{j} \sum_{k} \varepsilon_j \cdot (t_{gj}^k + 2 \cdot c_{gj}^k + L_j \cdot x_{gj}^k - A_j \cdot x_{gj}^k)
$$

$$
t_{gj}^k - \sum_{j} (t_{gj}^{k-1} + 2 \cdot c_{gj}^{k-1} + L_j) - \Delta C \geq M \cdot (x_{gj}^k - 1), \quad \forall g \in G, \forall j \in J, \forall k \in \{2, \ldots, m\}
$$

### 不确定性模型

基于基于历史拖船服务记录，可以得到不确定性场景的分布，并估算事件发生的概率，这些记录为拖船调度提供了宝贵信息。因此，作者使用一组离散场景来处理拖船调度的不确定因素。给定预计的船只到达时间$A_j$和一组离散场景$w_s$，以及各个场景的概率$p(w_s)$。不确定模型可以构建如下。

+ 目标（最小化总加权工作时长）

$$
min \sum_{g} \sum_{j} \sum_{k} \varepsilon_j \cdot (t_{gj}^k + c_{gj}^k - A_j \cdot x_{gj}^k) \\ + \sum_{\omega_s} \left\{ p(\omega_s) \cdot \left( \sum_{g} \sum_{j} \sum_{k} \varepsilon_j \cdot \left( t_{gj}^{k+}(\omega_s) - t_{gj}^{k-}(\omega_s) + c_{gj}^{k+}(\omega_s) - c_{gj}^{k-}(\omega_s) - A_j(\omega_s) \cdot x_{gj}^k(\omega_s) \right) \right) \right\}
$$

+ 约束（与MILP-D模型基本相同）

$$
\sum_{g} \sum_{k} x_{gj}^{k}(\omega_s) = 1, \quad \forall j \in J, \forall \omega_s \in W
$$

$$
\sum_{j} x_{gj}^{k}(\omega_s) \leq 1, \quad \forall g \in G, \forall k \in K, \forall \omega_s \in W
$$

$$
\sum_{j} x_{gj}^{k-1}(\omega_s) - \sum_{j} x_{gj}^{k}(\omega_s) \geq 0, \quad \forall g \in G, \forall k \in \{2, \ldots, m\}, \forall \omega_s \in W
$$

$$
A_j(\omega_s) + M \cdot (x_{gj}^{k}(\omega_s) - 1) \leq t_{gj}^{k} + t_{gj}^{k}(\omega_s)^+ - t_{gj}^{k}(\omega_s)^- \leq A_j(\omega_s) + T_j, \\ \forall g \in G, \forall j \in J, \forall k \in K, \forall \omega_s \in W
$$

$$
C_j(\omega_s) + M \cdot (x_{gj}^{k}(\omega_s) - 1) \leq c_{gj}^{k}(\omega_s) + c_{gj}^{k}(\omega_s)^+ - c_{gj}^{k}(\omega_s)^- \leq C_j(\omega_s) + T_j, \\
\forall g \in G, \forall j \in J, \forall k \in K, \forall \omega_s \in W
$$

$$
t_{gj}^{k} + t_{gj}^{k}(\omega_s)^+ - t_{gj}^{k}(\omega_s)^- - \sum_{j} (t_{gj}^{k-1} + t_{gj}^{k-1}(\omega_s)^+ - t_{gj}^{k-1}(\omega_s)^- + c_{gj}^{k-1}(\omega_s)^+ - c_{gj}^{k-1}(\omega_s)^-) - \Delta C \\ \geq M \cdot (x_{gj}^{k}(\omega_s) - 1), \forall g \in G, \forall j \in J, \forall k \in \{2, \ldots, m\}, \forall \omega_s \in W
$$

$$
\sum_{g} \sum_{k} (m_g - w_j) \cdot x_{gj}^{k}(\omega_s) \geq 0, \forall j \in J, \forall \omega_s \in W
$$

$$
x_{gj}^{k}(\omega_s) \in \{0, 1\}, \forall g \in G, \forall j \in J, \forall k \in K, \forall \omega_s \in W
$$

$$
t_{gj}^{k}(\omega_s)^+ + t_{gj}^{k}(\omega_s)^- \geq 0, \quad \forall g \in G, \forall j \in J, \forall k \in K, \forall \omega_s \in W
$$

$$
c_{gj}^{k}(\omega_s)^+ + c_{gj}^{k}(\omega_s)^- \geq 0, \quad \forall g \in G, \forall j \in J, \forall k \in K, \forall \omega_s \in W
$$


## 知识整理
1. 在考虑不确定性的问题场景中，常见的建模方法包括
  + 随机规划：不确定参数由随机变量表示，目标是最小化期望成本或最大化期望收益。
  + 鲁棒优化：不确定性在某个集合内变化，目标是找到在最坏情况下仍然表现良好的解。
  + 分布式鲁棒优化：
  + 动态规划：在随时间演变的决策问题中，考虑不确定性的影响，每个阶段的最优决策依赖于前一阶段的状态（需要对环境的动态有完全的了解）。
  + 蒙特卡洛模拟：通过模拟大量的随机样本来估计不确定性对模型的影响。
2. 海上交通安全的拖船工作过程。
  + 监视和调度：拖船的操作通常由港口的交通监控中心进行调度。当一艘船只进入港口水域时，监控中心会根据船只的大小、类型以及海域的交通情况来调度拖船。
  + 拖船出动：接到指令后，拖船会从基地出发前往指定的海域位置。
  + 靠近船只：拖船靠近需要协助的船只，并根据需要可能会与船只连接拖缆。
  + 拖带操作：拖船通过其强大的推进力来帮助船只调整方向、减速或停靠。
  + 完成任务：一旦船只安全到达目的地，拖船会断开连接，并返回基地或继续下一项任务。

## 未来可以进行的研究
1. 文中限制每个拖船只为一个船舶提供服务，但实际中应该是可以多条拖船同时为同一船舶提供服务。因此，未来可以考虑这一场景下的拖船调度，同时再考虑拖船马力的异质性，这样进行拖船的调度会与本文非常不同。
2. 文中考虑的是船舶到达时间和拖船工作时间的不确定性，但是船舶到达的数量是否也是不确定的呢。但反过来，作者之所以没有考虑这一点的不确定性，可能因为水运的速度比较慢，加上船舶的AIS系统，港口往往能够提前很长时间知道有多少船舶到达。所以不需要研究船舶到达数量的不确定性。这一点还需要了解一下其他相关研究是怎么做的。

**参考文献**
1. Kang, L., Meng, Q., &#38; Tan, K. C. (2020). Tugboat scheduling under ship arrival and tugging process time uncertainty. <i>Transportation Research Part E: Logistics and Transportation Review</i>, <i>144</i>. https://doi.org/10.1016/j.tre.2020.102125

------