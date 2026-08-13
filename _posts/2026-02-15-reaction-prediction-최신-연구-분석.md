---
layout: post
title: "Reaction Prediction 최신 연구 분석"
date: 2026-02-15 01:42:03 +0900
categories: blog
---

Reaction Prediction(RP)은 두가지 이상의 분자 구조의 상호작용을 예측하는 Molecular Relational Learning(MRL)의 하위 분야로, Reaction 이전 이후의 분자들인 Reactant와 Product을 입력으로 받아 산출량이나 반응의 종류 등을 예측하는 과업이다.

​

기존 MRL 과업은 서로 다른 두 분자 간 상호작용을 예측하는 문제로, 입력 자체가 이질적인 두 그래프의 결합이라는 비교적 단순한 구조를 갖는다. 반면 RP에서는 반응 전후의 Reactant와 Product가 동일한 노드 조합을 공유하며, 주된 변화는 결합의 생성과 절단에 따른 간선 구조의 차이로 나타난다는 뚜렷한 특성이 있다.

​

RP 연구 초기에는 고전적인 SMILES 기반 반응 표기 방식을 그대로 활용하여, 언어모델로 반응을 시퀀스 예측 문제로 다루는 접근이 주류였다[1]. 그러나 Transformer 기반 언어모델은 입력 토큰의 순서에 민감하기 때문에, 동일한 반응이라도 Reactant 또는 Product에 포함된 분자들의 나열 순서에 따라 예측이 달라질 수 있다는 한계가 존재한다. 또한 다수의 방법들이 Reaction Template과 같은 고정 규칙에 의존함으로써, 템플릿 범위를 벗어나는 반응이나 신규 반응 패턴에 대한 일반화 성능이 제한되는 문제가 명확하였다.

​

이러한 한계를 해결하기 위해 Rxn Hypergraph[2]는 입력 순서에 영향을 받지 않는 permutation-invariant 특성을 갖는 그래프 신경망(GNN)을 도입하여, Reactant와 Product를 각각 그래프 형태로 인코딩, 이후 분자 수준의 표현을 집약하는 Mol Hypernode를 구성하고, 이들 분자 표현을 통합해 반응 전체의 변환 정보를 담는 Rxn Hypernode를 추가함으로써, 분자 간 조합과 반응 맥락을 구조적으로 모델링했다.

​

하지만 위와 같은 기존 연구들은 단순히 General Purpose 모델을 활용하여 과업을 수행하였을 뿐, Reaction의 화학적인 특징을 충분히 아키텍처 설계단계에서 고려하지 않았다는 점에서 한계가 뚜렷했다.

​

전통적인 그래프 이론의 관점에서, Reactant와 Product은 그래프의 위상 구조의 변화로써 달라지는 구조 집합의 쌍이다. 즉 Reaction은 그래프의 간선들이 변화하는 과정이며, 이러한 변화 과정의 특징은 Reaction의 종류나, 산출량을 결정하는 결정적인 요인으로 작용할 수 있다.

​

이에 최근의 연구에서는 위와 같은 위상 구조의 변화를 모델이 직접 활용할 수 있도록 반응 중심 정보를 명시적으로 주입하는 방향으로 발전하였다. 대표적으로 RG[3]는 반응 전 원자와 반응 후 원자를 RXNMapper를 통해 정렬하고, 동일 원자 쌍을 대응시키는 매핑 정보를 기반으로 두 그래프를 연결함으로써 반응 전후의 구조적 차이를 하나의 통합된 그래프 표현으로 구성하였다. 이를 통해 모델은 단순히 개별 분자의 특징을 학습하는 것을 넘어, 어떤 결합이 형성되고 어떤 결합이 절단되는지와 같은 반응의 핵심적인 위상 변화를 직접적으로 포착할 수 있었다. 또한 ReaDISH의 경우 거리 기반의 R-hop sampling을 수행하고, Reaction 전 후의 서브 그래프들의 구조적 유사성을 비교, Attention에 Bias로 주입함으로써, 구조 변화 특징을 모델링할 수 있었다.

​

이와 같이 최근의 RP 연구 흐름은 반응을 단순한 분자 집합 간의 대응 문제가 아니라, 구조적 변화가 발생하는 영역을 어떻게 정의하고 표현할 것인가에 초점을 맞추는 방향으로 전환되고 있다. 즉 모델의 성능은 전체 그래프에 대한 표현력보다, 결합 재배열이 발생하는 reaction center를 얼마나 정밀하게 식별하고 이를 표현 공간에서 강조할 수 있는지에 의해 크게 좌우된다.

​

그러나 원자 매핑이나 서브그래프 유사성에 기반한 접근은 몇 가지 구조적 한계를 내포한다. 먼저, RXNMapper와 같은 외부 매핑 도구에 대한 의존성은 오류 전파(error propagation)의 위험을 동반하며, 매핑 품질이 저하될 경우 모델이 학습하는 구조 변화 역시 왜곡될 수 있다. 또한 R-hop 기반 서브그래프 추출은 반응 중심의 공간적 범위를 휴리스틱하게 결정한다는 점에서, 장거리 상호작용이나 전자 이동과 같이 비국소적으로 나타나는 반응 메커니즘을 충분히 포착하지 못할 가능성이 존재한다.
​

[1] Krzyzanowski, A., Pickett, S. D., & Pogány, P. (2025). Exploring BERT for Reaction Yield Prediction: Evaluating the Impact of Tokenization, Molecular Representation, and Pretraining Data Augmentation. Journal of Chemical Information and Modeling, 65(9), 4381-4402.

[2] Tavakoli, M., Shmakov, A., Ceccarelli, F., & Baldi, P. Rxn Hypergraph: a Hypergraph Attention Model for Chemical Reaction Representation. arXiv 2022. arXiv preprint arXiv:2201.01196.

[3] Jian, Y., Zhang, Y., Wei, Y., Fan, H., & Yang, Y. Reaction Graph: Towards Reaction-Level Modeling for Chemical Reactions with 3D Structures. In Forty-second International Conference on Machine Learning.

[4] Shi, R., Chen, L., Yu, G., & Yang, Y. (2025). Reaction Prediction via Interaction Modeling of Symmetric Difference Shingle Sets. arXiv preprint arXiv:2511.06356.
