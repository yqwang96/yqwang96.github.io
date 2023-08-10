---
title: 'A3C算法中的一些细节'
date: 2023-04-18
permalink: /cnposts/2023/04/blog-post-3/
tags:
  - simulation environment
  - reinforcement learning
  - A3C algorithm
---

最近，再次回顾了经典的Asynchronous Advantage Actor-Critic(A3C)算法，并读了读论文。相比A2C算法，A3C算法在单个CPU上进行多进程的异步处理。这使得算法能够更快地在当前环境多个副本中进行交互。这在提高采样效率的同时，也降低了训练样本之间的相关性。根据原文的结果来看，这能够大大地提升训练速度和训练效果。俗话说，‘温故而知新’。在读论文的时候，也巩固了以往的一些认识。在此，再次记录下来，以便后续回顾。

## 更新频率
作者在本文中提出的是一种异步的架构。他们分别应用于SARSA算法、1-Step Q Learning算法、N-step Q Learning算法和Actor-critic算法。这些算法有很多变种，特别是Q Learning算法与Actor-critic算法，如Dueling DQN算法等等。这些变种算法能够在每个训练时间都对网络参数进行更新。但是，作者在原文中并没有采用这些方法。无论是1-Step Q Learning算法、N-step Q Learning算法还是Actor-critic算法，作者都是累计多个时刻的梯度，或者累计一个Episode的所有梯度后，再进行梯度传递与更新。作者上述做法是为了避免参数频繁的更新，避免学习过程变得很不稳定。

特别是，这里N-step Q learning算法中的N step处理方法与 N-step DQN算法中的不同。
+ 在N-step DQN算法中，设计了一个特殊的Replay buffer。该Replay buffer中每一行存储的是当前轨迹的起始状态和固定的N个时间步后的环境状态，以及在这N个时间步中的累计折扣奖励。在每经过N个时间步后，网络参数即进行更新。
+ 在异步N-step Q learning算法中，作者是在一个Episode结束后再来计算折扣奖励和梯度。这一过程类似于REINFORCE算法中的$G_t$的计算过程。具体而言，对于最后一个时间步的状态，他的梯度计算只考虑当前状态的`r`；对于倒数第二个时间步的状态，它的梯度计算既需要考虑当前状态的`r`，也需要考虑最后一个状态下的`r`。以此类推，在计算起始状态的梯度时，需要考虑所有时刻的`r`。如下述算法中红框中的内容所示。

![异步NStepQ学习算法伪代码](https://github.com/yqwang96/yqwang96.github.io/blob/master/images/AsynchronousNStepQLearning.jpg?raw=true)


## 其他details
+ 作者的学习率调参是从一个对数正态分布中随机抽样得到的。（分布范围从$1e-4$到$(1e-2)$）
+ 文中发现，在1-step的算法中，增加worker的数量带来的效果更加明显。（原因可能为，在1-step算法中，算法只观察未来一个时间步的reward，导致其估计偏差较大。增加worker能够使算法尽可能探索到环境中更多的部分。因此降低了偏差，进而效果明显。）
+ 作者也提到，在目标函数中应用熵正则化能够进一步提升探索的稳定性。


总结来看，相比Replay Buffer，应用Asynchronous框架，能够降低所需要的内存和计算资源。这使其能够在单个CPU上取得比GPU上更快的训练速度和训练效率。但是，这并不意味着Replay buffer是无效的。Replay buffer能够提升样本的利用效率。这在一些采样昂贵的环境中依然很有效。将Replay buffer和Asynchronous框架进行整合是充满前景的。除了文中作者提到的几个算法外，Asynchronous框架同样可以应用于PPO算法和TRPO算法中。

**参考链接**:
1. [https://arxiv.org/pdf/1602.01783.pdf](https://arxiv.org/pdf/1602.01783.pdf)
