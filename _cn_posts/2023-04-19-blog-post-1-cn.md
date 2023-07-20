---
title: 'The difference between "Terminated" and "Truncated" in Gymnasium'
date: 2023-04-19
permalink: /cnposts/2023/07/blog-post-1/
tags:
  - cool posts
  - reinforcement learning
  - tage
---

最近，在重新复习一些经典的强化学习算法的时候发现，原本常用于算法验证的环境库gym已经更新迭代，并且出现了新的仿真环境库Gymnasium了。相比于早期的Gym库，新版本的gym库和Gymnasium库在训练过程中存在着一些不同。

## env.reset
在早期版本的gym库中，`env.reset`函数将重置环境为初始状态并返回智能体的观测状态。而在更新后的Gymnasium库中，`env.reset`函数除了返回智能体的初始观测状态外，还会返回`debug_info`变量。具体来看，`debug_info`为一个字典，它存储了用于观测状态的补充信息。其类似于`env.step()`函数返回值中的info变量。

根据我的测试，在Classic control环境中，`debug_info`往往为空字典。在使用时直接忽略即可。

参考链接：[https://gymnasium.farama.org/api/env/#gymnasium.Env.reset](https://gymnasium.farama.org/api/env/#gymnasium.Env.reset)


## env.step
和`env.reset`函数一样，`env.step`函数的返回值也有了很大的变化。在早期版本的gym库中，`env.step`函数的返回值包括四个变量，分别为
- **`next_obs`**：下一时刻的观测状态
- **`reward`**：智能体在当前时间窗获得的reward
- **`done`**：episode是否结束
- **`info`**：补充信息


而在更新后的版本中，`env.step`函数的返回值包括五个变量，分别为
- **`next_obs`**：下一时刻的观测状态
- **`reward`**：智能体在当前时间窗获得的reward
- **`terminated`**: 表示智能体是否已经到达该环境所构建的MDP的终止状态。该终止状态可能为智能体成功完成任务，也可能为智能体抵达了完全失败的状态。比如，在[Cliff Walking](https://gymnasium.farama.org/environments/toy_text/cliff_walking/)任务中，智能体到达终点或者智能体掉下悬崖，`terminated`都将为`True`
- **`truncated`**: 表示该环境所构建的MDP是否达到了截断状态。举个例子来说，在经典的[Mountain Car](https://gymnasium.farama.org/environments/classic_control/mountain_car/)环境中，存在着车辆永远无法达到目的地的可能性。针对这种情况，我们往往会设置一条截断条件——如果车辆经过N步后还没有到达目的地，就重置环境，开启下一个Episode的仿真。此时`truncated`即为`True`
- **`info `**: 补充信息

相比早期版本，最大的不同就是将`done`原本所表示的两种终止状态进行了区分。这一点对于Q-learning一类的算法来说有着很大的影响。在Q-learning算法中，网络的参数更新以TD-error来进行计算。其中

$$TD-error=y_{target}-Q(s,a;\theta)$$

而目标值$y_{target}$的计算为

$$y_{target}=r + \gamma * \max_{a'} Q(s', a'; \theta)$$

在环境抵达终止状态时，$y_{target}$的最后一项$\gamma * \max_{a'} Q(s', a'; \theta)$是不存在的。而当环境被截断时，最后一项应当被计算在$y_{target}$内。

在早期版本的gym库中，如果仅使用`done`的话，无法区分这两种状态，会导致智能体产生错误的价值估计。在更新后的版本中，则很好的弥补了这一点。

参考链接:
1. [https://www.kezhi.tech/5be4b154.html](https://www.kezhi.tech/5be4b154.html)
2. [https://www.gymlibrary.dev/api/core/#gym-env](https://www.gymlibrary.dev/api/core/#gym-env)
3. [https://github.com/openai/gym/issues/2510](https://github.com/openai/gym/issues/2510)

------