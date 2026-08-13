---
layout: page
title: Petobio (페토바이오), MOE of Korea (교육부) and Gyeonggi Province (경기도)
description: Constructing Veterinary Knowledge Graph and Developing GraphRAG-based LLM Services (수의료 지식그래프 구축을 통한 GraphRAG 기반 수의료 LLM 서비스 개발)
img: assets/img/Petobio_Logo.png
redirect: https://unsplash.com
importance: 3
category: work
---

Context Compression for Veterinary Knowledge Retrieval

Veterinary LLM systems retrieve information from heterogeneous sources such as clinical records, diagnostic guidelines, disease descriptions, treatment protocols, and veterinary knowledge graphs. However, retrieved evidence often contains redundant or irrelevant information, which can degrade response quality and increase inference cost.

To address this issue, we develop a context compression framework for veterinary knowledge retrieval that identifies clinically relevant information while filtering redundant or irrelevant retrieved evidence.

A Graph Neural Network (GNN) propagates information across related evidence, enabling the model to capture multi-hop relationships among diseases, symptoms, examinations, treatments, and medications. The resulting representations are selectively compressed using an information bottleneck objective, preserving clinically relevant evidence while suppressing redundant context.

Applications
    1. Context compression for GraphRAG-based veterinary LLM services
    2. Multi-hop reasoning over veterinary knowledge graphs and clinical documents
    3. Integration of heterogeneous veterinary knowledge sources
    4. Filtering of redundant and irrelevant retrieved information
    5. Efficient retrieval-augmented generation for veterinary clinical decision support