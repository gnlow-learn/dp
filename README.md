# dp
Dirichlet Process

#### $\text{DP}$($\alpha$=1000, $H$=$N(0,1)$, sample=1000, seed=3)
![](plot.svg)

## thought

### $\text{GEM}$($\alpha$: $\R_{>0}$, seed): ($\beta_k$: $(0,1)$[])
- ex: ($\alpha$=5, seed=5) `0.08 0.18 0.02 0.05 0.18 0.21 0.05 0.09 0.00 0.00 ...`
- Griffiths-Engen-McCloskey Distribution
- Stick breaking process로 얻은 stick의 길이 $\beta_k$
    - breaking 할 때 위치(비율)를 $\text{Beta}(1,\alpha)$에서 뽑음
    - $\alpha$가 클수록 $\beta_k$가 균등해지고, 작으면 앞쪽에 큰 값이 몰림
- $ \sum_{k=0}^{\infty} \beta_k = 1 $
    - stick 조각을 다 모으면 길이가 1

### $\text{DP}$\<T>($\alpha$: $\R_{>0}$, $H$(seed): T, sample: $\N$, seed): ($G$: PMF)
- Dirichlet Process
- $\text{GEM}(\alpha)$로 얻은 각 막대의 길이를 확률(y)로 하고 분포 $H$에서 샘플링한 값을 x로 하는 확률질량함수를 생성
- 이론적으로는 무한번 stick breakaing & sample하겠지만 여기서는 횟수를 입력받게 구현
    - generator로 무한하게 만들 수 있겠지만.. 귀찮아..

## 궁금증
- $\delta$(디렉 델타)는 왜 필요하지..?
    - 그냥 점에서 값을 뽑는다는 notation인가?
- 궁극적으로 $\text{DP}$는 임의의 (연속 또는 이산)분포 $H$와 적당히 비슷한 이산 분포 $G$를 생성해내는건가?
    - $\text{GEM}$ 대신 그냥 적당한 함수를 고정으로 쓰면 되지 않나..? 왜 굳이 그것까지 랜덤하게 뽑는거지?
    - 다른 방법에 비해 $\text{DP}$로 얻은 $G$가 어떤 중요한 성질을 가지는지 모르겠다.

## Ref
- [KOOC - Stick Breaking Construction](https://youtu.be/FRqkQN3nJg4)
- [Pony Process](https://youtu.be/bWJ7LB6UUPM)
