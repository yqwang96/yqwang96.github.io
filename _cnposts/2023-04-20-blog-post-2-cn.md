---
title: 'Actor-critic算法的几种形式'
date: 2023-04-20
permalink: /cnposts/2023/04/blog-post-2/
tags:
  - simulation environment
  - reinforcement learning
---

在强化学习中，Actor-Critic是一个经典算法。它整合了policy-based算法和value-based算法的特点，既能够适用于连续动作空间问题，又可以用于离散动作空间问题。该算法包含两个神经网络，分别为Actor网络与Critic网络。在训练中，Actor网络与环境交互，负责根据当前的观测状态来选择动作，而Critic网络根据环境状态来评估智能体当前的动作的价值。根据网络更新时的所采用的具体计算方法，其衍生出了多种算法，如Advantage Actor-Critic(A2C)算法。

### 从REINFORCE算法谈起
REINFORCE算法是一个经典的强化学习算法。相比value-based算法，它以智能体的动作策略为学习目标，而非学习环境的状态价值函数。同时，REINFORCE算法是基于蒙特卡洛采样的，也就是说它必须等待每个Episode仿真完全结束后再次进行更新。其更新公式如下

$$ \nabla_{\theta} J(\theta_t) = E_{\pi_{\theta}}[\nabla_{\theta} \log \pi_{\theta}(a_t|s_t)G_t]$$

其中，$\pi_{\theta}$为参数$\theta$的参数化策略,$G_t$是从时间步骤$t$开始的未来奖励的总和。

------
### Actor-Critic算法
从上述公式来看，$G_t$相当于一个"评价者"(Critic)，其调整智能体在更新时对$t$时刻所作的动作的更新步长。如果$G_t$很大，梯度则会朝着该动作的方向更新较长的一段距离。同时，$G_t$也可以被推广到其他形式。具体有以下几种形式，
1. $\sum_{t=0}^{\infty}r_t$: 轨迹的总回报
2. $\sum_{t'=t}^{\infty}r_t'$: 采取动作后的回报
3. $\sum_{t'=t}^{\infty}r_t'-b(s_t)$: 减去基线的回报
4. $Q^\pi(s_t,a_t)$：状态-动作函数
5. $A^\pi(s_t,a_t)$: 优势函数
6. $r_t+V^\pi(s_{t+1})-V^\pi(s_t)$: TD-error

在以上几种形式中，1-3通过应用轨迹的回报计算得到，而4-6即为经典的Actor-critic算法，其中5-6分别为Advantage Actor-critic(A2C)算法和1-step Advantage Actor-critic(A2C)算法。它们应用状态-动作价值函数或状态价值函数计算得到。4-6的方法特点为，其不依赖于蒙特卡洛采样，不需要在episode结束后在进行更新。

其中，根据$A^\pi(s_t,a_t)$可根据优势函数的一步估计或多步估计，如式2所示，计算得到。当采用一步估计时，其与形式6相同。
$$ A^{(n)}_t=r_t+\gamma r_{t+1} + \gamma ^2 r_{t+2}+...+r^n V(s_{t+n})-V(s_t)$$
采用多步估计能够降低优势函数估计的偏差，但同时其估计的方差将会增大。针对这一点，又有学者提出了[广义优势函数估计](https://arxiv.org/abs/1506.02438)方法来降低优势函数估计的方差。另外，值得注意的是，当采用一步估计时，算法可以在每个时间步进行网络的更新；而在采用N步估计时，算法需要每经历N个时间步进行一次更新，或者在每个Episode开始N步后，每个时间步进行更新。

此外，根据我在[CartPole环境](https://www.gymlibrary.dev/environments/classic_control/cart_pole/)中的测试结果来看，随着优势函数估计步长的增加，算法收敛的速度将会变慢，并且训练的效果并没有明显改善。在不引入其他Trick的情况下，Advantage actor-critic算法在CartPole环境中的效果并不是很稳定，往往在收敛后，Reward曲线会出现断崖式下跌的情况，可能是因为只采用了单个的actor与critic网络，因此会出现过估计的情况，这种现象可能在采用[DDPG算法](https://arxiv.org/abs/1509.02971)后会有所改善。当然，这也可能是我的超参数设置并不是很好。:D

参考链接：
1. [https://zhuanlan.zhihu.com/p/29486661](https://zhuanlan.zhihu.com/p/29486661) 


------